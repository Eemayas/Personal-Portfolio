import { configureStore } from "@reduxjs/toolkit";
import socialMediaReducer from "@/app/contacts/Contact/slices/socialMediaSlice";

const store = configureStore({
  reducer: {
    socialMedia: socialMediaReducer,
  },
});



