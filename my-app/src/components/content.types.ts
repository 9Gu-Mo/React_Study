import { ReactNode } from "react";

export interface ContentProps {
  id?: string;
  class?: string;
  children?: ReactNode;
  dataName?: string;
  dataDuration?: number;
}
