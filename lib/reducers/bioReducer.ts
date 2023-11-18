import { Action } from "redux"; // Assuming you're using Redux
import {
  FETCH_BIO_SUCCESS,
  POST_BIO_SUCCESS,
  PATCH_BIO_SUCCESS,
} from "../constant";

// Define the action interfaces
interface FetchBioSuccessAction extends Action<typeof FETCH_BIO_SUCCESS> {
  payload: any[]; // Replace 'any' with the actual type of your payload
}

interface PostBioSuccessAction extends Action<typeof POST_BIO_SUCCESS> {
  payload: any; // Replace 'any' with the actual type of your payload
}

interface PatchBioSuccessAction extends Action<typeof PATCH_BIO_SUCCESS> {
  payload: any; // Replace 'any' with the actual type of your payload
}

// Define the union type for all possible actions
type BioActionTypes =
  | FetchBioSuccessAction
  | PostBioSuccessAction
  | PatchBioSuccessAction;

// Define the initial state type
type BioState = any[]; // Replace 'any' with the actual type of your state

// Define the initial state
const initialState: BioState = [];

// Define the reducer
const BioReducer = (
  state: BioState = initialState,
  action: BioActionTypes
): BioState => {
  switch (action.type) {
    case FETCH_BIO_SUCCESS:
      return action.payload;
    case POST_BIO_SUCCESS:
      return [...state, action.payload];
    case PATCH_BIO_SUCCESS:
      return state.map((bio) =>
        bio._id === action.payload._id ? action.payload : bio
      );
    default:
      return state;
  }
};

export default BioReducer;
