"use client";

import { memo, useEffect, useState } from "react";
import styles from "./ThemeSelector.module.scss";
import cn from "classnames";
import { Dropdown } from "@/shared/ui/Popups";
import { useTheme } from "next-themes";

interface ThemeSelectorProps {
  className?: string;
}

const ThemeSelector = memo(({ className }: ThemeSelectorProps) => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const items = [
    {
      content: "System",
      onClick: () => setTheme("system"),
    },
    {
      content: "Light",
      onClick: () => setTheme("light"),
    },
    {
      content: "Dark",
      onClick: () => setTheme("dark"),
    },
  ];
  return (
    <Dropdown
      direction="bottom left"
      className={cn("", {}, [className])}
      items={items}
      trigger={
        <span
          className={cn("mdi", "mdi-theme-light-dark", styles.themeSelector)}
        ></span>
      }
    />
  );
});

ThemeSelector.displayName = "ThemeSelector";
export { ThemeSelector };
