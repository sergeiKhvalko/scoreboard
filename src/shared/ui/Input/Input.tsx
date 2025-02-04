"use client";

import * as React from "react";

import cn from "classnames";
import styles from "./Input.module.scss";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(styles.input, className)}
        ref={ref}
        autoComplete="off"
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
