import { Router } from "express";
import { authenticateToken } from "../middleware/authenticateToken";
import { addContributor, getContributors, removeContributor } from "../controllers/contributors.controller";
const r = Router();
r.post("/", authenticateToken, addContributor);
r.get("/:story_id", authenticateToken, getContributors);
r.delete("/:id", authenticateToken, removeContributor);
export default r;