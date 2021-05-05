import mongoose from "mongoose";

const keepSchema = new mongoose.Schema({
  title: String,
  description: String,
  selectedFile: String,
  date: {
    type: Date,
    default: new Date(),
  },
});

const Keep = mongoose.model("Keep", keepSchema);

export default Keep;
