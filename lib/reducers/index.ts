import { combineReducers } from "redux";
import BioReducer from "./bioReducer";
import BioCardReducer from "./bioCardReducer";
import BioSkillReducer from "./bioSkillReducer";
import ProjectReducer from "./projectReducer";
import ContactReducer from "./contactReducer";
import SocialMediaReducer from "./socialMediaReducer";
import TestimonialReducer from "./testimonialReducer";
import ExperiencesReducer from "./experiencesReducer";
import AdminReducer from "./adminReducer";
export default combineReducers({
  BioReducer,
  ExperiencesReducer,
  BioCardReducer,
  BioSkillReducer,
  ProjectReducer,
  ContactReducer,
  SocialMediaReducer,
  TestimonialReducer,
  AdminReducer,
});
