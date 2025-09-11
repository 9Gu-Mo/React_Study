"use client";

import { INFO } from "@/api/endpoints";
import { ContentProps } from "@/types/common.types";
import { create } from "zustand";

interface PostState {
  posts: ContentProps[];
  fetchPosts: () => Promise<void>;
}

export const usePostStore = create<PostState>((set) => ({
  posts: [],
  fetchPosts: async () => {
    const res = await fetch(INFO.CONTENT);
    const data: ContentProps[] = await res.json();
    set({ posts: data });
  },
}));
