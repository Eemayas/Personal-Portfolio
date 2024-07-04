import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as api from "@/lib/api/apis";
import { AxiosError } from "axios";
import { TExperience } from "../types";
export interface ExperienceState {
  experiences: TExperience[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}
// Async thunks
export const fetchExperiences = createAsyncThunk(
  "experiences/fetch",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.fetchExperience();
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

export const postExperiences = createAsyncThunk(
  "experiences/post",
  async (newExperiences: TExperience, { rejectWithValue }) => {
    try {
      const response = await api.postExperience(newExperiences);
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

export const patchExperiences = createAsyncThunk(
  "experiences/patch",
  async (
    { id, updatedExperiences }: { id: string; updatedExperiences: TExperience },
    { rejectWithValue }
  ) => {
    try {
      const response = await api.patchExperience(id, updatedExperiences);
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

export const deleteExperiences = createAsyncThunk(
  "experiences/delete",
  async (id: string, { rejectWithValue }) => {
    try {
      await api.deleteExperience(id);
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
const initialState: ExperienceState = {
  experiences: [],
  status: "idle",
  error: null,
};

const experiencesSlice = createSlice({
  name: "experiences",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchExperiences.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        fetchExperiences.fulfilled,
        (state, action: PayloadAction<TExperience[]>) => {
          state.status = "succeeded";
          state.experiences = action.payload;
        }
      )
      .addCase(fetchExperiences.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as string;
      })
      .addCase(
        postExperiences.fulfilled,
        (state, action: PayloadAction<TExperience>) => {
          state.experiences.push(action.payload);
        }
      )
      .addCase(
        patchExperiences.fulfilled,
        (state, action: PayloadAction<TExperience>) => {
          const index = state.experiences.findIndex(
            (project) => project._id === action.payload._id
          );
          if (index !== -1) {
            state.experiences[index] = action.payload;
          }
        }
      )
      .addCase(
        deleteExperiences.fulfilled,
        (state, action: PayloadAction<string>) => {
          state.experiences = state.experiences.filter(
            (project) => project._id !== action.payload
          );
        }
      );
  },
});

export default experiencesSlice.reducer;
