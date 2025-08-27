import { ReactNode } from "react";

// Header types for the layout component
export interface HeaderProps {
  title?: string;
  isActive?: boolean;
  ref?: React.Ref<HTMLDivElement>;
}

// Icon types for the icon components
export interface IconProps {
  color?: string;
  size?: number;
}

// TabItem types for the tab item component
export interface TabProps {
  id: string;
  name: string;
  content?: ReactNode;
}
