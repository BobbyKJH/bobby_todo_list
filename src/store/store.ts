import { configureStore } from "@reduxjs/toolkit";

import introduceReducer from "./introduceSlice";

export const store = configureStore({
  reducer: {
    introduce: introduceReducer,
  },
});
