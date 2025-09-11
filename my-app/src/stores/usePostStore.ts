"use client";

import { INFO } from "@/api/endpoints";
import { ContentProps } from "@/types/common.types";
import { create } from "zustand";

interface PostState {
  posts: ContentProps[];
  fetchPosts: () => Promise<void>;
  isLoaded: boolean;
}

export const usePostStore = create<PostState>((set, get) => ({
  posts: [],
  isLoaded: false,
  fetchPosts: async () => {
    if (get().isLoaded) return;

    const res = await fetch(INFO.CONTENT);
    const data: ContentProps[] = await res.json();
    set({ posts: data, isLoaded: true });
  },
}));
