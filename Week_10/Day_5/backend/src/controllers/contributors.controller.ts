import { Request, Response } from "express";
import { pool } from "../db";

export const addContributor = async (req: Request, res: Response) => {
  const { story_id, user_id } = req.body;
  if (!story_id || !user_id) return res.status(400).json({ message: "Missing fields" });
  const { rows } = await pool.query(
    "INSERT INTO Contributors (story_id, user_id) VALUES ($1,$2) ON CONFLICT DO NOTHING RETURNING *",
    [story_id, user_id]
  );
  res.status(201).json(rows[0] || { message: "Already a contributor" });
};

export const getContributors = async (req: Request, res: Response) => {
  const { story_id } = req.params;
  const { rows } = await pool.query(
    `SELECT c.id, u.id as user_id, u.username, u.email
     FROM Contributors c JOIN Users u ON u.id = c.user_id
     WHERE c.story_id=$1`,
    [story_id]
  );
  res.json(rows);
};

export const removeContributor = async (req: Request, res: Response) => {
  const { id } = req.params;
  await pool.query("DELETE FROM Contributors WHERE id=$1", [id]);
  res.json({ message: "Contributor removed" });
};