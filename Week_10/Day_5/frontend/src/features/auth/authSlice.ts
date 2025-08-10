import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { User } from "../../../types/user";

interface AuthState { user: User | null; accessToken: string | null }
const initialState: AuthState = { user: null, accessToken: null };

const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (s, a: PayloadAction<{ user: User; accessToken: string }>) => {
      s.user = a.payload.user; s.accessToken = a.payload.accessToken;
    },
    logout: (s) => { s.user = null; s.accessToken = null; }
  }
});
export const { setCredentials, logout } = slice.actions;
export default slice.reducer;