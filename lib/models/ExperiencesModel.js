// {
//     title: "",
//     company_name: "",
//     icon: C,
//     iconBg: "",
//     date: "",
//     points: [
//       "",
//     ],
//   },
import mongoose from "mongoose";

const experienceSchema = mongoose.Schema({
  title: String,
  company_name: String,
  icon: String,
  iconBg: String,
  date: String,
  points: [String],
});
const ExperienceModel = mongoose.model("ExperienceModel", experienceSchema);
export default ExperienceModel;
