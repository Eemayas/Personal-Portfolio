import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import * as api from "@/lib/api/apis";
import { Project } from "../types";
import { AxiosError } from "axios";

export interface TProjectState {
  projects: Project[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

// Async thunks
export const fetchProject = createAsyncThunk(
  "projects/fetchProject",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.fetchProject();
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

export const postProject = createAsyncThunk(
  "projects/postProject",
  async (newProject: Project, { rejectWithValue }) => {
    try {
      const response = await api.postProject(newProject);
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

export const patchProject = createAsyncThunk(
  "projects/patchProject",
  async (
    { id, updatedProject }: { id: string; updatedProject: Project },
    { rejectWithValue }
  ) => {
    try {
      const response = await api.patchProject(id, updatedProject);
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

export const deleteProject = createAsyncThunk(
  "projects/deleteProject",
  async (id: string, { rejectWithValue }) => {
    try {
      await api.deleteProject(id);
      return id;
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

// Initial state
const initialState: TProjectState = {
  projects: [],
  status: "idle",
  error: null,
};

const projectSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProject.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        fetchProject.fulfilled,
        (state, action: PayloadAction<Project[]>) => {
          state.status = "succeeded";
          state.projects = action.payload;
        }
      )
      .addCase(fetchProject.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as string;
      })
      .addCase(
        postProject.fulfilled,
        (state, action: PayloadAction<Project>) => {
          state.projects.push(action.payload);
        }
      )
      .addCase(
        patchProject.fulfilled,
        (state, action: PayloadAction<Project>) => {
          const index = state.projects.findIndex(
            (project) => project._id === action.payload._id
          );
          if (index !== -1) {
            state.projects[index] = action.payload;
          }
        }
      )
      .addCase(
        deleteProject.fulfilled,
        (state, action: PayloadAction<string>) => {
          state.projects = state.projects.filter(
            (project) => project._id !== action.payload
          );
        }
      );
  },
});

export default projectSlice.reducer;
