import { Action } from "redux"; // Assuming you're using Redux
import { FETCH_EXPERIENCES_SUCCESS } from "../constant";

// Define the action interface
interface FetchExperiencesSuccessAction
  extends Action<typeof FETCH_EXPERIENCES_SUCCESS> {
  payload: any[]; // Replace 'any' with the actual type of your payload
}

// Define the union type for all possible actions
type ExperiencesActionTypes = FetchExperiencesSuccessAction;

// Define the initial state type
interface ExperiencesState {
  data: any[]; // Replace 'any' with the actual type of your state
}

// Define the initial state
const initialState: ExperiencesState = {
  data: [],
};

// Define the reducer
const ExperiencesReducer = (
  state: ExperiencesState = initialState,
  action: ExperiencesActionTypes
): ExperiencesState => {
  switch (action.type) {
    case FETCH_EXPERIENCES_SUCCESS:
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

export default ExperiencesReducer;
