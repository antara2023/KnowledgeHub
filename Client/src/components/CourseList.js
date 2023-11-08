import CourseCard from "./CourseCard";

export function CourseList({ courseList }) {
  return (
    <div className="course-list">
      {courseList?.map((course) => {
        return <CourseCard course={course} key={course.id} />;
      })}
    </div>
  );
}
