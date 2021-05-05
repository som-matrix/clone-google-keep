import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import postRoute from "./routes/posts.js";
import { connectionUri } from "./controllers/database.js";
const app = express();
// Bodyparser middleware
app.use(express.json({ limit: "30mb", extended: "true" }));
app.use(express.urlencoded({ limit: "30mb", extended: "true" }));
// Simple Enable all cors request
app.use(cors());
// MongoDB
mongoose
  .connect(connectionUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected.. 😀"))
  .catch((error) => console.log(error.message));
// Routes
app.use("/posts", postRoute);
// Port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server is Running..");
});

mongoose.set("useFindAndModify", false);
