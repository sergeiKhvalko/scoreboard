import { Breadcrumbs } from "@/shared/ui/Breadcrumbs/Breadcrumbs";
import styles from "./League.module.scss";
import Image from "next/image";
import { League } from "@/types/type";

import { LeagueDetails } from "@/components/ui/leagueDetails";
import { StandingTable } from "@/shared/ui/StandingTable";
import { Tabs } from "@/shared/ui/Tabs/Tabs";
import { ReactNode, useMemo } from "react";

interface LeagueProps {
  league: League;
  leagueId: string;
  season: string;
}
export interface TableMatchesProps {
  title: string;
  content: ReactNode;
}
export const LeaguePage = ({ league, leagueId, season }: LeagueProps) => {
  const breadcrumbs = [
    {
      title: "Scoreboard",
      disabled: false,
      href: "/",
    },
    {
      title: "Leagues",
      disabled: false,
      href: "/leagues?season=2024",
    },
    {
      title: league.name,
      disabled: true,
      href: `/${league.name}?season=${season}&league=${leagueId}`,
    },
  ];

  const TablesAllMatches: TableMatchesProps[] = useMemo(
    () => [
      {
        title: "All match",
        content: (
          <StandingTable
            league={league}
            matchType="summary"
            variant="overview"
            time="match"
          />
        ),
      },
      {
        title: "1st Half",
        content: (
          <StandingTable
            league={league}
            matchType="summary"
            variant="overview"
            time="first_half"
          />
        ),
      },
      {
        title: "2nd Half",
        content: (
          <StandingTable
            league={league}
            matchType="summary"
            variant="overview"
            time="second_half"
          />
        ),
      },
    ],
    [league],
  );

  return (
    <div>
      <Breadcrumbs items={breadcrumbs} />

      <div className={styles.leagueTitle}>
        <Image //error
          width={50}
          height={50}
          src={league.flag}
          alt="country flag"
        />
        <h1 className={styles.title}>{league.name}</h1>
        <span className={styles.descr}>Table & Stats</span>
      </div>

      <div className={styles.wrapper}>
        <LeagueDetails league={league} />
        <div className={styles.fixtures}>fixtures</div>
      </div>

      <div className={styles.tableTitle}>
        {league.name} Table ({league.country}) - {season}/
        {+season.slice(-2) + 1}
      </div>

      <Tabs
        items={TablesAllMatches}
        className={styles.tabs}
      />
    </div>
  );
};
