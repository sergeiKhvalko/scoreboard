"use client";

import { Toaster } from "../ui/Sonner";

export function ToastProvider() {
  return (
    <Toaster
      position="bottom-right"
      duration={6000}
    />
  );
}
