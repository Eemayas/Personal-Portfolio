// // src/actions/dataActions.js
// import * as api from "../api/apis";
// import {
//   FETCH_EXPERIENCES_SUCCESS,
//   // POST_EXPERIENCES_SUCCESS,
//   // PATCH_EXPERIENCES_SUCCESS,
//   // DELETE_EXPERIENCES_SUCCESS,
// } from "../constant";

// export const fetchExperience = () => {
//   return async (dispatch) => {
//     try {
//       const response = await api.fetchExperience(); // Replace with your API endpoint
//       // console.log(response);
//       dispatch({ type: FETCH_EXPERIENCES_SUCCESS, payload: response.data });
//     } catch (error) {
//       console.error("fetchExperience  (Action):");
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
