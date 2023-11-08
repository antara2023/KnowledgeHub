import { Router } from "express";
import {createCourse, getCourse, getCoursebyId} from "../controller/courseController.js";

const router = Router()

router.get('/list/:courseId', getCoursebyId) 
router.get('/list', getCourse)
router.post('/', createCourse)


export default router 