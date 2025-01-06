import { Button } from "@/shared/ui/Button";
import cn from "classnames";
import styles from "./LangSelector.module.scss";
import { memo } from "react";

const LangSelector = memo(() => {
  return (
    <Button
      variant="icon"
      className={styles.langSelector}
    >
      <span className={cn("mdi", "mdi-translate")}></span>
    </Button>
  );
});

LangSelector.displayName = "LangSelector";
export { LangSelector };
