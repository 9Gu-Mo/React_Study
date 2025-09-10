"use client";

import { useAtom } from "jotai";
import { useEffect } from "react";
import { contentAtom } from "./contentAtom";

import { INFO } from "@/api/endpoints";

export function useContentPost() {
  const [content, setContent] = useAtom(contentAtom);

  useEffect(() => {
    if (content.length === 0) {
      fetch(INFO.CONTENT)
        .then((res) => res.json())
        .then((data) => setContent(data));
    }
  }, [content, setContent]);

  return content;
}
