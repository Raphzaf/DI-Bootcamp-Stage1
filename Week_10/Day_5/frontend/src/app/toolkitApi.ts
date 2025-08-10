import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { RootState } from "./store";
import { setCredentials, logout } from "../features/auth/authSlice";

const rawBase = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_API_URL,
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.accessToken;
    if (token) headers.set("Authorization", `Bearer ${token}`);
    return headers;
  }
});

const baseQueryWithReauth: typeof rawBase = async (args, api, extra) => {
  let res = await rawBase(args, api, extra);
  if (res.error && (res.error as any).status === 403) {
    const refresh = await rawBase({ url: "/auth/refresh", method: "POST" }, api, extra);
    if (refresh.data) {
      const { accessToken } = refresh.data as { accessToken: string };
      const user = (api.getState() as RootState).auth.user; // keep user
      api.dispatch(setCredentials({ user: user!, accessToken }));
      res = await rawBase(args, api, extra);
    } else {
      api.dispatch(logout());
    }
  }
  return res;
};

export const api = createApi({ reducerPath: "api", baseQuery: baseQueryWithReauth, endpoints: () => ({}) });