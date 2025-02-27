import { HStack } from "@/shared/ui/Stack";
import styles from "./Navbar.module.scss";
import Link from "next/link";
import cn from "classnames";
import { LangSelector } from "@/features/langSelector/LangSelector";
import { memo } from "react";
import { ThemeSelector } from "@/features/themeSelector/ThemeSelector";
// import { UserProfile } from "@/features/userProfile/UserProfile";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/react";
import { NotificationButton } from "@/features/notificationButton/NotificationButton";
import { AppLink } from "@/shared/ui/AppLink";
import { AvatarDropdown } from "@/features/avatarDropdown/AvatarDropdown";
import { SearchBarForm } from "@/components/ui/searchBarForm";
import { fetchTeams } from "@/services/fetchTeams";

export interface NavProps {
  title: string;
  icon: string;
  to: string;
  stats?: Array<string>;
  countries?: Array<string>;
  leagues?: Array<Record<string, string>>;
}

const Navbar = memo(async ({ pages }: { pages: NavProps[] }) => {
  // const authData = useSelector(getUserAuthData)
  const authData = true;
  const teamsData = await fetchTeams();

  return (
    <header className={styles.navbar}>
      <Link
        href="/"
        className={styles.logo}
      >
        <span className={styles.red24}>24</span>
        {/* <strong>SCOREBOARD<span className={styles.red24}>24</span></strong> */}
      </Link>

      <SearchBarForm
        teamsData={teamsData}
        className="ml-20"
      />

      <HStack
        gap="24"
        className={styles.navLinks}
      >
        {pages.map((page: NavProps) => (
          <Menu key={page.title}>
            <MenuButton className={styles.navBtn}>
              <span className={cn("mdi", `${page.icon}`, styles.icon)}></span>
              {page.title}
            </MenuButton>

            <MenuItems
              anchor={{ to: "bottom" }}
              className={cn(styles.menuItems, {
                [styles.itemLeague]: page.title === "Leagues",
              })}
            >
              {page.title === "Stats" ? (
                page.stats?.map((stat) => (
                  <MenuItem key={stat}>
                    <Link
                      className={styles.link}
                      href={page.to}
                    >
                      {stat}
                    </Link>
                  </MenuItem>
                ))
              ) : page.title === "Leagues" ? (
                <div className={styles.leagues}>
                  <div className={styles.countries}>
                    {page.countries?.map((country) => (
                      <MenuItem key={country}>
                        <Link
                          className={styles.link}
                          href={page.to}
                        >
                          {country}
                        </Link>
                      </MenuItem>
                    ))}
                  </div>
                  <div>
                    {page.leagues?.map((league) => (
                      <MenuItem key={league.name}>
                        <Link
                          className={styles.link}
                          href={league.link}
                        >
                          {league.name}
                        </Link>
                      </MenuItem>
                    ))}
                  </div>
                </div>
              ) : (
                <div>
                  {page.leagues?.map((league) => (
                    <MenuItem key={league.name}>
                      <Link
                        className={styles.link}
                        href={league.link}
                      >
                        {league.name}
                      </Link>
                    </MenuItem>
                  ))}
                </div>
              )}
            </MenuItems>
          </Menu>
        ))}
      </HStack>

      <div className={styles.divider}></div>

      <LangSelector />
      <ThemeSelector />

      {authData ? (
        <HStack
          gap="16"
          className={styles.actions}
        >
          {/* <NotificationButton /> */}
          <AvatarDropdown />
        </HStack>
      ) : (
        <AppLink
          href={"/auth/login"}
          className={styles.loginBtn}
        >
          {"Log in"}
        </AppLink>
      )}
    </header>
  );
});

Navbar.displayName = "Navbar";
export { Navbar };
