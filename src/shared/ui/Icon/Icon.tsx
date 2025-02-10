"use client";

import React, { memo } from "react";
import styles from "./Icon.module.scss";
import cn from "classnames";

type SvgProps = Omit<React.SVGProps<SVGSVGElement>, "onClick">;

interface IconBaseProps extends SvgProps {
  className?: string;
  Svg: React.FC<React.SVGProps<SVGSVGElement>>;
}

interface NonClickableIconProps extends IconBaseProps {
  clickable?: false;
}

interface ClickableBaseProps extends IconBaseProps {
  clickable: true;
  onClick: () => void;
}

type IconProps = NonClickableIconProps | ClickableBaseProps;

const Icon = memo((props: IconProps) => {
  const {
    className,
    Svg,
    width = 32,
    height = 32,
    clickable,
    ...otherProps
  } = props;

  const icon = (
    <Svg
      className={cn(styles.Icon, {}, [className])}
      width={width}
      height={height}
      {...otherProps}
      onClick={undefined}
    />
  );

  if (clickable) {
    return (
      <button
        type="button"
        className={styles.button}
        onClick={props.onClick}
        style={{ height, width }}
      >
        {icon}
      </button>
    );
  }

  return icon;
});

Icon.displayName = "Icon";
export { Icon };
