import { LeagueDetails } from "@/components/ui/leagueDetails";
import { LeagueTitle } from "@/components/ui/leagueTitle";
import { Breadcrumbs } from "@/shared/ui/Breadcrumbs/Breadcrumbs";
import { useMemo } from "react";
// import styles from "./TeamFormsPage.module.scss";
import comCls from "../common.module.scss";
import { LeagueProps } from "../leaguePage/LeaguePage";
import { Fixtures } from "@/components/ui/fixtures";

export const TeamFormsPage = ({ league, leagueId, season }: LeagueProps) => {
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
        title: "Forms Stats",
        disabled: true,
        href: `/leagues/${league.name
          .split(" ")
          .map((s) => s.toLowerCase())
          .join("-")}/team-forms?season=${season}&league=${leagueId}`,
      },
    ],
    [league, season, leagueId],
  );

  return (
    <div>
      <Breadcrumbs items={breadcrumbs} />

      <LeagueTitle
        flag={league.flag}
        title={league.name}
        descr="Detailed Stats"
      />

      <div className={comCls.wrapper}>
        <LeagueDetails league={league} />
        <Fixtures
          leagueId={leagueId}
          season={season}
        />
      </div>
    </div>
  );
};
