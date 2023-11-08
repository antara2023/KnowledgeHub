import Course from "../models/courseModel.js";

export const getCourse = async (req, res) => {
  try {
    const data = await Course.find();
    res.status(200).send(data);
  } catch (e) {
    res.status(500).send(e.message);
  }
};

export const getCoursebyId = async (req, res) => {
  const courseId = req.params.courseId;
  try {
    const data = await Course.find({ id: courseId });
    res.status(200).send(data[0]);
  } catch (e) {
    res.status(500).send(e.message);
  }
};

export const createCourse = async (req, res) => {
  const courseData = req.body;
  try {
    const data = await Course.create({
      ...courseData,
    });

    res.status(200).send(data);
  } catch (e) {
    res.status(500).send(e.message);
  }
};
