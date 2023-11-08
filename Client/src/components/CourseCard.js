import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { enrollInCourse } from "../features/courses/courseSlice";

const CourseCard = ({ course }) => {
  const dispatch = useDispatch();
  let enrolledCourses = useSelector((state) => state.course.enrolledCourses);
  const handleButtonSubmit = (e) => {
    if (!enrolledCourses.includes(course.id)) {
      dispatch(enrollInCourse(course.id));
      alert("Thanks for enrolling.");
    } else {
      alert("Already enrolled in the course!");
    }
  };

  return (
    <div className="course-card">
      <h3>
        <Link to={`/detail/${course.id}`}>{course.name}</Link>
      </h3>
      <p>By {course.instructor}</p>
      <p>{course.description}</p>
      <img src={course.thumbnail} />
      <button onClick={handleButtonSubmit}>Enroll in this course</button>
    </div>
  );
};

export default CourseCard;