import { memo } from "react";
import { HStack } from "../Stack";
import Link from "next/link";
import styles from "./BottomNav.module.scss";
import cn from "classnames";
import { NavProps } from "@/widgets/Sidebar/Navbar";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const BottomNav = memo(({ pages }: any) => {
  return (
    <HStack
      justify="center"
      gap="32"
      className={styles.bottomNav}
    >
      {pages.map((page: NavProps) => (
        <Link
          key={page.title}
          href={`/${page.title.toLowerCase()}?season=2024`}
          className={styles.link}
        >
          <span className={cn("mdi", `${page.icon}`)}></span>
          {page.title}
        </Link>
      ))}
    </HStack>
  );
});

BottomNav.displayName = "BottomNav";
export { BottomNav };
