import { LeagueDetails } from "@/components/ui/leagueDetails";
import { LeagueTitle } from "@/components/ui/leagueTitle";
import { Breadcrumbs } from "@/shared/ui/Breadcrumbs/Breadcrumbs";
import { useCallback, useMemo } from "react";
import { LeagueProps, TableMatchesProps } from "../league/League";
import styles from "./DetailedStats.module.scss";
import { Tabs } from "@/shared/ui/Tabs";
import { StandingTable } from "@/shared/ui/StandingTable";
import { League } from "@/types/type";
import {
  MatchTypeProps,
  TableVariantsProps,
} from "@/shared/ui/StandingTable/StandingTable";
import { TableHeader } from "@/shared/ui/TableHeader/TableHeader";

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

  const generateTables = useCallback(
    (
      league: League,
      matchType: MatchTypeProps,
      variant: TableVariantsProps,
      timeArr: ["match", "first_half", "second_half"],
    ) => {
      const res: TableMatchesProps[] = [];
      const mapToTitle = {
        match: "All match",
        first_half: "1st Half",
        second_half: "2nd Half",
      };

      timeArr.forEach((time) => {
        res.push({
          title: mapToTitle[time],
          content: (
            <StandingTable
              league={league}
              matchType={matchType}
              variant={variant}
              time={time}
            />
          ),
        });
      });

      return res;
    },
    [],
  );

  const allStats = useMemo(
    () => [
      {
        title: "Corners Total",
        image: "/corners.png",
        content: (
          <>
            <Tabs
              items={generateTables(league, "summary", "corners", [
                "match",
                "first_half",
                "second_half",
              ])}
              overflow="auto"
              minWidth={500}
            />
            <div>Description for table...</div>

            <TableHeader
              league={league}
              season={season}
              title="Home"
              descr="Table of
              total corners"
            />

            <Tabs
              items={generateTables(league, "home", "corners", [
                "match",
                "first_half",
                "second_half",
              ])}
              overflow="auto"
              minWidth={500}
            />

            <TableHeader
              league={league}
              season={season}
              title="Away"
              descr="Table of
              total corners"
            />

            <Tabs
              items={generateTables(league, "away", "corners", [
                "match",
                "first_half",
                "second_half",
              ])}
              overflow="auto"
              minWidth={500}
            />
          </>
        ),
      },
      {
        title: "Corners Individual",
        image: "/individ_corners.png",
        content: (
          <>
            <Tabs
              items={generateTables(league, "summary", "individ_corners", [
                "match",
                "first_half",
                "second_half",
              ])}
              overflow="auto"
              minWidth={500}
            />
            <div>Description for table...</div>

            <TableHeader
              league={league}
              season={season}
              title="Home"
              descr="Table of
              individual corner teams"
            />

            <Tabs
              items={generateTables(league, "home", "individ_corners", [
                "match",
                "first_half",
                "second_half",
              ])}
              overflow="auto"
              minWidth={500}
            />

            <TableHeader
              league={league}
              season={season}
              title="Away"
              descr="Table of
              individual corner teams"
            />

            <Tabs
              items={generateTables(league, "away", "individ_corners", [
                "match",
                "first_half",
                "second_half",
              ])}
              overflow="auto"
              minWidth={500}
            />
          </>
        ),
      },
      {
        title: "Yellow Cards",
        image: "/yellow_cards.png",
        content: (
          <>
            <Tabs
              items={generateTables(league, "summary", "yellow_cards", [
                "match",
                "first_half",
                "second_half",
              ])}
              overflow="auto"
              minWidth={500}
            />
            <div>Description for table...</div>

            <TableHeader
              league={league}
              season={season}
              title="Home"
              descr="Table of
              yellow cards total"
            />

            <Tabs
              items={generateTables(league, "home", "yellow_cards", [
                "match",
                "first_half",
                "second_half",
              ])}
              overflow="auto"
              minWidth={500}
            />

            <TableHeader
              league={league}
              season={season}
              title="Away"
              descr="Table of
              yellow cards total"
            />

            <Tabs
              items={generateTables(league, "away", "yellow_cards", [
                "match",
                "first_half",
                "second_half",
              ])}
              overflow="auto"
              minWidth={500}
            />
          </>
        ),
      },
      {
        title: "Yellow Cards Individual",
        image: "/individ_yellow_cards.png",
        content: (
          <>
            <Tabs
              items={generateTables(league, "summary", "individ_yellow_cards", [
                "match",
                "first_half",
                "second_half",
              ])}
              overflow="auto"
              minWidth={500}
            />
            <div>Description for table...</div>

            <TableHeader
              league={league}
              season={season}
              title="Home"
              descr="Table of
              individual yellow cards"
            />

            <Tabs
              items={generateTables(league, "home", "individ_yellow_cards", [
                "match",
                "first_half",
                "second_half",
              ])}
              overflow="auto"
              minWidth={500}
            />

            <TableHeader
              league={league}
              season={season}
              title="Away"
              descr="Table of
              individual yellow cards"
            />

            <Tabs
              items={generateTables(league, "away", "individ_yellow_cards", [
                "match",
                "first_half",
                "second_half",
              ])}
              overflow="auto"
              minWidth={500}
            />
          </>
        ),
      },
    ],
    [league, season, generateTables],
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

      <TableHeader
        league={league}
        season={season}
        title="Detailed Statistics Tables"
      />

      <Tabs
        items={allStats}
        className="mt-20"
      />
    </div>
  );
};
