import { memo } from "react";
import cn from "classnames";
import styles from "./Overlay.module.scss";

interface OverlayProps {
  className?: string;
  onClick?: () => void;
}

const Overlay = memo((props: OverlayProps) => {
  const { className, onClick } = props;

  return (
    <div
      onClick={onClick}
      className={cn(styles.Overlay, {}, [className])}
    />
  );
});

Overlay.displayName = "Overlay";
export { Overlay };
