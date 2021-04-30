import express from "express";
import { getPost } from "../controllers/posts.js";
export const router = express.Router();

router.get("/", getPost);
