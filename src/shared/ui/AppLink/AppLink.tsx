"use client";

import { memo, ReactNode } from "react";
import cn from "classnames";
import styles from "./AppLink.module.scss";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";

export type AppLinkVariant = "primary" | "red";

interface AppLinkProps extends LinkProps {
  className?: string;
  variant?: AppLinkVariant;
  children?: ReactNode;
  activeClassName?: string;
}

const AppLink = memo((props: AppLinkProps) => {
  const {
    href,
    className,
    children,
    variant = "primary",
    activeClassName = "",
    ...otherProps
  } = props;

  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={cn(styles.AppLink, { [activeClassName]: pathname === href }, [
        className,
        styles[variant],
      ])}
      {...otherProps}
    >
      {children}
    </Link>
  );
});

AppLink.displayName = "AppLink";
export { AppLink };
