// src/store.js

import { thunk } from "redux-thunk";
import combineReducers from "@/lib/reducers/index";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: combineReducers,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});
export default store;
