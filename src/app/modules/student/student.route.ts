import express from 'express';
import { StudentContollers } from './student.controller';

// route will call controller function
const router = express.Router();

// will call controller function
router.post('/create-student', StudentContollers.createStudent);
