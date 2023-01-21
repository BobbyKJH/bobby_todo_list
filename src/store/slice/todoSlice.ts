import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface todoState {
  day: string[];
  month: string[];
  year: string[];
}

interface ITodoState {
  local: { todo: todoState };
}

const initialState: todoState = {
  day: [],
  month: [],
  year: [],
};

export const todoSlice = createSlice({
  name: "day/list",
  initialState,
  reducers: {
    dayTodo: (state, action: PayloadAction<string[]>) => {
      state.day = [...action.payload];
    },

    monthTodo: (state, action: PayloadAction<string[]>) => {
      state.month = [...action.payload];
    },

    yearTodo: (state, action: PayloadAction<string[]>) => {
      state.year = [...action.payload];
    },
  },
});

export const { dayTodo, monthTodo, yearTodo } = todoSlice.actions;

export const TodoArray = (state: ITodoState) => state.local.todo;

export default todoSlice;
