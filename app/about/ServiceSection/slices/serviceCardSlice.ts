import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import * as api from "@/lib/api/apis";
import { AxiosError } from "axios";
import { TServiceCard } from "../types";

export interface TServiceState {
  bioCards: TServiceCard[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: TServiceState = {
  bioCards: [],
  status: "idle",
  error: null,
};

export const fetchBioCard = createAsyncThunk(
  "bioCard/fetchBioCard",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.fetchBioCard();
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

export const postBioCard = createAsyncThunk(
  "bioCard/postBioCard",
  async (newBioCard: TServiceCard, { rejectWithValue }) => {
    try {
      const response = await api.postBioCard(newBioCard);
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

export const patchBioCard = createAsyncThunk(
  "bioCard/patchBioCard",
  async (
    { id, updatedBioCard }: { id: string; updatedBioCard: TServiceCard },
    { rejectWithValue }
  ) => {
    try {
      const response = await api.patchBioCard(id, updatedBioCard);
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

export const deleteBioCard = createAsyncThunk(
  "bioCard/deleteBioCard",
  async (id: string, { rejectWithValue }) => {
    try {
      await api.deleteBioCard(id);
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

const bioCardSlice = createSlice({
  name: "bioCard",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBioCard.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        fetchBioCard.fulfilled,
        (state, action: PayloadAction<TServiceCard[]>) => {
          state.status = "succeeded";
          state.bioCards = action.payload;
        }
      )
      .addCase(fetchBioCard.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as string;
      })
      .addCase(
        postBioCard.fulfilled,
        (state, action: PayloadAction<TServiceCard>) => {
          state.bioCards.push(action.payload);
        }
      )
      .addCase(postBioCard.rejected, (state, action) => {
        state.error = action.payload as string;
      })
      .addCase(
        patchBioCard.fulfilled,
        (state, action: PayloadAction<TServiceCard>) => {
          const index = state.bioCards.findIndex(
            (bioCard) => bioCard._id === action.payload._id
          );
          if (index !== -1) {
            state.bioCards[index] = action.payload;
          }
        }
      )
      .addCase(patchBioCard.rejected, (state, action) => {
        state.error = action.payload as string;
      })
      .addCase(
        deleteBioCard.fulfilled,
        (state, action: PayloadAction<string>) => {
          state.bioCards = state.bioCards.filter(
            (bioCard) => bioCard._id !== action.payload
          );
        }
      )
      .addCase(deleteBioCard.rejected, (state, action) => {
        state.error = action.payload as string;
      });
  },
});

export default bioCardSlice.reducer;
