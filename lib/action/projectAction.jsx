// // src/actions/dataActions.js
// import * as api from "../api/apis";
// import {
//   FETCH_PROJECT_SUCCESS,
//   POST_PROJECT_SUCCESS,
//   PATCH_PROJECT_SUCCESS,
//   DELETE_PROJECT_SUCCESS,
// } from "../constant";

// //Projects------------------------
// export const fetchProject = () => {
//   return async (dispatch) => {
//     try {
//       const response = await api.fetchProject(); // Replace with your API endpoint
//       // console.log(response);
//       dispatch({ type: FETCH_PROJECT_SUCCESS, payload: response.data });
//     } catch (error) {
//       console.error("fetchProject  (Action):");
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
// export const postProject = (newProject) => {
//   return async (dispatch) => {
//     try {
//       // console.log(newProject);
//       const response = await api.postProject(newProject);
//       // console.log(response);
//       dispatch({ type: POST_PROJECT_SUCCESS, payload: response.data });
//     } catch (error) {
//       console.error("postProject  (Action):");
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
// export const patchProject = (id, updatedProject) => {
//   return async (dispatch) => {
//     try {
//       // console.log(updatedProject);
//       const response = await api.patchProject(id, updatedProject);
//       // console.log(response);
//       dispatch({ type: PATCH_PROJECT_SUCCESS, payload: response.data });
//     } catch (error) {
//       console.error("patchProject  (Action):");
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
// export const deleteProject = (id) => async (dispatch) => {
//   try {
//     await api.deleteProject(id);
// console.log("here"  );
//     dispatch({ type: DELETE_PROJECT_SUCCESS, payload: id });
//   } catch (error) {
//     console.error("deleteProject  (Action):");
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

