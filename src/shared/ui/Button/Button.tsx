import styles from "./Button.module.scss";
import { ButtonProps } from "./Button.props";
import { ForwardedRef, forwardRef } from "react";
import cn from "classnames";

const Button = forwardRef(
  (props: ButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
    const {
      children,
      className,
      variant = "primary",
      square,
      size = "m",
      color = "normal",
      fullWidth,
      disabled,
      addonLeft,
      addonRight,
      ...otherProps
    } = props;

    const mods = {
      [styles.disabled]: disabled,
      [styles.square]: square,
      [styles.fullWidth]: fullWidth,
      [styles.withAddon]: Boolean(addonLeft) || Boolean(addonRight),
    };

    return (
      <button
        type="button"
        className={cn(
          styles.button,
          [className, styles[variant], styles[size], styles[color]],
          mods,
        )}
        {...otherProps}
        ref={ref}
      >
        <div className={styles.addonLeft}>{addonLeft}</div>
        {children}
        <div className={styles.addonRight}>{addonRight}</div>
      </button>
    );
  },
);

Button.displayName = "Button";
export { Button };
