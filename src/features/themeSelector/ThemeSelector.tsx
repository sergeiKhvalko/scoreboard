import { Button } from "@/shared/ui/Button";
import { memo } from "react";
import styles from "./ThemeSelector.module.scss";
import cn from "classnames";

const ThemeSelector = memo(() => {
  return (
    <Button
      variant="icon"
      className={styles.themeSelector}
    >
      <span className={cn("mdi", "mdi-theme-light-dark")}></span>
    </Button>
  );
});

ThemeSelector.displayName = "ThemeSelector";
export { ThemeSelector };
