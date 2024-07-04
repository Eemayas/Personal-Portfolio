import mongoose from "mongoose";

const experienceSchema = new mongoose.Schema({
  title: String,
  company_name: String,
  iconSrc: String,
  iconBg: String,
  date: String,
  points: [String],
});
const ExperienceModel =
  mongoose.models.ExperienceModel ||
  mongoose.model("ExperienceModel", experienceSchema);
export default ExperienceModel;
