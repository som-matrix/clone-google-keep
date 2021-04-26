import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { router } from "./routes/posts.js";
import { connectionUri } from "./controllers/database.js";
const app = express();
// Simple Enable all cors request
app.use(cors());
// Bodyparser middleware
app.use(express.urlencoded({ limit: "30mb", extended: "true" }));
// MongoDB
mongoose
  .connect(connectionUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected.. 😀"))
  .catch((error) => console.log(error.message));
// Routes
app.use("/posts", router);
// Port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server is Running..");
});
