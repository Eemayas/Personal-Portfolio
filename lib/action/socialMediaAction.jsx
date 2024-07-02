// // src/actions/dataActions.js
// import * as api from "../api/apis";
// import {
//   FETCH_SOCIAL_MEDIA_SUCCESS,
//   POST_SOCIAL_MEDIA_SUCCESS,
//   PATCH_SOCIAL_MEDIA_SUCCESS,
//   DELETE_SOCIAL_MEDIA_SUCCESS,
// } from "../constant";

// export const fetchSocialMedia = () => {
//   return async (dispatch) => {
//     try {
//       const response = await api.fetchSocialMedia(); // Replace with your API endpoint
//       // console.log(response);
//       dispatch({ type: FETCH_SOCIAL_MEDIA_SUCCESS, payload: response.data });
//     } catch (error) {
//       // Handle the error here
//       if (error.response) {
//         // The request was made, but the server responded with an error status code (4xx or 5xx)
//         console.error("Server Error Status:", error.response.status);
//         console.error("Server Error Data:", error.response.data);
//       } else if (error.request) {
//         // The request was made, but no response was received (e.g., network error)
//         console.error("Request Error:", error.request);
//       } else {
//         // Something happened in setting up the request that triggered an error
//         console.error("Error:", error.message);
//       }
//     }
//   };
// };
// export const postSocialMedia = (newSocialMedia) => {
//   return async (dispatch) => {
//     try {
//       console.log(newSocialMedia);
//       const response = await api.postSocialMedia(newSocialMedia);
//       console.log(response);
//       dispatch({ type: POST_SOCIAL_MEDIA_SUCCESS, payload: response.data });
//     } catch (error) {
//       // Handle the error here
//       if (error.response) {
//         // The request was made, but the server responded with an error status code (4xx or 5xx)
//         console.error("Server Error Status:", error.response.status);
//         console.error("Server Error Data:", error.response.data);
//       } else if (error.request) {
//         // The request was made, but no response was received (e.g., network error)
//         console.error("Request Error:", error.request);
//       } else {
//         // Something happened in setting up the request that triggered an error
//         console.error("Error:", error.message);
//       }
//     }
//   };
// };
// export const patchSocialMedia = (id, updatedSocialMedia) => {
//   return async (dispatch) => {
//     try {
//       console.log(updatedSocialMedia);
//       const response = await api.patchSocialMedia(id, updatedSocialMedia);
//       console.log(response);
//       dispatch({ type: PATCH_SOCIAL_MEDIA_SUCCESS, payload: response.data });
//     } catch (error) {
//       // Handle the error here
//       if (error.response) {
//         // The request was made, but the server responded with an error status code (4xx or 5xx)
//         console.error("Server Error Status:", error.response.status);
//         console.error("Server Error Data:", error.response.data);
//       } else if (error.request) {
//         // The request was made, but no response was received (e.g., network error)
//         console.error("Request Error:", error.request);
//       } else {
//         // Something happened in setting up the request that triggered an error
//         console.error("Error:", error.message);
//       }
//     }
//   };
// };
// export const deleteSocialMedia = (id) => async (dispatch) => {
//   try {
//     await api.deleteSocialMedia(id);

//     dispatch({ type: DELETE_SOCIAL_MEDIA_SUCCESS, payload: id });
//   } catch (error) {
//     // Handle the error here
//     if (error.response) {
//       // The request was made, but the server responded with an error status code (4xx or 5xx)
//       console.error("Server Error Status:", error.response.status);
//       console.error("Server Error Data:", error.response.data);
//     } else if (error.request) {
//       // The request was made, but no response was received (e.g., network error)
//       console.error("Request Error:", error.request);
//     } else {
//       // Something happened in setting up the request that triggered an error
//       console.error("Error:", error.message);
//     }
//   }
// };
