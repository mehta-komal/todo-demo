import { configureStore } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

//Create an state
const initialTask = {
  addTask: [],
  completed: false,
};

// Created Reducer

const todoSlice = createSlice({
  name: 'todoapplication',
  initialState: initialTask,
  reducers: {
    addTheTask: (state, action) => {
      if (action.payload !== '') {
        state.addTask.push(action.payload);
      } else {
        alert('please add task');
      }
      
    },
    completeTask: (state, action) => {
      state.completed = action.payload;
    },
    removeTask: (state, action) => {
      state.addTask = state.addTask.filter(
        (task) => task.id !== action.payload
      );
    },
  },
});
export const { addTheTask, completeTask, removeTask } = todoSlice.actions;
const todoReducer = todoSlice.reducer;
const combineReducer = {
  todo: todoReducer,
};

//Created an store

export const myTodoStore = configureStore({
  reducer: combineReducer,
});
