import mongoose from "mongoose";

const keepSchema = mongoose.Schema({
  title: String,
  description: String,
  selectedFile: String,
  date: {
    type: Date,
    default: new Date(),
  },
});

export const Keep = mongoose.model("Keep", keepSchema);
