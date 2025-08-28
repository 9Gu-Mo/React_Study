"use client";

import type { ContentProps } from "@/types/common.types";
import { createContext, useContext } from "react";

export const ContentContext = createContext<ContentProps[] | null>(null);

export const useContent = () => useContext(ContentContext);
