import mongoose from "mongoose";

const socialMediaSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
  },
  logo: String,
  links: String,
});
const SocialMediaModel =
  mongoose.models.SocialMediaModel ||
  mongoose.model("SocialMediaModel", socialMediaSchema);
export default SocialMediaModel;
