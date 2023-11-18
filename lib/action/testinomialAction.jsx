// src/actions/dataActions.js
import * as api from "../api/apis";
import {
  FETCH_TESTIMONIAL_SUCCESS,
  POST_TESTIMONIAL_SUCCESS,
  PATCH_TESTIMONIAL_SUCCESS,
  DELETE_TESTIMONIAL_SUCCESS,
} from "../constant";

export const fetchTestimonial = () => {
  return async (dispatch) => {
    try {
      const response = await api.fetchTestimonial(); // Replace with your API endpoint
      // console.log(response);
      dispatch({ type: FETCH_TESTIMONIAL_SUCCESS, payload: response.data });
    } catch (error) {
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
export const postTestimonial = (newTestimonial) => {
  return async (dispatch) => {
    try {
      console.log(newTestimonial);
      const response = await api.postTestimonial(newTestimonial);
      console.log(response);
      dispatch({ type: POST_TESTIMONIAL_SUCCESS, payload: response.data });
    } catch (error) {
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
export const patchTestimonial = (id, updatedTestimonial) => {
  return async (dispatch) => {
    try {
      console.log(updatedTestimonial);
      const response = await api.patchTestimonial(id, updatedTestimonial);
      console.log(response);
      dispatch({ type: PATCH_TESTIMONIAL_SUCCESS, payload: response.data });
    } catch (error) {
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
export const deleteTestimonial = (id) => async (dispatch) => {
  try {
    await api.deleteTestimonial(id);

    dispatch({ type: DELETE_TESTIMONIAL_SUCCESS, payload: id });
  } catch (error) {
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
