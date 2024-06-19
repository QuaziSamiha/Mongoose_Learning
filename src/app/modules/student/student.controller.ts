import { Request, Response } from 'express';
import { StudentServices } from './student.service';
import Joi from 'joi';
const createStudent = async (req: Request, res: Response) => {
  try {
    // Joi Schema for UserName
    const userNameJoiSchema = Joi.object({
      firstName: Joi.string()
        .trim()
        .max(20)
        .required()
        .regex(/^[A-Z][a-z]*$/, 'capitalize')
        .message(
          '{#label} must start with an uppercase letter and followed by lowercase letters',
        ),
      middleName: Joi.string().trim(),
      lastName: Joi.string()
        .required()
        .pattern(/^[A-Za-z]+$/, 'alpha')
        .message('{#label} must only contain alphabetic characters'),
    });

    // Joi Schema for Guardian
    const guardianJoiSchema = Joi.object({
      fatherName: Joi.string().required(),
      fatherOccupation: Joi.string().required(),
      fatherContactNo: Joi.string().required(),
      motherName: Joi.string().required(),
      motherOccupation: Joi.string().required(),
      motherContactNo: Joi.string().required(),
    });

    // Joi Schema for Local Guardian
    const localGuardianJoiSchema = Joi.object({
      name: Joi.string().trim().required(),
      occupation: Joi.string().required(),
      contactNo: Joi.string().required(),
      address: Joi.string().required(),
    });

    // Joi Schema for Student
    const studentJoiSchema = Joi.object({
      id: Joi.string().required(),
      name: userNameJoiSchema.required(),
      gender: Joi.string().valid('male', 'female', 'other').required(),
      dateOfBirth: Joi.string(),
      email: Joi.string().email().required(),
      contactNo: Joi.string().required(),
      emergencyContactNo: Joi.string().required(),
      bloodGroup: Joi.string().valid(
        'A+',
        'A-',
        'B+',
        'B-',
        'AB+',
        'AB-',
        'O+',
        'O-',
      ),
      presentAddress: Joi.string().required(),
      permanentAddress: Joi.string().required(),
      guardian: guardianJoiSchema.required(),
      localGuardian: localGuardianJoiSchema.required(),
      profileImg: Joi.string(),
      isActive: Joi.string().valid('active', 'blocked').default('active'),
    });

    const { student: studentData } = req.body;

    const { error, value } = studentJoiSchema.validate(studentData);
    console.log(error);
    console.log(value);
    console.log({ error }, { value });

    if (error) {
      res.status(500).json({
        success: false,
        message: 'Something went wrong',
        // error,
        error: error.details,
      });
    }

    // will call service function to send this data
    const result = await StudentServices.createStudentIntoDB(studentData);
    // will send response
    res.status(200).json({
      success: true,
      message: 'student is created succesfully',
      data: result,
    });
  } catch (err) {}
};

const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await StudentServices.getAllStudentsFromDB();
    res.status(200).json({
      success: true,
      message: 'Students are retrieved successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;

    const result = await StudentServices.getSingleStudentFromDB(studentId);
    res.status(200).json({
      success: true,
      message: 'Student is reteieved successfully',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      error: err,
    });
  }
};

export const StudentContollers = {
  createStudent,
  getAllStudents,
  getSingleStudent,
};
