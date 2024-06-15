import express from 'express';
import { StudentContollers } from './student.controller';

// route will call controller function
// router is an object
const router = express.Router();

// will call controller function

router.post('/create-student', StudentContollers.createStudent);
// http://localhost:5000/api/v1/students/create-student

router.get('/', StudentContollers.getAllStudents);
// http://localhost:5000/api/v1/students

router.get('/:studentId', StudentContollers.getSingleStudent);
// http://localhost:5000/api/v1/students/123456

export const StudentRoutes = router;
