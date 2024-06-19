import { Request, Response } from 'express';
import { StudentServices } from './student.service';
import studentValidationSchema from './student.validation';
const createStudent = async (req: Request, res: Response) => {
  try {
    const { student: studentData } = req.body;

    // Joi validation schema used
    // data validation using Joi
    const { error, value } = studentValidationSchema.validate(studentData);
    // value = validated data
    // console.log({ error }, { value });

    // will call service function to send this data
    // sending validated data
    const result = await StudentServices.createStudentIntoDB(value);

    if (error) {
      res.status(500).json({
        success: false,
        message: 'Something went wrong',
        // error,
        error: error.details,
      });
    }

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
