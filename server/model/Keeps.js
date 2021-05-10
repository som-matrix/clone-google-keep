import mongoose from "mongoose";

const keepSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: new Date(),
  },
});

const Keep = mongoose.model("Keep", keepSchema);

export default Keep;
