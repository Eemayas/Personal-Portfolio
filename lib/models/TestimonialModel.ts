import mongoose from "mongoose";

const testimonialSchema = new mongoose.Schema({
  testimonial: String,
  name: {
    type: String,
    unique: true,
  },
  designation: String,
  company: String,
  image: String,
});
const TestimonialModel =
  mongoose.models.TestimonialModel ||
  mongoose.model("TestimonialModel", testimonialSchema);
export default TestimonialModel;
