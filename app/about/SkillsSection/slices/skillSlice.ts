import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "@/lib/api/apis";
import { AxiosError } from "axios";
import { TBioSkill } from "../types";

export interface TBioSkillState {
  bioSkills: TBioSkill[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: TBioSkillState = {
  bioSkills: [],
  status: "idle",
  error: null,
};
export const fetchBioSkill = createAsyncThunk(
  "skills/fetchBioSkill",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.fetchBioSkill();
      return response.data;
    } catch (error) {
      const err = error as AxiosError;
      if (err.response) {
        console.error("Skills Server Error Status:", err.response.status);
        console.error("Skills Server Error Data:", err.response.data);
        return rejectWithValue(err.response.data);
      } else if (err.request) {
        console.error("Skills Request Error:", err.request);
        return rejectWithValue("Network error, no response received");
      } else {
        console.error("Skills Error:", err.message);
        return rejectWithValue(err.message);
      }
    }
  }
);

export const postBioSkill = createAsyncThunk(
  "skills/postBioSkill",
  async (newBioSkill: TBioSkill, { rejectWithValue }) => {
    try {
      const response = await api.postBioSkill(newBioSkill);
      return response.data;
    } catch (error) {
      const err = error as AxiosError;
      if (err.response) {
        console.error("Skills Server Error Status:", err.response.status);
        console.error("Skills Server Error Data:", err.response.data);
        return rejectWithValue(err.response.data);
      } else if (err.request) {
        console.error("Skills Request Error:", err.request);
        return rejectWithValue("Network error, no response received");
      } else {
        console.error("Skills Error:", err.message);
        return rejectWithValue(err.message);
      }
    }
  }
);

export const patchBioSkill = createAsyncThunk(
  "skills/patchBioSkill",
  async (
    { id, updatedBioSkill }: { id: string; updatedBioSkill: TBioSkill },
    { rejectWithValue }
  ) => {
    try {
      const response = await api.patchBioSkill(id, updatedBioSkill);
      return response.data;
    } catch (error) {
      const err = error as AxiosError;
      if (err.response) {
        console.error("Skills Server Error Status:", err.response.status);
        console.error("Skills Server Error Data:", err.response.data);
        return rejectWithValue(err.response.data);
      } else if (err.request) {
        console.error("Skills Request Error:", err.request);
        return rejectWithValue("Network error, no response received");
      } else {
        console.error("Skills Error:", err.message);
        return rejectWithValue(err.message);
      }
    }
  }
);

export const deleteBioSkill = createAsyncThunk(
  "skills/deleteBioSkill",
  async (id: string, { rejectWithValue }) => {
    try {
      await api.deleteBioSkill(id);
      return id;
    } catch (error) {
      const err = error as AxiosError;
      if (err.response) {
        console.error("Skills Server Error Status:", err.response.status);
        console.error("Skills Server Error Data:", err.response.data);
        return rejectWithValue(err.response.data);
      } else if (err.request) {
        console.error("Skills Request Error:", err.request);
        return rejectWithValue("Network error, no response received");
      } else {
        console.error("Skills Error:", err.message);
        return rejectWithValue(err.message);
      }
    }
  }
);

const bioSkillSlice = createSlice({
  name: "skills",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBioSkill.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchBioSkill.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.bioSkills = action.payload;
      })
      .addCase(fetchBioSkill.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as string;
      })
      .addCase(postBioSkill.fulfilled, (state, action) => {
        state.bioSkills.push(action.payload);
      })
      .addCase(postBioSkill.rejected, (state, action) => {
        state.error = action.payload as string;
      })
      .addCase(patchBioSkill.fulfilled, (state, action) => {
        const index = state.bioSkills.findIndex(
          (skills) => skills._id === action.payload._id
        );
        if (index !== -1) {
          state.bioSkills[index] = action.payload;
        }
      })
      .addCase(patchBioSkill.rejected, (state, action) => {
        state.error = action.payload as string;
      })
      .addCase(deleteBioSkill.fulfilled, (state, action) => {
        state.bioSkills = state.bioSkills.filter(
          (skills) => skills._id !== action.payload
        );
      })
      .addCase(deleteBioSkill.rejected, (state, action) => {
        state.error = action.payload as string;
      });
  },
});

export default bioSkillSlice.reducer;
