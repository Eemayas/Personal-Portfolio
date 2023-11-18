import { Action } from "redux"; // Assuming you're using Redux
import {
  FETCH_CONTACT_SUCCESS,
  POST_CONTACT_SUCCESS,
  PATCH_CONTACT_SUCCESS,
  DELETE_CONTACT_SUCCESS,
} from "../constant";

// Define the action interfaces
interface FetchContactSuccessAction
  extends Action<typeof FETCH_CONTACT_SUCCESS> {
  payload: any[]; // Replace 'any' with the actual type of your payload
}

interface PostContactSuccessAction extends Action<typeof POST_CONTACT_SUCCESS> {
  payload: any; // Replace 'any' with the actual type of your payload
}

interface PatchContactSuccessAction
  extends Action<typeof PATCH_CONTACT_SUCCESS> {
  payload: any; // Replace 'any' with the actual type of your payload
}

interface DeleteContactSuccessAction
  extends Action<typeof DELETE_CONTACT_SUCCESS> {
  payload: string; // Replace 'string' with the actual type of your payload
}

// Define the union type for all possible actions
type ContactActionTypes =
  | FetchContactSuccessAction
  | PostContactSuccessAction
  | PatchContactSuccessAction
  | DeleteContactSuccessAction;

// Define the initial state type
type ContactState = any[]; // Replace 'any' with the actual type of your state

// Define the initial state
const initialState: ContactState = [];

// Define the reducer
const ContactReducer = (
  state: ContactState = initialState,
  action: ContactActionTypes
): ContactState => {
  switch (action.type) {
    case FETCH_CONTACT_SUCCESS:
      return action.payload;
    case POST_CONTACT_SUCCESS:
      return [...state, action.payload];
    case PATCH_CONTACT_SUCCESS:
      return state.map((contact) =>
        contact._id === action.payload._id ? action.payload : contact
      );
    case DELETE_CONTACT_SUCCESS:
      return state.filter((contact) => contact._id !== action.payload);
    default:
      return state;
  }
};

export default ContactReducer;
