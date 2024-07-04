import { combineReducers } from "redux";
import socialMediaReducer, {
  TSocialMediaState,
} from "@/app/contacts/Contact/slices/socialMediaSlice";
import contactReducer, {
  TContactState,
} from "@/app/contacts/letsTalk/slices/contactSlice";
import bioReducer, { TBioState } from "@/app/about/About/slices/bioSlice";
import serviceReducer, {
  TServiceState,
} from "@/app/about/ServiceSection/slices/serviceCardSlice";
import skillreducer, {
  TBioSkillState,
} from "@/app/about/SkillsSection/slices/skillSlice";
import projectReducer, {
  TProjectState,
} from "@/app/projects/slices/projectSlice";
import testimonialReducer, {
  TTestimonialState,
} from "@/app/testinomial/slices/testimonialSlices";
import experiencesReducer, {
  TExperienceState,
} from "@/app/experiences/slices/experiencesSlices";
import adminReducer from "@/components/AdminPopUp/slices/adminSlices";
// TODO: For the type of reducer
export interface RootState {
  socialMediaReducer: TSocialMediaState;
  contactReducer: TContactState;
  bioReducer: TBioState;
  serviceReducer: TServiceState;
  skillreducer: TBioSkillState;
  projectReducer: TProjectState;
  testimonialReducer: TTestimonialState;
  experiencesReducer: TExperienceState;
  adminReducer: boolean;
}

export default combineReducers({
  socialMediaReducer,
  contactReducer,
  bioReducer,
  serviceReducer,
  skillreducer,
  projectReducer,
  testimonialReducer,
  experiencesReducer,
  adminReducer,
});
