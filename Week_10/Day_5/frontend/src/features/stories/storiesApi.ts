import { api } from "../../app/toolkitApi";
import type { Story } from "../../../types/story";

export const storiesApi = api.injectEndpoints({
  endpoints: (b) => ({
    getStories: b.query<Story[], void>({ query: () => "/stories" }),
    createStory: b.mutation<Story, { title: string; content: string }>({
      query: (body) => ({ url: "/stories", method: "POST", body })
    }),
    updateStory: b.mutation<Story, { id: number; title: string; content: string }>({
      query: ({ id, ...patch }) => ({ url: `/stories/${id}`, method: "PATCH", body: patch })
    }),
    deleteStory: b.mutation<{ message: string }, number>({
      query: (id) => ({ url: `/stories/${id}`, method: "DELETE" })
    })
  })
});

export const { useGetStoriesQuery, useCreateStoryMutation, useUpdateStoryMutation, useDeleteStoryMutation } = storiesApi;