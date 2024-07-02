import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  title: String,
  detail: {
    type: String,
    unique: true,
  },
});
const ContactModel =
  mongoose.models.ContactModel || mongoose.model("ContactModel", contactSchema);
export default ContactModel;
