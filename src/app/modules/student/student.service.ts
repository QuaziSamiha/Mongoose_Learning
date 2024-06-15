import { StudentModel } from '../student.model';
import { Student } from './student.interface'; // type definition

const createStudentIntoDB = async (student: Student) => {
  const result = await StudentModel.create(student); // create() mongoose function
  return result; // this result will send to controller
};

const getAllStudentsFromDB = async () => {
  const result = await StudentModel.find();
  return result;
};

const getSingleStudentFromDB = async (id: string) => {
  const result = await StudentModel.findOne({ id });
  return result;
};

export const StudentServices = {
  createStudentIntoDB,
  getAllStudentsFromDB,
  getSingleStudentFromDB,
};
