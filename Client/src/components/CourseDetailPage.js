import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const CourseDetailPage = ({ setEnrollment, enrolled }) => {
  const { courseId } = useParams();
  const [course, setcourse] = useState({});

  const fetchCourseData = () => {
    fetch(`http://localhost:5030/api/course/list/${courseId}`)
      .then((res) => res.json())
      .then((res) => setcourse(res));
  };

  useEffect(() => {
    fetchCourseData();
  }, []);

  return (
    <div className="course-data">
      <h1>Course Name: {course.name}</h1>
      <img src={course.thumbnail} />
      <h3>Name of the instructor: {course.instructor}</h3>
      <p>
        <b>Course Detail:</b> {course.description}
      </p>
      <h3>Enrollment status: {course.enrollmentStatus}</h3>
      <p>
        <b>Course Duration:</b> {course.duration}
      </p>
      <p>
        <b>Course Schedule:</b> {course.schedule}
      </p>
      <p>
        <b>Location:</b> {course.location}
      </p>
      <p>
        <b>Pre-Requisites:</b> {course.prerequisites}
      </p>
      <div>
        <b>Course Syllabus:</b>
        {course?.syllabus?.map((item) => {
          return (
            <div>
              <p>
                <b>
                  {item.week}:{item.topic}
                </b>
              </p>
              <p>{item.content}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
