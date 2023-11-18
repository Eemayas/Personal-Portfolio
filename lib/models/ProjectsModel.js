import mongoose from "mongoose";

const projectSchema = mongoose.Schema({
  name: {
    type: String,
    unique: true,
  },
  description: String,
  tags: [
    String
  ],
  image: String,
  source_code_link: String,
  websitelinks:String,
});
const ProjectModel = mongoose.model("ProjectModel", projectSchema);
export default ProjectModel;
