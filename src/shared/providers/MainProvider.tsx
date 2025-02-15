"use client";

import { type PropsWithChildren } from "react";

import { TanstackQueryProvider, ToastProvider } from "./index";
import { ThemeProvider } from "next-themes";

export function MainProvider({ children }: PropsWithChildren<unknown>) {
  return (
    <TanstackQueryProvider>
      <ThemeProvider attribute="class">
        <ToastProvider />
        {children}
      </ThemeProvider>
    </TanstackQueryProvider>
  );
}
