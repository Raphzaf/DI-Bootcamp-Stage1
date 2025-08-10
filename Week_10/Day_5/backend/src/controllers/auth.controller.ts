ET!, { expiresIn: process.env.ACCESS_TOKEN_TTL || "15m" });
const refresh = (id: number) => jwt.sign({ id }, process.env.REFRESH_SECRET!, { expiresIn: process.env.REFRESH_TOKEN_TTL || "7d" });

export const register = async (req: Request, res: Response) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) return res.status(400).json({ message: "All fields are required." });
  const hashed = await bcrypt.hash(password, 10);
  try {
    const result = await pool.query(
      "INSERT INTO Users (username, email, password_hash) VALUES ($1,$2,$3) RETURNING id, username, email",
      [username, email, hashed]
    );
    const user = result.rows[0];
    const accessToken = access(user.id);
    const refreshToken = refresh(user.id);
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
      path: "/api/auth/refresh",
      maxAge: 7 * 24 * 60 * 60 * 1000
    });
    res.status(201).json({ user, accessToken });
  } catch (e: any) {
    if (e.code === "23505") return res.status(400).json({ message: "Email already in use" });
    res.status(500).json({ message: "Server error" });
  }
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const { rows } = await pool.query("SELECT * FROM Users WHERE email=$1", [email]);
  const user = rows[0];
  if (!user) return res.status(401).json({ message: "Invalid credentials" });
  const ok = await bcrypt.compare(password, user.password_hash);
  if (!ok) return res.status(401).json({ message: "Invalid credentials" });
  const publicUser = { id: user.id, username: user.username, email: user.email };
  const accessToken = access(user.id);
  const refreshToken = refresh(user.id);
  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
    path: "/api/auth/refresh",
    maxAge: 7 * 24 * 60 * 60 * 1000
  });
  res.json({ user: publicUser, accessToken });
};

export const refreshAccessToken = async (req: Request, res: Response) => {
  const token = (req as any).cookies?.refreshToken;
  if (!token) return res.status(403).json({ message: "No refresh token" });
  try {
    const payload = jwt.verify(token, process.env.REFRESH_SECRET!) as { id: number };
    const newAccess = access(payload.id);
    return res.json({ accessToken: newAccess });
  } catch (e) {
    return res.status(403).json({ message: "Invalid refresh token" });
  }
};

export const logout = async (_req: Request, res: Response) => {
  res.clearCookie("refreshToken", { path: "/api/auth/refresh" });
  res.json({ ok: true });
};