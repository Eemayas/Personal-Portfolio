import axios from "axios";
// const url = "http://localhost:5000/portfoilo";
// const url = "https://profoilo-backend.onrender.com/portfoilo";
// const url = "http://localhost:3000/api";
const url = "api";

export const fetchBio = () => axios.get(`${url}/bio`);
export const postBio = (newBio) => axios.post(`${url}/bio`, newBio);
export const patchBio = (id, updatedBio) =>
  axios.patch(`${url}/bio?id=${id}`, updatedBio);

export const fetchBioCard = () => axios.get(`${url}/bioCard`);
export const postBioCard = (newBioCard) =>
  axios.post(`${url}/bioCard`, newBioCard);
export const patchBioCard = (id, updatedBioCard) =>
  axios.patch(`${url}/bioCard?id=${id}`, updatedBioCard);
export const deleteBioCard = (id) => axios.delete(`${url}/bioCard?id=${id}`);

export const fetchBioSkill = () => axios.get(`${url}/bioSkill`);
export const postBioSkill = (newBioSkill) =>
  axios.post(`${url}/bioSkill`, newBioSkill);
export const patchBioSkill = (id, updatedBioSkill) =>
  axios.patch(`${url}/bioSkill?id=${id}`, updatedBioSkill);
export const deleteBioSkill = (id) => axios.delete(`${url}/bioSkill?id=${id}`);

export const fetchProject = () => axios.get(`${url}/project`);
export const postProject = (newProject) =>
  axios.post(`${url}/project`, newProject);
export const patchProject = (id, updatedProject) =>
  axios.patch(`${url}/project?id=${id}`, updatedProject);
export const deleteProject = (id) => axios.delete(`${url}/project?id=${id}`);

export const fetchContact = () => axios.get(`${url}/contact`);
export const postContact = (newContact) =>
  axios.post(`${url}/contact`, newContact);
export const patchContact = (id, updatedContact) =>
  axios.patch(`${url}/contact?id=${id}`, updatedContact);
export const deleteContact = (id) => axios.delete(`${url}/contact?id=${id}`);

export const fetchSocialMedia = () => axios.get(`${url}/socialMedia`);
export const postSocialMedia = (newSocialMedia) =>
  axios.post(`${url}/socialMedia`, newSocialMedia);
export const patchSocialMedia = (id, updatedSocialMedia) =>
  axios.patch(`${url}/socialMedia?id=${id}`, updatedSocialMedia);
export const deleteSocialMedia = (id) =>
  axios.delete(`${url}/socialMedia?id=${id}`);

export const fetchTestimonial = () => axios.get(`${url}/testimonial`);
export const postTestimonial = (newTestimonial) =>
  axios.post(`${url}/testimonial`, newTestimonial);
export const patchTestimonial = (id, updatedTestimonial) =>
  axios.patch(`${url}/testimonial?id=${id}`, updatedTestimonial);
export const deleteTestimonial = (id) =>
  axios.delete(`${url}/testimonial?id=${id}`);

export const fetchExperience = () => axios.get(`${url}/experience`);
export const postExperience = (newExperience) =>
  axios.post(`${url}/experience`, newExperience);
export const patchExperience = (id, updatedExperience) =>
  axios.patch(`${url}/experience?id=${id}`, updatedExperience);
export const deleteExperience = (id) =>
  axios.delete(`${url}/experience?id=${id}`);
