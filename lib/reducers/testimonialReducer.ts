import { Action } from "redux"; // Assuming you're using Redux
import {
  FETCH_TESTIMONIAL_SUCCESS,
  POST_TESTIMONIAL_SUCCESS,
  PATCH_TESTIMONIAL_SUCCESS,
  DELETE_TESTIMONIAL_SUCCESS,
} from "../constant";

// Define the action interfaces
interface FetchTestimonialSuccessAction
  extends Action<typeof FETCH_TESTIMONIAL_SUCCESS> {
  payload: any[]; // Replace 'any' with the actual type of your payload
}

interface PostTestimonialSuccessAction
  extends Action<typeof POST_TESTIMONIAL_SUCCESS> {
  payload: any; // Replace 'any' with the actual type of your payload
}

interface PatchTestimonialSuccessAction
  extends Action<typeof PATCH_TESTIMONIAL_SUCCESS> {
  payload: any; // Replace 'any' with the actual type of your payload
}

interface DeleteTestimonialSuccessAction
  extends Action<typeof DELETE_TESTIMONIAL_SUCCESS> {
  payload: string; // Replace 'string' with the actual type of your payload
}

// Define the union type for all possible actions
type TestimonialActionTypes =
  | FetchTestimonialSuccessAction
  | PostTestimonialSuccessAction
  | PatchTestimonialSuccessAction
  | DeleteTestimonialSuccessAction;

// Define the initial state type
type TestimonialState = any[]; // Replace 'any' with the actual type of your state

// Define the initial state
const initialState: TestimonialState = [];

// Define the reducer
const TestimonialReducer = (
  state: TestimonialState = initialState,
  action: TestimonialActionTypes
): TestimonialState => {
  switch (action.type) {
    case FETCH_TESTIMONIAL_SUCCESS:
      return action.payload;
    case POST_TESTIMONIAL_SUCCESS:
      return [...state, action.payload];
    case PATCH_TESTIMONIAL_SUCCESS:
      return state.map((testimonial) =>
        testimonial._id === action.payload._id ? action.payload : testimonial
      );
    case DELETE_TESTIMONIAL_SUCCESS:
      return state.filter((testimonial) => testimonial._id !== action.payload);
    default:
      return state;
  }
};

export default TestimonialReducer;
