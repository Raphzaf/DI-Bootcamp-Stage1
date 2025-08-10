import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { Story } from "../../../types/story";

interface State { list: Story[]; current: Story | null }
const initial: State = { list: [], current: null };

const slice = createSlice({
  name: "stories",
  initialState: initial,
  reducers: {
    setStories: (s, a: PayloadAction<Story[]>) => { s.list = a.payload; },
    setCurrent: (s, a: PayloadAction<Story | null>) => { s.current = a.payload; }
  }
});
export const { setStories, setCurrent } = slice.actions;
export default slice.reducer;