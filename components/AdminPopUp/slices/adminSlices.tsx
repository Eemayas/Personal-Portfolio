import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the initial state
const initialState: boolean = false;

// Create the slice
const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    setAdmin: (state, action: PayloadAction<boolean>) => {
      return action.payload;
    },
  },
});

// Export the action
export const { setAdmin } = adminSlice.actions;

// Export the reducer
export default adminSlice.reducer;
