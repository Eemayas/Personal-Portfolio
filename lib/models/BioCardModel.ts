import mongoose from "mongoose";

const bioCardSchema = new mongoose.Schema({
  title: {
    type: String,
    unique: true,
  },
  selectedImage: String,
});
const BioCardModel =
  mongoose.models.BioCardModel || mongoose.model("BioCardModel", bioCardSchema);
export default BioCardModel;
