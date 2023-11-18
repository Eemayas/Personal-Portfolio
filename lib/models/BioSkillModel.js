import mongoose from "mongoose";

const bioSkillSchema = new mongoose.Schema({
  title: {
    type: String,
    unique: true,
  },
  selectedImage: String,
});
const BioSkillModel =
  mongoose.models.BioSkillModel ||
  mongoose.model("BioSkillModel", bioSkillSchema);
export default BioSkillModel;
