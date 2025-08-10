import { Request, Response } from "express";
import { pool } from "../db";

export const getStories = async (_req: Request, res: Response) => {
  const { rows } = await pool.query(
    `SELECT s.*, row_to_json(u) AS author
     FROM Stories s JOIN Users u ON u.id = s.author_id
     ORDER BY s.created_at DESC`
  );
  res.json(rows);
};

export const createStory = async (req: Request, res: Response) => {
  const { title, content } = req.body;
  const userId = (req as any).user.id;
  if (!title || !content) return res.status(400).json({ message: "Title and content required" });
  const { rows } = await pool.query(
    "INSERT INTO Stories (title, content, author_id) VALUES ($1,$2,$3) RETURNING *",
    [title, content, userId]
  );
  res.status(201).json(rows[0]);
};

export const updateStory = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, content } = req.body;
  const userId = (req as any).user.id;
  const found = await pool.query("SELECT author_id FROM Stories WHERE id=$1", [id]);
  if (!found.rows[0]) return res.status(404).json({ message: "Story not found" });
  // Check ownership or collaboration
  const { rows: collab } = await pool.query(
    "SELECT 1 FROM Contributors WHERE story_id=$1 AND user_id=$2",
    [id, userId]
  );
  if (found.rows[0].author_id !== userId && collab.length === 0)
    return res.status(403).json({ message: "Not authorized" });

  const { rows } = await pool.query(
    "UPDATE Stories SET title=$1, content=$2, updated_at=now() WHERE id=$3 RETURNING *",
    [title, content, id]
  );
  res.json(rows[0]);
};

export const deleteStory = async (req: Request, res: Response) => {
  const { id } = req.params;
  const userId = (req as any).user.id;
  const found = await pool.query("SELECT author_id FROM Stories WHERE id=$1", [id]);
  if (!found.rows[0]) return res.status(404).json({ message: "Story not found" });
  if (found.rows[0].author_id !== userId) return res.status(403).json({ message: "Not authorized" });
  await pool.query("DELETE FROM Stories WHERE id=$1", [id]);
  res.json({ message: "Story deleted" });
};