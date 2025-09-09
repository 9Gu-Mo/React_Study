"use client";

import { ContentContext } from "@/contexts/ContentContext";
import type { ContentProps } from "@/types/common.types";
import React from "react";

export default function ContentProvider({
  content,
  children,
}: {
  content: ContentProps[];
  children: React.ReactNode;
}) {
  return (
    <ContentContext.Provider value={content}>
      {children}
    </ContentContext.Provider>
  );
}
