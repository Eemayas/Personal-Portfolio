import { Action } from "redux"; // Assuming you're using Redux
import {
  FETCH_BIOCARD_SUCCESS,
  POST_BIOCARD_SUCCESS,
  PATCH_BIOCARD_SUCCESS,
  DELETE_BIOCARD_SUCCESS,
} from "../constant";

// Define the action interfaces
interface FetchBioCardSuccessAction
  extends Action<typeof FETCH_BIOCARD_SUCCESS> {
  payload: any[]; // Replace 'any' with the actual type of your payload
}

interface PostBioCardSuccessAction extends Action<typeof POST_BIOCARD_SUCCESS> {
  payload: any; // Replace 'any' with the actual type of your payload
}

interface PatchBioCardSuccessAction
  extends Action<typeof PATCH_BIOCARD_SUCCESS> {
  payload: any; // Replace 'any' with the actual type of your payload
}

interface DeleteBioCardSuccessAction
  extends Action<typeof DELETE_BIOCARD_SUCCESS> {
  payload: string; // Replace 'string' with the actual type of your payload
}

// Define the union type for all possible actions
type BioCardActionTypes =
  | FetchBioCardSuccessAction
  | PostBioCardSuccessAction
  | PatchBioCardSuccessAction
  | DeleteBioCardSuccessAction;

// Define the initial state type
type BioCardState = any[]; // Replace 'any' with the actual type of your state

// Define the initial state
const initialState: BioCardState = [];

// Define the reducer
const BioCardReducer = (
  state: BioCardState = initialState,
  action: BioCardActionTypes
): BioCardState => {
  switch (action.type) {
    case FETCH_BIOCARD_SUCCESS:
      return action.payload;
    case POST_BIOCARD_SUCCESS:
      return [...state, action.payload];
    case PATCH_BIOCARD_SUCCESS:
      return state.map((bioCard) =>
        bioCard._id === action.payload._id ? action.payload : bioCard
      );
    case DELETE_BIOCARD_SUCCESS:
      return state.filter((bioCard) => bioCard._id !== action.payload);
    default:
      return state;
  }
};

export default BioCardReducer;
