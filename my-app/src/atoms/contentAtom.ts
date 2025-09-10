"use client";

import { atom } from "jotai";

// interface
import { ContentProps } from "@/types/common.types";

export const contentAtom = atom<ContentProps[]>([]);
