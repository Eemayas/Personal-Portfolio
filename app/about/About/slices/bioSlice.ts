import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import * as api from "@/lib/api/apis";
import { Bio } from "../types";
import { AxiosError } from "axios";

export interface TBioState {
  bios: Bio[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: TBioState = {
  bios: [],
  status: "idle",
  error: null,
};
export const fetchBio = createAsyncThunk(
  "bio/fetchBio",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.fetchBio();
      return response.data;
    } catch (error) {
      const err = error as AxiosError;
      if (err.response) {
        console.error("Bio Server Error Status:", err.response.status);
        console.error("Bio Server Error Data:", err.response.data);
        return rejectWithValue(err.response.data);
      } else if (err.request) {
        console.error("Bio Request Error:", err.request);
        return rejectWithValue("Network error, no response received");
      } else {
        console.error("Bio Error:", err.message);
        return rejectWithValue(err.message);
      }
    }
  }
);

export const postBio = createAsyncThunk(
  "bio/postBio",
  async (newBio: Bio, { rejectWithValue }) => {
    try {
      const response = await api.postBio(newBio);
      return response.data;
    } catch (error) {
      const err = error as AxiosError;
      if (err.response) {
        console.error("Bio Server Error Status:", err.response.status);
        console.error("Bio Server Error Data:", err.response.data);
        return rejectWithValue(err.response.data);
      } else if (err.request) {
        console.error("Bio Request Error:", err.request);
        return rejectWithValue("Network error, no response received");
      } else {
        console.error("Bio Error:", err.message);
        return rejectWithValue(err.message);
      }
    }
  }
);

export const patchBio = createAsyncThunk(
  "bio/patchBio",
  async (
    { id, updatedBio }: { id: string; updatedBio: Bio },
    { rejectWithValue }
  ) => {
    try {
      const response = await api.patchBio(id, updatedBio);
      return response.data;
    } catch (error) {
      const err = error as AxiosError;
      if (err.response) {
        console.error("Bio Server Error Status:", err.response.status);
        console.error("Bio Server Error Data:", err.response.data);
        return rejectWithValue(err.response.data);
      } else if (err.request) {
        console.error("Bio Request Error:", err.request);
        return rejectWithValue("Network error, no response received");
      } else {
        console.error("Bio Error:", err.message);
        return rejectWithValue(err.message);
      }
    }
  }
);

const bioSlice = createSlice({
  name: "bio",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBio.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchBio.fulfilled, (state, action: PayloadAction<Bio[]>) => {
        state.status = "succeeded";
        state.bios = action.payload;
      })
      .addCase(fetchBio.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as string;
      })
      .addCase(postBio.fulfilled, (state, action: PayloadAction<Bio>) => {
        state.bios.push(action.payload);
      })
      .addCase(postBio.rejected, (state, action) => {
        state.error = action.payload as string;
      })
      .addCase(patchBio.fulfilled, (state, action: PayloadAction<Bio>) => {
        const index = state.bios.findIndex(
          (bio) => bio._id === action.payload._id
        );
        if (index !== -1) {
          state.bios[index] = action.payload;
        }
      })
      .addCase(patchBio.rejected, (state, action) => {
        state.error = action.payload as string;
      });
  },
});

export default bioSlice.reducer;
