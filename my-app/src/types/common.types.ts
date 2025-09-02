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

// Content & Nav types
export interface ContentProps {
  id: string;
  type: string;
  class?: string;
  aosDataName?: string;
  aosDataDuration?: number;
  name?: string;
}

// Input types
export interface FormProps {
  id: string;
  type?: string;
  method?: string;
  action?: string;
  label?: string;
  name?: string;
  placeholder?: string;
  value?: string | number;
  validate?: string;
  disabled?: boolean;
  clear?: boolean;
  class?: string;
  children?: ReactNode;
  onChange?: React.ChangeEvent<HTMLInputElement>;
  onSubmit?: React.FormEventHandler<HTMLFormElement>;
  required?: boolean;
  ref?: HTMLInputElement;
  count?: number;
  min?: number;
  max?: number;
}
