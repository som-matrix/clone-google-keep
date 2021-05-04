import express from "express";
import { getPost, createPost } from "../controllers/posts.js";
export const router = express.Router();

router.get("/", getPost);
router.post("/", createPost);
