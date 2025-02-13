// import { Action } from "redux"; // Assuming you're using Redux
// import {
//   FETCH_PROJECT_SUCCESS,
//   POST_PROJECT_SUCCESS,
//   PATCH_PROJECT_SUCCESS,
//   DELETE_PROJECT_SUCCESS,
// } from "../constant";

// // Define the action interfaces
// interface FetchProjectSuccessAction
//   extends Action<typeof FETCH_PROJECT_SUCCESS> {
//   payload: any[]; // Replace 'any' with the actual type of your payload
// }

// interface PostProjectSuccessAction extends Action<typeof POST_PROJECT_SUCCESS> {
//   payload: any; // Replace 'any' with the actual type of your payload
// }

// interface PatchProjectSuccessAction
//   extends Action<typeof PATCH_PROJECT_SUCCESS> {
//   payload: any; // Replace 'any' with the actual type of your payload
// }

// interface DeleteProjectSuccessAction
//   extends Action<typeof DELETE_PROJECT_SUCCESS> {
//   payload: string; // Replace 'string' with the actual type of your payload
// }

// // Define the union type for all possible actions
// type ProjectActionTypes =
//   | FetchProjectSuccessAction
//   | PostProjectSuccessAction
//   | PatchProjectSuccessAction
//   | DeleteProjectSuccessAction;

// // Define the initial state type
// type ProjectState = any[]; // Replace 'any' with the actual type of your state

// // Define the initial state
// const initialState: ProjectState = [];

// // Define the reducer
// const ProjectReducer = (
//   state: ProjectState = initialState,
//   action: ProjectActionTypes
// ): ProjectState => {
//   switch (action.type) {
//     case FETCH_PROJECT_SUCCESS:
//       return action.payload;
//     case POST_PROJECT_SUCCESS:
//       return [...state, action.payload];
//     case PATCH_PROJECT_SUCCESS:
//       return state.map((project) =>
//         project._id === action.payload._id ? action.payload : project
//       );
//     case DELETE_PROJECT_SUCCESS:
//       return state.filter((project) => project._id !== action.payload);
//     default:
//       return state;
//   }
// };

// export default ProjectReducer;
