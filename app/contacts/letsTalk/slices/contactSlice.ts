// contactSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import * as api from "@/lib/api/apis";
import { Contact } from "../types";

// Define the initial state type
interface ContactState {
  contacts: Contact[];
  loading: boolean;
  error: string | null;
}

const initialState: ContactState = {
  contacts: [],
  loading: false,
  error: null,
};

// Async thunks
export const fetchContact = createAsyncThunk(
  "contact/fetchContact",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.fetchContact();
      return response.data;
    } catch (error) {
      if (error.response) {
        console.error("Contact Server Error Status:", error.response.status);
        console.error("Contact Server Error Data:", error.response.data);
        return rejectWithValue(error.response.data);
      } else if (error.request) {
        console.error("Contact Request Error:", error.request);
        return rejectWithValue("Network error, no response received");
      } else {
        console.error("Contact Error:", error.message);
        return rejectWithValue(error.message);
      }
    }
  }
);

export const postContact = createAsyncThunk(
  "contact/postContact",
  async (newContact: Contact, { rejectWithValue }) => {
    try {
      const response = await api.postContact(newContact);
      return response.data;
    } catch (error) {
      if (error.response) {
        console.error("Contact Server Error Status:", error.response.status);
        console.error("Contact Server Error Data:", error.response.data);
        return rejectWithValue(error.response.data);
      } else if (error.request) {
        console.error("Contact Request Error:", error.request);
        return rejectWithValue("Network error, no response received");
      } else {
        console.error("Contact Error:", error.message);
        return rejectWithValue(error.message);
      }
    }
  }
);

export const patchContact = createAsyncThunk(
  "contact/patchContact",
  async (
    { id, updatedContact }: { id: string; updatedContact: Contact },
    { rejectWithValue }
  ) => {
    try {
      const response = await api.patchContact(id, updatedContact);
      return response.data;
    } catch (error) {
      if (error.response) {
        console.error("Contact Server Error Status:", error.response.status);
        console.error("Contact Server Error Data:", error.response.data);
        return rejectWithValue(error.response.data);
      } else if (error.request) {
        console.error("Contact Request Error:", error.request);
        return rejectWithValue("Network error, no response received");
      } else {
        console.error("Contact Error:", error.message);
        return rejectWithValue(error.message);
      }
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contact/deleteContact",
  async (id: string, { rejectWithValue }) => {
    try {
      await api.deleteContact(id);
      return id;
    } catch (error) {
      if (error.response) {
        console.error("Contact Server Error Status:", error.response.status);
        console.error("Contact Server Error Data:", error.response.data);
        return rejectWithValue(error.response.data);
      } else if (error.request) {
        console.error("Contact Request Error:", error.request);
        return rejectWithValue("Network error, no response received");
      } else {
        console.error("Contact Error:", error.message);
        return rejectWithValue(error.message);
      }
    }
  }
);

// Slice
const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchContact.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchContact.fulfilled,
        (state, action: PayloadAction<Contact[]>) => {
          state.contacts = action.payload;
          state.loading = false;
        }
      )
      .addCase(fetchContact.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch contacts";
      })
      .addCase(postContact.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        postContact.fulfilled,
        (state, action: PayloadAction<Contact>) => {
          state.contacts.push(action.payload);
          state.loading = false;
        }
      )
      .addCase(postContact.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string; // Assuming rejectWithValue returns a string
      })
      .addCase(patchContact.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        patchContact.fulfilled,
        (state, action: PayloadAction<Contact>) => {
          state.contacts = state.contacts.map((contact) =>
            contact._id === action.payload._id ? action.payload : contact
          );
          state.loading = false;
        }
      )
      .addCase(patchContact.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string; // Assuming rejectWithValue returns a string
      })
      .addCase(deleteContact.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        deleteContact.fulfilled,
        (state, action: PayloadAction<string>) => {
          state.contacts = state.contacts.filter(
            (contact) => contact._id !== action.payload
          );
          state.loading = false;
        }
      )
      .addCase(deleteContact.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string; // Assuming rejectWithValue returns a string
      });
  },
});
export default contactSlice.reducer;
