import { api } from "../../app/toolkitApi";
import type { User } from "../../../types/user";

export const authApi = api.injectEndpoints({
  endpoints: (b) => ({
    register: b.mutation<{ user: User; accessToken: string }, { username: string; email: string; password: string }>({
      query: (body) => ({ url: "/auth/register", method: "POST", body })
    }),
    login: b.mutation<{ user: User; accessToken: string }, { email: string; password: string }>({
      query: (body) => ({ url: "/auth/login", method: "POST", body })
    })
  })
});
export const { useRegisterMutation, useLoginMutation } = authApi;