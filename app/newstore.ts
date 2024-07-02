import { configureStore } from "@reduxjs/toolkit";
import socialMediaReducer from "@/app/contacts/Contact/slices/socialMediaSlice";

const store = configureStore({
  reducer: {
    socialMedia: socialMediaReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
