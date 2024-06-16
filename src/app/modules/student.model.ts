// 18 , 21 May, 2024
// 15, 16 June, 2024
import { Schema, model } from 'mongoose';
import {
  Gaurdian,
  LocalGaurdian,
  Student,
  UserName,
} from './student/student.interface';

const userNameSchema = new Schema<UserName>({
  firstName: {
    type: String,
    // built in validation of mongoose
    required: [true, 'First name is required'], // custom message
    trim: true, // remove extra spaces
    maxlength: [20, 'Max allowed length is 20'], // custom message (optinal)
    validate: function (value: string) {
      const firstNameStr = value.charAt(0).toUpperCase() + value.slice(1);
      return firstNameStr === value;
    },
  },
  middleName: {
    type: String,
  },
  lastName: {
    type: String,
    // built in validation of mongoose
    required: [true, 'Last name is required'], // custom message
  },
});

const gaurdianSchema = new Schema<Gaurdian>({
  fatherName: { type: String, required: true },
  fatherOccupation: { type: String, required: true },
  fatherContactNo: { type: String, required: true },
  motherName: { type: String, required: true },
  motherOccupation: { type: String, required: true },
  motherContactNo: { type: String, required: true },
});

const localGaurdianSchema = new Schema<LocalGaurdian>({
  name: { type: String, required: true },
  occupation: { type: String, required: true },
  contactNo: { type: String, required: true },
  address: { type: String, required: true },
});

const studentSchema = new Schema<Student>({
  id: { type: String, required: true, unique: true }, // built in validation of mongoose
  // built in validation of mongoose
  name: {
    type: userNameSchema,
    required: [true, 'Name is required samiha babu'], // custom message
  },
  // enum (built in validation of mongoose)
  gender: {
    type: String,
    enum: {
      values: ['male', 'female', 'other'],
      message: "Gender only can be 'male' or 'female' or 'other'", // adding custom message
    },
    required: true,
  },
  dateOfBirth: { type: String },
  email: { type: String, required: true, unique: true }, // built in validation of mongoose
  contactNo: { type: String, required: true },
  emergencyContactNo: { type: String, required: true },
  // built in validation of mongoose (enum)
  bloodGroup: {
    type: String,
    enum: {
      values: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
      message: '{VALUE} is not valid', // 'VALUE' gives the value tried to insert
    },
  },
  presentAddress: { type: String, required: true },
  permanentAddress: { type: String, required: true },
  // built in validation of mongoose
  gaurdian: {
    type: gaurdianSchema,
    required: true,
  },
  // built in validation of mongoose
  localGaurdian: {
    type: localGaurdianSchema,
    required: true,
  },
  profileImg: { type: String },
  // built in validation of mongoose (enum)
  isActive: {
    type: String,
    enum: ['active', 'blocked'],
    default: 'active',
  },
});

export const StudentModel = model<Student>('Student', studentSchema);
