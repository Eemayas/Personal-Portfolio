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
import socialMediaReducer from "@/app/contacts/Contact/slices/socialMediaSlice";
import contactReducer from "@/app/contacts/letsTalk/slices/contactSlice";

// TODO: For the type of reducer
// export interface RootState {
//   BioReducer: BioState;
//   ExperiencesReducer: ExperiencesState;
//   BioCardReducer: BioCardState;
//   BioSkillReducer: BioSkillState;
//   ProjectReducer: ProjectState;
//   ContactReducer: ContactState;
//   SocialMediaReducer: SocialMediaState;
//   TestimonialReducer: TestimonialState;
//   AdminReducer: AdminState;
//   socialMediaReducers: ContactSocialMediaState;
//   contactReducer: LetsTalkContactState;
// }

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
  socialMediaReducers: socialMediaReducer,
  contactReducer,
});
