import { memo } from "react";
import cn from "classnames";
import styles from "./Text.module.scss";

export type TextVariant = "primary" | "error" | "accent";

export type TextAlign = "right" | "left" | "center";

export type TextSize = "s" | "m" | "l";

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  variant?: TextVariant;
  align?: TextAlign;
  size?: TextSize;
  bold?: boolean;
  "data-testid"?: string;
}

type HeaderTagType = "h1" | "h2" | "h3";

const mapSizeToClass: Record<TextSize, string> = {
  s: styles.size_s,
  m: styles.size_m,
  l: styles.size_l,
};

const mapSizeToHeaderTag: Record<TextSize, HeaderTagType> = {
  s: "h3",
  m: "h2",
  l: "h1",
};

const Text = memo((props: TextProps) => {
  const {
    className,
    text,
    title,
    variant = "primary",
    align = "left",
    size = "m",
    bold,
    "data-testid": dataTestId = "Text",
  } = props;

  const HeaderTag = mapSizeToHeaderTag[size];
  const sizeClass = mapSizeToClass[size];

  const additionalClasses = [
    className,
    styles[variant],
    styles[align],
    sizeClass,
  ];

  return (
    <div
      className={cn(styles.Text, { [styles.bold]: bold }, additionalClasses)}
    >
      {title && (
        <HeaderTag
          className={styles.title}
          data-testid={`${dataTestId}.Header`}
        >
          {title}
        </HeaderTag>
      )}
      {text && (
        <p
          className={styles.text}
          data-testid={`${dataTestId}.Paragraph`}
        >
          {text}
        </p>
      )}
    </div>
  );
});

Text.displayName = "Text";
export { Text };
