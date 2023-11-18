import mongoose from "mongoose";

const socialMediaSchema = mongoose.Schema({
    name: {
        type: String,
        unique: true,
      },
    logo: String,
    links: String,
});
const SocialMediaModel= mongoose.model("SocialMediaModel",socialMediaSchema);
export default SocialMediaModel
