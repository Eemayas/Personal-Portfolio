// // src/actions/dataActions.js
// import * as api from "../api/apis";

// import {
//   FETCH_CONTACT_SUCCESS,
//   POST_CONTACT_SUCCESS,
//   PATCH_CONTACT_SUCCESS,
//   DELETE_CONTACT_SUCCESS,
// } from "../constant";
// //Contact-------------------------
// export const fetchContact = () => {
//   return async (dispatch) => {
//     try {
//       const response = await api.fetchContact(); // Replace with your API endpoint
//       // console.log(response);
//       dispatch({ type: FETCH_CONTACT_SUCCESS, payload: response.data });
//     } catch (error) {
//       console.error("fetchContact  (Action):");
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
// export const postContact = (newContact) => {
//   return async (dispatch) => {
//     try {
//       // console.log(newContact);
//       const response = await api.postContact(newContact);
//       // console.log(response);
//       dispatch({ type: POST_CONTACT_SUCCESS, payload: response.data });
//     } catch (error) {
//       console.error("postContact  (Action):");
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
// export const patchContact = (id, updatedContact) => {
//   return async (dispatch) => {
//     try {
//       // console.log(updatedContact);
//       const response = await api.patchContact(id, updatedContact);
//       // console.log(response);
//       dispatch({ type: PATCH_CONTACT_SUCCESS, payload: response.data });
//     } catch (error) {
//       console.error("patchContact  (Action):");
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
// export const deleteContact = (id) => async (dispatch) => {
//   try {
//     await api.deleteContact(id);

//     dispatch({ type: DELETE_CONTACT_SUCCESS, payload: id });
//   } catch (error) {
//     console.error("deleteContact  (Action):");
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
