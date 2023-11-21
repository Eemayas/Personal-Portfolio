import * as api from "../api/apis";
import {
  FETCH_BIO_SUCCESS,
  POST_BIO_SUCCESS,
  PATCH_BIO_SUCCESS,
} from "../constant";
//Bio--------------------
export const fetchBio = () => {
  return async (dispatch) => {
    try {
      const response = await api.fetchBio(); // Replace with your API endpoint
      // console.log(response);
      dispatch({ type: FETCH_BIO_SUCCESS, payload: response.data });
    } catch (error) {
      console.error("fetchBio (Action):");
      // Handle the error here
      if (error.response) {
        // The request was made, but the server responded with an error status code (4xx or 5xx)
        console.error("Server Error Status:", error.response.status);
        console.error("Server Error Data:", error.response.data);
      } else if (error.request) {
        // The request was made, but no response was received (e.g., network error)
        console.error("Request Error:", error.request);
      } else {
        // Something happened in setting up the request that triggered an error
        console.error("Error:", error.message);
      }
    }
  };
};
export const postBio = (newBio) => {
  return async (dispatch) => {
    try {
      // console.log(newBio);
      const response = await api.postBio(newBio);
      // console.log(response);
      await dispatch({ type: POST_BIO_SUCCESS, payload: response.data });
    } catch (error) {
      console.error("postBio  (Action):");
      // Handle the error here
      if (error.response) {
        // The request was made, but the server responded with an error status code (4xx or 5xx)
        console.error("Server Error Status:", error.response.status);
        console.error("Server Error Data:", error.response.data);
      } else if (error.request) {
        // The request was made, but no response was received (e.g., network error)
        console.error("Request Error:", error.request);
      } else {
        // Something happened in setting up the request that triggered an error
        console.error("Error:", error.message);
      }
    }
  };
};
export const patchBio = (id, updatedBio) => {
  return async (dispatch) => {
    try {
      // console.log(updatedBio);
      const response = await api.patchBio(id, updatedBio);
      console.log(response);
      await dispatch({ type: PATCH_BIO_SUCCESS, payload: response.data });
    } catch (error) {
      // console.error("patchBio  (Action):");
      // Handle the error here
      if (error.response) {
        // The request was made, but the server responded with an error status code (4xx or 5xx)
        console.error("Server Error Status:", error.response.status);
        console.error("Server Error Data:", error.response.data);
      } else if (error.request) {
        // The request was made, but no response was received (e.g., network error)
        console.error("Request Error:", error.request);
      } else {
        // Something happened in setting up the request that triggered an error
        console.error("Error:", error.message);
      }
    }
  };
};
