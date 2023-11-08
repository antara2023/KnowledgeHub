import { configureStore } from "@reduxjs/toolkit";
import courseReducer from "../features/courses/courseSlice.js";
export default configureStore({
  reducer: {
    course: courseReducer,
  },
});
