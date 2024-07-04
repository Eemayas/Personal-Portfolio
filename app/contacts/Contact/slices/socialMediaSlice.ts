import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import * as api from "@/lib/api/apis";

export interface TSocialMediaState {
  socialMedias: any[];
  loading: boolean;
  error: string | null;
}

const initialState: TSocialMediaState = {
  socialMedias: [],
  loading: false,
  error: null,
};

// Async thunks for API calls
export const fetchSocialMedia = createAsyncThunk(
  "socialMedia/fetchSocialMedia",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.fetchSocialMedia();
      return response.data;
    } catch (error: any) {
      if (error.response) {
        console.error(
          " SocialMedia Server Error Status:",
          error.response.status
        );
        console.error(" SocialMedia Server Error Data:", error.response.data);
        return rejectWithValue(error.response.data);
      } else if (error.request) {
        console.error(" SocialMedia Request Error:", error.request);
        return rejectWithValue("Network error, no response received");
      } else {
        console.error(" SocialMedia Error:", error.message);
        return rejectWithValue(error.message);
      }
    }
  }
);

export const postSocialMedia = createAsyncThunk(
  "socialMedia/postSocialMedia",
  async (newSocialMedia: any, { rejectWithValue }) => {
    try {
      const response = await api.postSocialMedia(newSocialMedia);
      return response.data;
    } catch (error: any) {
      if (error.response) {
        console.error(
          " SocialMedia Server Error Status:",
          error.response.status
        );
        console.error(" SocialMedia Server Error Data:", error.response.data);
        return rejectWithValue(error.response.data);
      } else if (error.request) {
        console.error(" SocialMedia Request Error:", error.request);
        return rejectWithValue("Network error, no response received");
      } else {
        console.error(" SocialMedia Error:", error.message);
        return rejectWithValue(error.message);
      }
    }
  }
);

export const patchSocialMedia = createAsyncThunk(
  "socialMedia/patchSocialMedia",
  async (
    { id, updatedSocialMedia }: { id: string; updatedSocialMedia: any },
    { rejectWithValue }
  ) => {
    try {
      const response = await api.patchSocialMedia(id, updatedSocialMedia);
      return response.data;
    } catch (error: any) {
      if (error.response) {
        console.error(
          " SocialMedia Server Error Status:",
          error.response.status
        );
        console.error(" SocialMedia Server Error Data:", error.response.data);
        return rejectWithValue(error.response.data);
      } else if (error.request) {
        console.error(" SocialMedia Request Error:", error.request);
        return rejectWithValue("Network error, no response received");
      } else {
        console.error(" SocialMedia Error:", error.message);
        return rejectWithValue(error.message);
      }
    }
  }
);

export const deleteSocialMedia = createAsyncThunk(
  "socialMedia/deleteSocialMedia",
  async (id: string, { rejectWithValue }) => {
    try {
      await api.deleteSocialMedia(id);
      return id;
    } catch (error: any) {
      if (error.response) {
        console.error(
          "SocialMedia Server Error Status:",
          error.response.status
        );
        console.error(" SocialMedia Server Error Data:", error.response.data);
        return rejectWithValue(error.response.data);
      } else if (error.request) {
        console.error(" SocialMedia Request Error:", error.request);
        return rejectWithValue("Network error, no response received");
      } else {
        console.error(" SocialMedia Error:", error.message);
        return rejectWithValue(error.message);
      }
    }
  }
);

const socialMediaSlice = createSlice({
  name: "socialMedia",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSocialMedia.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchSocialMedia.fulfilled,
        (state, action: PayloadAction<any[]>) => {
          state.loading = false;
          state.socialMedias = action.payload;
        }
      )
      .addCase(
        fetchSocialMedia.rejected,
        (state, action: PayloadAction<any>) => {
          state.loading = false;
          state.error = action.payload;
        }
      )
      .addCase(
        postSocialMedia.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.socialMedias.push(action.payload);
        }
      )
      .addCase(
        patchSocialMedia.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.socialMedias = state.socialMedias.map((social) =>
            social._id === action.payload._id ? action.payload : social
          );
        }
      )
      .addCase(
        deleteSocialMedia.fulfilled,
        (state, action: PayloadAction<string>) => {
          state.socialMedias = state.socialMedias.filter(
            (social) => social._id !== action.payload
          );
        }
      );
  },
});

export default socialMediaSlice.reducer;
