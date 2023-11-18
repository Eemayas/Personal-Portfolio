import mongoose from "mongoose";

const introductionSchema = new mongoose.Schema({
  bio: String,
  selectedImage: String,
});
const IntroductionModel =
  mongoose.models.IntroductionModel ||
  mongoose.model("IntroductionModel", introductionSchema);
export default IntroductionModel;
