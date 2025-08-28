"use client";

import type { ContentProps } from "@/types/common.types";
import { createContext, useContext } from "react";

export const ContentContext = createContext<ContentProps[]>([]);

export const useContent = () => useContext(ContentContext);
