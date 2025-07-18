import { configureStore } from "@reduxjs/toolkit";
import studentReducer from "./InformationStudentRedux";

export const store = configureStore({
  reducer: {
    // combine child reducers here
    student: studentReducer,
  },
});