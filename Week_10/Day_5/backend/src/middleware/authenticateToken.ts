import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers["authorization"]; // "Bearer <token>"
  const token = authHeader?.toString().startsWith("Bearer ") ? authHeader.toString().slice(7) : null;
  if (!token) return res.status(401).json({ message: "Missing token" });
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET as string) as { id: number };
    (req as any).user = { id: payload.id };
    next();
  } catch (e) {
    return res.status(403).json({ message: "Invalid or expired token" });
  }
};