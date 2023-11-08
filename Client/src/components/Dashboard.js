import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  markCourseComplete,
  unenrollCourse,
} from "../features/courses/courseSlice";

export const Dashboard = () => {
  const dispatch = useDispatch();
  const [mark, setmark] = useState(false);
  let response = useSelector((state) => state.course.courses);

  let enrolled = useSelector((state) => state.course.enrolledCourses);
  let complete = useSelector((state) => state.course.completedCourses);
  const handleButtonSubmit = (courseId) => {
    let newEnrolled = enrolled.filter((item) => item != courseId);
    dispatch(unenrollCourse(newEnrolled));
  };
  const handleButtonComplete = (courseId) => {
    if (!complete.includes(courseId)) {
      dispatch(markCourseComplete(courseId));
    }
  };

  return (
    <>
      <h1>Student's Dashboard</h1>
      {response
        .filter((course) => enrolled.includes(course.id))
        .map((course) => (
          <div key={course.id} className="dashboard">
            <h3>{course.name}</h3>
            <p>By {course.instructor}</p>
            <img src={course.thumbnail} />
            <button onClick={() => handleButtonSubmit(course.id)}>
              Unenroll
            </button>
            <button onClick={() => handleButtonComplete(course.id)}>
              {complete.includes(course.id) ? "Completed" : "Mark as completed"}
            </button>
          </div>
        ))}
      <div className="progress-bar">
        <b>Progress bar:</b>Total Courses {enrolled.length}
        <p>Completed courses: {complete.length}</p>
      </div>
    </>
  );
};
