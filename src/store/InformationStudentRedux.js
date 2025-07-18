import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  students: [],
  editingStudent: null,
};

const studentSlice = createSlice({
  name: 'student',
  initialState,
  reducers: {
    addStudent: (state, action) => {
      state.students.push(action.payload);
    },
    deleteStudent: (state, action) => {
      state.students = state.students.filter(sv => sv.id !== action.payload);
    },
    startEditStudent: (state, action) => {
      state.editingStudent = action.payload;
    },
    updateStudent: (state, action) => {
      const index = state.students.findIndex(sv => sv.id === action.payload.id);
      if (index !== -1) {
        state.students[index] = action.payload;
        state.editingStudent = null;
      }
    },
    cancelEdit: (state) => {
      state.editingStudent = null;
    }
  },
});

export const {
  addStudent,
  deleteStudent,
  startEditStudent,
  updateStudent,
  cancelEdit
} = studentSlice.actions;

export default studentSlice.reducer;