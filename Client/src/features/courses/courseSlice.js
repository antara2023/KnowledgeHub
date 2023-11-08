import { createSlice } from "@reduxjs/toolkit";

export const courseSlice = createSlice({
  name: "courses",
  initialState: {
    courses: [],
    enrolledCourses: [],
    completedCourses: [],
  },
  reducers: {
    fetchCourses: (state, action) => {
      state.courses = action.payload;
    },
    enrollInCourse: (state, action) => {
      state.enrolledCourses = [...state.enrolledCourses, action.payload];
    },
    markCourseComplete: (state, action) => {
      state.completedCourses = [...state.completedCourses, action.payload];
    },
    unenrollCourse: (state, action)=> {
        state.enrolledCourses = action.payload 
    }
  },
});

export const { fetchCourses, enrollInCourse, markCourseComplete, unenrollCourse } =
  courseSlice.actions;

export default courseSlice.reducer;
