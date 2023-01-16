import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface todoState {
  day: string[];
  month: string[];
  year: string[];
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

export default todoSlice;
