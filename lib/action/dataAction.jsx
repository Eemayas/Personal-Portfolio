// // src/actions/dataActions.js
// import * as api from "../api/apis";
// import axios from "axios";
// import {
//   FETCH_BIO_SUCCESS,
//   POST_BIO_SUCCESS,
//   PATCH_BIO_SUCCESS,
// } from "../constant";
// import {
//   FETCH_BIOCARD_SUCCESS,
//   POST_BIOCARD_SUCCESS,
//   PATCH_BIOCARD_SUCCESS,
//   DELETE_BIOCARD_SUCCESS,
// } from "../constant";
// import {
//   FETCH_BIOSKILL_SUCCESS,
//   POST_BIOSKILL_SUCCESS,
//   PATCH_BIOSKILL_SUCCESS,
//   DELETE_BIOSKILL_SUCCESS,
// } from "../constant";
// import {
//   FETCH_PROJECT_SUCCESS,
//   POST_PROJECT_SUCCESS,
//   PATCH_PROJECT_SUCCESS,
//   DELETE_PROJECT_SUCCESS,
// } from "../constant";
// import {
//   FETCH_CONTACT_SUCCESS,
//   POST_CONTACT_SUCCESS,
//   PATCH_CONTACT_SUCCESS,
//   DELETE_CONTACT_SUCCESS,
// } from "../constant";
// import {
//   FETCH_SOCIAL_MEDIA_SUCCESS,
//   POST_SOCIAL_MEDIA_SUCCESS,
//   PATCH_SOCIAL_MEDIA_SUCCESS,
//   DELETE_SOCIAL_MEDIA_SUCCESS,
// } from "../constant";
// import {
//   FETCH_TESTIMONIAL_SUCCESS,
//   POST_TESTIMONIAL_SUCCESS,
//   PATCH_TESTIMONIAL_SUCCESS,
//   DELETE_TESTIMONIAL_SUCCESS,
// } from "../constant";
// import {
//   FETCH_EXPERIENCES_SUCCESS,
//   POST_EXPERIENCES_SUCCESS,
//   PATCH_EXPERIENCES_SUCCESS,
//   DELETE_EXPERIENCES_SUCCESS,
// } from "../constant";
// //Bio--------------------
// export const fetchBio = () => {
//   return async (dispatch) => {
//     try {
//       const response = await api.fetchBio(); // Replace with your API endpoint
//       // console.log(response);
//       dispatch({ type: FETCH_BIO_SUCCESS, payload: response.data });
//     } catch (error) {
//       console.error("fetchBio (Action):");
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
// export const postBio = (newBio) => {
//   return async (dispatch) => {
//     try {
//       // console.log(newBio);
//       const response = await api.postBio(newBio);
//       // console.log(response);
//       dispatch({ type: POST_BIO_SUCCESS, payload: response.data });
//     } catch (error) {
//       console.error("postBio  (Action):");
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
// export const patchBio = (id, updatedBio) => {
//   return async (dispatch) => {
//     try {
//       // console.log(updatedBio);
//       const response = await api.patchBio(id, updatedBio);
//       // console.log(response);
//       dispatch({ type: PATCH_BIO_SUCCESS, payload: response.data });
//     } catch (error) {
//       console.error("patchBio  (Action):");
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

// //BioSkill-----------------------
// export const fetchBioSkill = () => {
//   return async (dispatch) => {
//     try {
//       const response = await api.fetchBioSkill(); // Replace with your API endpoint
//       // console.log(response);
//       dispatch({ type: FETCH_BIOSKILL_SUCCESS, payload: response.data });
//     } catch (error) {
//       console.error("fetchBioSkill  (Action):");
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
// export const postBioSkill = (newBioSkill) => {
//   return async (dispatch) => {
//     try {
//       // console.log(newBioSkill);
//       const response = await api.postBioSkill(newBioSkill);
//       // console.log(response);
//       dispatch({ type: POST_BIOSKILL_SUCCESS, payload: response.data });
//     } catch (error) {
//       console.error("postBioSkill  (Action):");
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
// export const patchBioSkill = (id, updatedBioSkill) => {
//   return async (dispatch) => {
//     try {
//       // console.log(updatedBioSkill);
//       const response = await api.patchBioSkill(id, updatedBioSkill);
//       // console.log(response);
//       dispatch({ type: PATCH_BIOSKILL_SUCCESS, payload: response.data });
//     } catch (error) {
//       console.error("patchBioSkill  (Action):");
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
// export const deleteBioSkill = (id) => async (dispatch) => {
//   try {
//     await api.deleteBioSkill(id);

//     dispatch({ type: DELETE_BIOSKILL_SUCCESS, payload: id });
//   } catch (error) {
//     console.error("deleteBioSkill  (Action):");
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
// export const fetchTestimonial = () => {
//   return async (dispatch) => {
//     try {
//       const response = await api.fetchTestimonial(); // Replace with your API endpoint
//       // console.log(response);
//       dispatch({ type: FETCH_TESTIMONIAL_SUCCESS, payload: response.data });
//     } catch (error) {
//       console.error("fetchTestimonial  (Action):");
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
// export const fetchData = () => {
//   return async (dispatch) => {
//     try {
//       const response = await api.fetchExperience(); // Replace with your API endpoint
//       // console.log(response);
//       dispatch({ type: FETCH_EXPERIENCES_SUCCESS, payload: response.data });
//     } catch (error) {
//       console.error("fetchData  (Action):");
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
