import { ButtonHTMLAttributes, ReactNode } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: "ghost" | "outline" | "primary" | "icon";
  children?: ReactNode;
  square?: boolean;
  size?: "m" | "l" | "xl";
  color?: "success" | "normal" | "error";
  fullWidth?: boolean;
  disabled?: boolean;
  addonLeft?: ReactNode;
  addonRight?: ReactNode;
}
