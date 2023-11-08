import { useEffect, useState } from "react";
import { CourseList } from "./CourseList";
import { useDispatch, useSelector } from "react-redux";
import { fetchCourses } from "../features/courses/courseSlice";

export const CoursePage = () => {
  const dispatch = useDispatch();
  const [courseList, setCourseList] = useState([]);
  const [searchText, setSearchText] = useState("");

  const fetchCourseData = () => {
    fetch(`http://localhost:5030/api/course/list`)
      .then((res) => res.json())
      .then((data) => {
        dispatch(fetchCourses(data));
        setCourseList(data);
      });
  };

  useEffect(() => {
    fetchCourseData();
  }, []);
  let courses = useSelector((state) => state.course.courses);
  const searchByName = (e) => {
    setCourseList(
      courseList.filter(
        (course) =>
          course.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
          course.instructor.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };

  useEffect(() => {
    if (searchText === "") {
      setCourseList(courses);
      clearTimeout(debounceTimer);
    }
  }, [searchText]);

  const [debounceTimer, setDebounceTimer] = useState(0);
  const debounceSearch = (event, debounceTimeout) => {
    setSearchText(event.target.value);

    if (debounceTimeout !== 0) {
      clearTimeout(debounceTimeout);
    }

    let newDebounceTimer = setTimeout(() => {
      searchByName(event);
    }, 500);

    setDebounceTimer(newDebounceTimer);
  };

  return (
    <div className="CoursePage">
      <div>
        <h1>Course List</h1>
        <h3>-Leverage the power of online learning</h3>
      </div>
      <input
        type="Search"
        value={searchText}
        placeholder="Search by course or instructor name"
        onChange={(e) => debounceSearch(e, debounceTimer)}
      ></input>
      <CourseList courseList={courseList} />
    </div>
  );
};
