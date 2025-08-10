import { Router } from "express";
import { authenticateToken } from "../middleware/authenticateToken";
import { getStories, createStory, updateStory, deleteStory } from "../controllers/stories.controller";
const r = Router();
r.get("/", authenticateToken, getStories);
r.post("/", authenticateToken, createStory);
r.patch("/:id", authenticateToken, updateStory);
r.delete("/:id", authenticateToken, deleteStory);
export default r;