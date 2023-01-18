import { persistReducer } from "redux-persist";

import { combineReducers, configureStore } from "@reduxjs/toolkit";

import storage from "redux-persist/lib/storage";
import storageSession from "redux-persist/lib/storage/session";

import thunk from "redux-thunk";

import todoSlice from "./slice/todoSlice";
import countSlice from "./slice/countSlice";

const localReducers = combineReducers({
  todo: todoSlice.reducer,
});

const sessionReducers = combineReducers({
  count: countSlice.reducer,
});

const localConfig = {
  key: "root/Local",
  storage,
  whitelist: ["todo"],
};

const sessionConfig = {
  key: "root/Session",
  storage: storageSession,
  whitelist: [],
};

const localReducer = persistReducer(localConfig, localReducers);

const sessionReducer = persistReducer(sessionConfig, sessionReducers);

const store = configureStore({
  reducer: { local: localReducer, session: sessionReducer },
  middleware: [thunk],
});

export default store;
