import { configureStore } from "@reduxjs/toolkit";
import { api } from "./toolkitApi";
import auth from "../features/auth/authSlice";
import stories from "../features/stories/storiesSlice";

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    auth,
    stories
  },
  middleware: (gDM) => gDM().concat(api.middleware),
  devTools: import.meta.env.MODE !== "production"
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;