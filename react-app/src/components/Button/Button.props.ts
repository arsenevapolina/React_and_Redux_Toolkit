import { MouseEventHandler, ReactNode } from "react";

export interface ButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children?: ReactNode;
  className?: string;
  img?: string;
  text?: string;
}
