// src/actions/dataActions.js
import * as api from "../api/apis";

import {
  FETCH_BIOSKILL_SUCCESS,
  POST_BIOSKILL_SUCCESS,
  PATCH_BIOSKILL_SUCCESS,
  DELETE_BIOSKILL_SUCCESS,
} from "../constant";
//BioSkill-----------------------
export const fetchBioSkill = () => {
  return async (dispatch) => {
    try {
      const response = await api.fetchBioSkill(); // Replace with your API endpoint
      // console.log(response);
      dispatch({ type: FETCH_BIOSKILL_SUCCESS, payload: response.data });
    } catch (error) {
      console.error("fetchBioSkill  (Action):");
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
export const postBioSkill = (newBioSkill) => {
  return async (dispatch) => {
    try {
      // console.log(newBioSkill);
      const response = await api.postBioSkill(newBioSkill);
      // console.log(response);
      dispatch({ type: POST_BIOSKILL_SUCCESS, payload: response.data });
    } catch (error) {
      console.error("postBioSkill  (Action):");
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
export const patchBioSkill = (id, updatedBioSkill) => {
  return async (dispatch) => {
    try {
      // console.log(updatedBioSkill);
      const response = await api.patchBioSkill(id, updatedBioSkill);
      // console.log(response);
      dispatch({ type: PATCH_BIOSKILL_SUCCESS, payload: response.data });
    } catch (error) {
      console.error("patchBioSkill  (Action):");
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
export const deleteBioSkill = (id) => async (dispatch) => {
  try {
    await api.deleteBioSkill(id);

    dispatch({ type: DELETE_BIOSKILL_SUCCESS, payload: id });
  } catch (error) {
    console.error("deleteBioSkill  (Action):");
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
