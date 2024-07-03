// // src/actions/dataActions.js
// import * as api from "../api/apis";

// import {
//   FETCH_BIOCARD_SUCCESS,
//   POST_BIOCARD_SUCCESS,
//   PATCH_BIOCARD_SUCCESS,
//   DELETE_BIOCARD_SUCCESS,
// } from "../constant";
// //BioCard--------------------
// export const fetchBioCard = () => {
//   return async (dispatch) => {
//     try {
//       const response = await api.fetchBioCard();
//       // console.log(response);
//       dispatch({ type: FETCH_BIOCARD_SUCCESS, payload: response.data });
//     } catch (error) {
//       console.error("fetchBioCard  (Action):");
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
// export const postBioCard = (newBioCard) => {
//   return async (dispatch) => {
//     try {
//       // console.log(newBioCard);
//       const response = await api.postBioCard(newBioCard);
//       // console.log(response);
//       dispatch({ type: POST_BIOCARD_SUCCESS, payload: response.data });
//     } catch (error) {
//       console.error("postBioCard  (Action):");
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
// export const patchBioCard = (id, updatedBioCard) => {
//   return async (dispatch) => {
//     try {
//       // console.log(updatedBioCard);
//       const response = await api.patchBioCard(id, updatedBioCard);
//       // console.log(response);
//       dispatch({ type: PATCH_BIOCARD_SUCCESS, payload: response.data });
//     } catch (error) {
//       console.error("patchBioCard  (Action):");
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
// export const deleteBioCard = (id) => async (dispatch) => {
//   try {
//     await api.deleteBioCard(id);

//     dispatch({ type: DELETE_BIOCARD_SUCCESS, payload: id });
//   } catch (error) {
//     console.error("deleteBioCard  (Action):");
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
