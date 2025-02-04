import { LeagueDetails } from "@/components/ui/leagueDetails";
import { LeagueTitle } from "@/components/ui/leagueTitle";
import { Breadcrumbs } from "@/shared/ui/Breadcrumbs/Breadcrumbs";
import { useMemo } from "react";
import { LeagueProps } from "../league/League";
import styles from "./DetailedStats.module.scss";
import { Tabs } from "@/shared/ui/Tabs";
import { StandingTable } from "@/shared/ui/StandingTable";

export const DetailedStatsPage = ({
  league,
  leagueId,
  season,
}: LeagueProps) => {
  const breadcrumbs = useMemo(
    () => [
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
        disabled: false,
        href: `/leagues/${league.name
          .split(" ")
          .map((s) => s.toLowerCase())
          .join("-")}?season=${season}&league=${leagueId}`,
      },
      {
        title: "Detailed Stats",
        disabled: true,
        href: `/${league.name}/detailed-stats?season=${season}&league=${leagueId}`,
      },
    ],
    [league, season, leagueId],
  );

  const corners = useMemo(
    () => [
      {
        title: "All match",
        content: (
          <StandingTable
            league={league}
            matchType="summary"
            variant="corners"
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
            variant="corners"
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
            variant="corners"
            time="second_half"
          />
        ),
      },
    ],
    [league],
  );

  const allStats = useMemo(
    () => [
      {
        title: "Corners Total",
        image: "/corners.png",
        content: (
          <Tabs
            items={corners}
            overflow="auto"
            minWidth={500}
          />
        ),
      },
      {
        title: "Corners Individual",
        image: "/individ_corners.png",
        content: (
          <Tabs
            items={corners}
            overflow="auto"
            minWidth={500}
          />
        ),
      },
      {
        title: "Yellow Cards",
        image: "/yellow_cards.png",
        content: (
          <Tabs
            items={corners}
            overflow="auto"
            minWidth={500}
          />
        ),
      },
      {
        title: "Yellow Cards Individual",
        image: "/individ_yellow_cards.png",
        content: (
          <Tabs
            items={corners}
            overflow="auto"
            minWidth={500}
          />
        ),
      },
      // {
      //   title: "Yellow Cards Individual",
      //   content: <Tabs items={corners} />,
      // },
      // {
      //   title: "Totals",
      //   content: <Tabs items={corners} />,
      // },
    ],
    [corners],
  );

  return (
    <div>
      <Breadcrumbs items={breadcrumbs} />

      <LeagueTitle
        flag={league.flag}
        title={league.name}
        descr="Detailed Stats"
      />

      <div className={styles.wrapper}>
        <LeagueDetails league={league} />
        <div className={styles.stats}>stats</div>
      </div>

      <div className={styles.tableTitle}>
        {league.name} Table ({league.country}) - {season}/
        {+season.slice(-2) + 1}
      </div>

      <Tabs
        items={allStats}
        className="mt-20"
      />
    </div>
  );
};
