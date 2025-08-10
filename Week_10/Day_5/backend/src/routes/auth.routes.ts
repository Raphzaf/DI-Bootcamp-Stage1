import { Router } from "express";
import { login, register, refreshAccessToken, logout } from "../controllers/auth.controller";
const r = Router();
r.post("/register", register);
r.post("/login", login);
r.post("/refresh", refreshAccessToken);
r.post("/logout", logout);
export default r;