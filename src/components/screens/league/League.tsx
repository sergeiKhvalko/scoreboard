import { Breadcrumbs } from "@/shared/ui/Breadcrumbs/Breadcrumbs";
import styles from "./League.module.scss";
import { League } from "@/types/type";

import { LeagueDetails } from "@/components/ui/leagueDetails";
import { StandingTable } from "@/shared/ui/StandingTable";
import { Tabs } from "@/shared/ui/Tabs/Tabs";
import { ReactNode, useMemo } from "react";
import cn from "classnames";
import { commandZones } from "@/shared/consts/commandZones";
import { LeagueTitle } from "@/components/ui/leagueTitle";

export interface LeagueProps {
  league: League;
  leagueId: string;
  season: string;
}
export interface TableMatchesProps {
  title: string;
  image?: string;
  content: ReactNode;
}
export const LeaguePage = ({ league, leagueId, season }: LeagueProps) => {
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
        disabled: true,
        href: `/${league.name}?season=${season}&league=${leagueId}`,
      },
    ],
    [league, season, leagueId],
  );

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

  const TablesHomeMatches: TableMatchesProps[] = useMemo(
    () => [
      {
        title: "All match",
        content: (
          <StandingTable
            league={league}
            matchType="home"
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
            matchType="home"
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
            matchType="home"
            variant="overview"
            time="second_half"
          />
        ),
      },
    ],
    [league],
  );
  const TablesAwayMatches: TableMatchesProps[] = useMemo(
    () => [
      {
        title: "All match",
        content: (
          <StandingTable
            league={league}
            matchType="away"
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
            matchType="away"
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
            matchType="away"
            variant="overview"
            time="second_half"
          />
        ),
      },
    ],
    [league],
  );

  const firstTeam = league.standings[0].name;
  const secondTeam = league.standings[1].name;
  const lastTeam = league.standings[league.standings.length - 1].name;

  return (
    <div>
      <Breadcrumbs items={breadcrumbs} />

      <LeagueTitle
        flag={league.flag}
        title={league.name}
        descr="Table & Stats"
      />

      <div className={styles.wrapper}>
        <LeagueDetails league={league} />
        <div className={styles.fixtures}>fixtures</div>
      </div>

      <div className="table-title">
        {league.name} Table ({league.country}) - {season}/
        {+season.slice(-2) + 1}
      </div>

      <Tabs
        items={TablesAllMatches}
        className="mt-20"
        overflow="auto"
        minWidth={500}
      />

      <div className={styles.tableResults}>
        <div>
          <ul>
            <li className={cn(styles.zone, styles.zone1)}>
              <div className={styles.zoneBg}></div>
              <div className={styles.zoneName}>
                {league.name === "Championship" ||
                league.name === "FNL" ||
                league.name === "2BundesLiga"
                  ? "Promotion"
                  : "UEFA Champions League"}
              </div>
            </li>
            <li className={cn(styles.zone, styles.zone2)}>
              <div className={styles.zoneBg}></div>
              <div className={styles.zoneName}>
                {league.name === "Championship" ||
                league.name === "FNL" ||
                league.name === "2BundesLiga"
                  ? "Promotion Play-off"
                  : "UEFA Europa League"}
              </div>
            </li>
            {Object.values(commandZones[league.name]).includes("zone3") && (
              <li className={cn(styles.zone, styles.zone3)}>
                <div className={styles.zoneBg}></div>
                <div className={styles.zoneName}>Relegation Play-off</div>
              </li>
            )}
            <li className={cn(styles.zone, styles.zone4)}>
              <div className={styles.zoneBg}></div>
              <div className={styles.zoneName}>Relegation</div>
            </li>
          </ul>
        </div>
        <div className={styles.analysis}>
          <h3>{league.name} Table Analysis</h3>
          <ul>
            <li>
              {`Difference between ${firstTeam} FC at 1st and ${secondTeam} FC at
              2nd is ${
                league.standings[0].matches.summary.match.P -
                league.standings[1].matches.summary.match.P
              } points.`}
            </li>
            <li>
              {`The bottom team (${lastTeam} FC) need 10 more points to escape
              automatic relegation.`}
            </li>
            <li>
              {`The point gap between ${firstTeam} FC at the top and ${lastTeam}
              FC at the bottom is ${
                league.standings[0].matches.summary.match.P -
                league.standings[league.standings.length - 1].matches.summary
                  .match.P
              } points.`}
            </li>
          </ul>
        </div>
      </div>

      <div className="table-title">
        {league.name} <span className="home-table">Home</span> Table (
        {league.country}) - {season}/{+season.slice(-2) + 1}
      </div>

      <Tabs
        items={TablesHomeMatches}
        className="mt-20"
        overflow="auto"
        minWidth={500}
      />

      <div className="table-title">
        {league.name} <span className="away-table">Away</span> Table (
        {league.country}) - {season}/{+season.slice(-2) + 1}
      </div>

      <Tabs
        items={TablesAwayMatches}
        className="mt-20"
        overflow="auto"
        minWidth={500}
      />
    </div>
  );
};
