"use client";

import Link from "next/link";
import cn from "classnames";
import styles from "./Breadcrumbs.module.scss";

interface BreadcrumbsProps {
  title: string;
  disabled: boolean;
  href: string;
}

export const Breadcrumbs = ({ items }: { items: BreadcrumbsProps[] }) => {
  return (
    <ul className={styles.breadcrumbs}>
      {items.map((item, i) => (
        <li key={item.title}>
          <Link
            href={item.href}
            className={cn(styles.link, { [styles.disabled]: item.disabled })}
          >
            {item.title}
          </Link>
          {i !== items.length - 1 ? <span>&gt;</span> : ""}
        </li>
      ))}
    </ul>
  );
};
