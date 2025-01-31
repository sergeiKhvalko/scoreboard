import { useMemo } from "react";
import { LeagueProps } from "../league/League";
import { Breadcrumbs } from "@/shared/ui/Breadcrumbs/Breadcrumbs";

import styles from "./Corners.module.scss";
import { LeagueTitle } from "@/components/ui/leagueTitle";

export const Corners = ({ league, leagueId, season }: LeagueProps) => {
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
          .toLowerCase()
          .replace(" ", "-")}?season=${season}&league=${leagueId}`,
      },
      {
        title: "Corners",
        disabled: true,
        href: ``,
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
        descr="Corner Stats"
      />
    </div>
  );
};
