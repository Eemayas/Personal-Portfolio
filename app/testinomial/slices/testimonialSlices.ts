import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as api from "@/lib/api/apis";
import { AxiosError } from "axios";
import { TTestimonial } from "../types";

export interface TTestimonialState {
  testimonials: TTestimonial[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}
// Async thunks
export const fetchTestimonial = createAsyncThunk(
  "testimonials/fetch",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.fetchTestimonial();
      return response.data;
    } catch (error) {
      const err = error as AxiosError;
      if (err.response) {
        console.error("Project Server Error Status:", err.response.status);
        console.error("Project Server Error Data:", err.response.data);
        return rejectWithValue(err.response.data);
      } else if (err.request) {
        console.error("Project Request Error:", err.request);
        return rejectWithValue("Network error, no response received");
      } else {
        console.error("Project Error:", err.message);
        return rejectWithValue(err.message);
      }
    }
  }
);

export const postTestimonial = createAsyncThunk(
  "testimonials/post",
  async (newTestimonial: TTestimonial, { rejectWithValue }) => {
    try {
      const response = await api.postTestimonial(newTestimonial);
      return response.data;
    } catch (error) {
      const err = error as AxiosError;
      if (err.response) {
        console.error("BioCard Server Error Status:", err.response.status);
        console.error("BioCard Server Error Data:", err.response.data);
        return rejectWithValue(err.response.data);
      } else if (err.request) {
        console.error("BioCard Request Error:", err.request);
        return rejectWithValue("Network error, no response received");
      } else {
        console.error("BioCard Error:", err.message);
        return rejectWithValue(err.message);
      }
    }
  }
);

export const patchTestimonial = createAsyncThunk(
  "testimonials/patch",
  async (
    {
      id,
      updatedTestimonial,
    }: { id: string; updatedTestimonial: TTestimonial },
    { rejectWithValue }
  ) => {
    try {
      const response = await api.patchTestimonial(id, updatedTestimonial);
      return response.data;
    } catch (error) {
      const err = error as AxiosError;
      if (err.response) {
        console.error("BioCard Server Error Status:", err.response.status);
        console.error("BioCard Server Error Data:", err.response.data);
        return rejectWithValue(err.response.data);
      } else if (err.request) {
        console.error("BioCard Request Error:", err.request);
        return rejectWithValue("Network error, no response received");
      } else {
        console.error("BioCard Error:", err.message);
        return rejectWithValue(err.message);
      }
    }
  }
);

export const deleteTestimonial = createAsyncThunk(
  "testimonials/delete",
  async (id: string, { rejectWithValue }) => {
    try {
      await api.deleteTestimonial(id);
      return id;
    } catch (error) {
      const err = error as AxiosError;
      if (err.response) {
        console.error("BioCard Server Error Status:", err.response.status);
        console.error("BioCard Server Error Data:", err.response.data);
        return rejectWithValue(err.response.data);
      } else if (err.request) {
        console.error("BioCard Request Error:", err.request);
        return rejectWithValue("Network error, no response received");
      } else {
        console.error("BioCard Error:", err.message);
        return rejectWithValue(err.message);
      }
    }
  }
);

// Initial state
const initialState: TTestimonialState = {
  testimonials: [],
  status: "idle",
  error: null,
};

const testimonialSlice = createSlice({
  name: "testimonial",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTestimonial.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        fetchTestimonial.fulfilled,
        (state, action: PayloadAction<TTestimonial[]>) => {
          state.status = "succeeded";
          state.testimonials = action.payload;
        }
      )
      .addCase(fetchTestimonial.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as string;
      })
      .addCase(
        postTestimonial.fulfilled,
        (state, action: PayloadAction<TTestimonial>) => {
          state.testimonials.push(action.payload);
        }
      )
      .addCase(
        patchTestimonial.fulfilled,
        (state, action: PayloadAction<TTestimonial>) => {
          const index = state.testimonials.findIndex(
            (project) => project._id === action.payload._id
          );
          if (index !== -1) {
            state.testimonials[index] = action.payload;
          }
        }
      )
      .addCase(
        deleteTestimonial.fulfilled,
        (state, action: PayloadAction<string>) => {
          state.testimonials = state.testimonials.filter(
            (project) => project._id !== action.payload
          );
        }
      );
  },
});

export default testimonialSlice.reducer;
