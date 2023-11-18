import { Action } from "redux"; // Assuming you're using Redux
import {
  FETCH_SOCIAL_MEDIA_SUCCESS,
  POST_SOCIAL_MEDIA_SUCCESS,
  PATCH_SOCIAL_MEDIA_SUCCESS,
  DELETE_SOCIAL_MEDIA_SUCCESS,
} from "../constant";

// Define the action interfaces
interface FetchSocialMediaSuccessAction
  extends Action<typeof FETCH_SOCIAL_MEDIA_SUCCESS> {
  payload: any[]; // Replace 'any' with the actual type of your payload
}

interface PostSocialMediaSuccessAction
  extends Action<typeof POST_SOCIAL_MEDIA_SUCCESS> {
  payload: any; // Replace 'any' with the actual type of your payload
}

interface PatchSocialMediaSuccessAction
  extends Action<typeof PATCH_SOCIAL_MEDIA_SUCCESS> {
  payload: any; // Replace 'any' with the actual type of your payload
}

interface DeleteSocialMediaSuccessAction
  extends Action<typeof DELETE_SOCIAL_MEDIA_SUCCESS> {
  payload: string; // Replace 'string' with the actual type of your payload
}

// Define the union type for all possible actions
type SocialMediaActionTypes =
  | FetchSocialMediaSuccessAction
  | PostSocialMediaSuccessAction
  | PatchSocialMediaSuccessAction
  | DeleteSocialMediaSuccessAction;

// Define the initial state type
type SocialMediaState = any[]; // Replace 'any' with the actual type of your state

// Define the initial state
const initialState: SocialMediaState = [];

// Define the reducer
const SocialMediaReducer = (
  state: SocialMediaState = initialState,
  action: SocialMediaActionTypes
): SocialMediaState => {
  switch (action.type) {
    case FETCH_SOCIAL_MEDIA_SUCCESS:
      return action.payload;
    case POST_SOCIAL_MEDIA_SUCCESS:
      return [...state, action.payload];
    case PATCH_SOCIAL_MEDIA_SUCCESS:
      return state.map((social) =>
        social._id === action.payload._id ? action.payload : social
      );
    case DELETE_SOCIAL_MEDIA_SUCCESS:
      return state.filter((social) => social._id !== action.payload);
    default:
      return state;
  }
};

export default SocialMediaReducer;
