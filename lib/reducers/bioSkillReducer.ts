/** @format */

// import { Action } from "redux"; // Assuming you're using Redux
// import {
//   FETCH_BIOSKILL_SUCCESS,
//   POST_BIOSKILL_SUCCESS,
//   PATCH_BIOSKILL_SUCCESS,
//   DELETE_BIOSKILL_SUCCESS,
// } from "../constant";
// // Define the action interfaces
// interface FetchBioSkillSuccessAction
//   extends Action<typeof FETCH_BIOSKILL_SUCCESS> {
//   payload: any[]; // Replace 'any' with the actual type of your payload
// }

// interface PostBioSkillSuccessAction
//   extends Action<typeof POST_BIOSKILL_SUCCESS> {
//   payload: any; // Replace 'any' with the actual type of your payload
// }

// interface PatchBioSkillSuccessAction
//   extends Action<typeof PATCH_BIOSKILL_SUCCESS> {
//   payload: any; // Replace 'any' with the actual type of your payload
// }

// interface DeleteBioSkillSuccessAction
//   extends Action<typeof DELETE_BIOSKILL_SUCCESS> {
//   payload: string; // Replace 'string' with the actual type of your payload
// }

// // Define the union type for all possible actions
// type BioSkillActionTypes =
//   | FetchBioSkillSuccessAction
//   | PostBioSkillSuccessAction
//   | PatchBioSkillSuccessAction
//   | DeleteBioSkillSuccessAction;

// // Define the initial state type
// type BioSkillState = any[]; // Replace 'any' with the actual type of your state

// // Define the initial state
// const initialState: BioSkillState = [];

// // Define the reducer
// const BioSkillReducer = (
//   state: BioSkillState = initialState,
//   action: BioSkillActionTypes
// ): BioSkillState => {
//   switch (action.type) {
//     case FETCH_BIOSKILL_SUCCESS:
//       return action.payload;
//     case POST_BIOSKILL_SUCCESS:
//       return [...state, action.payload];
//     case PATCH_BIOSKILL_SUCCESS:
//       return state.map((bioSkill) =>
//         bioSkill._id === action.payload._id ? action.payload : bioSkill
//       );
//     case DELETE_BIOSKILL_SUCCESS:
//       return state.filter((bioSkill) => bioSkill._id !== action.payload);
//     default:
//       return state;
//   }
// };

// export default BioSkillReducer;
