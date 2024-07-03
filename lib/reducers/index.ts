import { combineReducers } from "redux";
// import BioReducer from "./bioReducer";
// import BioCardReducer from "./bioCardReducer";
// import BioSkillReducer from "./bioSkillReducer";
// import ProjectReducer from "./projectReducer";
import ContactReducer from "./contactReducer";
import SocialMediaReducer from "./socialMediaReducer";
import TestimonialReducer from "./testimonialReducer";
import ExperiencesReducer from "./experiencesReducer";
import AdminReducer from "./adminReducer";
import socialMediaReducer from "@/app/contacts/Contact/slices/socialMediaSlice";
import contactReducer from "@/app/contacts/letsTalk/slices/contactSlice";
import bioReducer from "@/app/about/About/slices/bioSlice";
import serviceReducer from "@/app/about/ServiceSection/slices/serviceCardSlice";
import skillreducer from "@/app/about/SkillsSection/slices/skillSlice";
import projectReducer from "@/app/projects/slices/projectSlice";
import testimonialReducer from "@/app/testinomial/slices/testimonialSlices";
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
  // BioReducer,
  ExperiencesReducer,
  // BioCardReducer,
  // BioSkillReducer,
  // ProjectReducer,
  ContactReducer,
  SocialMediaReducer,
  TestimonialReducer,
  AdminReducer,
  socialMediaReducers: socialMediaReducer,
  contactReducer,
  bioReducer,
  serviceReducer,
  skillreducer,
  projectReducer,
  testimonialReducer,
});
