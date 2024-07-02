// src/store.js

import { thunk } from "redux-thunk";
import combineReducers from "@/lib/reducers/index";
import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";

// const store = configureStore({
//   reducer: combineReducers,
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
// });

export const store = configureStore({
  reducer: combineReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default store;
