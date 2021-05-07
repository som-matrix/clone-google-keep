import mongoose from "mongoose";

const keepSchema = new mongoose.Schema({
  title: String,
  description: String,
  selectedImage: String,
  date: {
    type: Date,
    default: new Date(),
  },
});

const Keep = mongoose.model("Keep", keepSchema);

export default Keep;
