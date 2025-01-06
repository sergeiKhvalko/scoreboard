import { HStack } from "@/shared/ui/Stack";
import styles from "./Navbar.module.scss";
import Link from "next/link";
import cn from "classnames";
import { LangSelector } from "@/features/langSelector/LangSelector";
import { memo } from "react";
import { ThemeSelector } from "@/features/themeSelector/ThemeSelector";
import { UserProfile } from "@/features/userProfile/UserProfile";

export interface NavProps {
  title: string;
  icon: string;
  to: string;
  stats?: Array<string>;
  countries?: Array<string>;
  leagues?: Array<Record<string, string>>;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Navbar = memo(({ pages }: any) => {
  console.log(pages);

  return (
    <div className={styles.navbar}>
      <Link
        href="/"
        className={styles.logo}
      >
        SCOREBOARD<span className={styles.red24}>24</span>
      </Link>

      <HStack
        gap="24"
        className={styles.navLinks}
      >
        {pages.map((page: NavProps) => (
          <Link
            key={page.title}
            href={page.to}
            className={styles.navLink}
          >
            <span className={cn("mdi", `${page.icon}`, styles.icon)}></span>
            {page.title}
          </Link>
        ))}
      </HStack>

      <div className={styles.divider}></div>

      <LangSelector />
      <ThemeSelector />

      {/* <ThemeSelector
        color="grey-darken-2"
        variant="menu"
      /> */}
      <UserProfile />
    </div>
  );
});

Navbar.displayName = "Navbar";
export { Navbar };
