import mongoose from "mongoose";

const contactSchema = mongoose.Schema({
  title: String,
  detail: {
    type: String,
    unique: true,
  },
});
const ContactModel = mongoose.model("ContactModel", contactSchema);
export default ContactModel;
