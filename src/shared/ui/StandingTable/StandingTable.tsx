"use client";

import { Games, League, Matches } from "@/types/type";
import { memo, useCallback } from "react";
import { Table } from "../Table";
import { commandZones } from "@/shared/consts/commandZones";
import { tableHeaders, TableHeadersProps } from "@/shared/consts/tablesHeaders";

export type MatchTypeProps = "summary" | "home" | "away";
export type TableVariantsProps =
  | "overview"
  | "corners"
  | "individ_corners"
  | "yellow_cards"
  | "individ_yellow_cards"
  | "total"
  | "individ_total"
  | "both_score"
  | "productive_half"
  | "individ_productive_half";
export type MatchTimeProps = "match" | "first_half" | "second_half";
interface TableProps {
  league: League;
  matchType: MatchTypeProps;
  time: MatchTimeProps;
  variant: TableVariantsProps;
  className?: string;
}

type MatchTypes = {
  [key in keyof Matches]: Matches[key];
};

export interface TeamProps extends Partial<MatchTypes> {
  id: number;
  name: string;
  form: {
    info?:
      | Array<{
          team1: string;
          team2: string;
          score: string;
        }>
      | string;
    result?: string;
  };
  zone: string;
}
const StandingTable = memo(
  ({ league, matchType, variant, time }: TableProps) => {
    const actualStanding: Array<TeamProps> = [];

    league.standings.forEach((item, i) => {
      const team: TeamProps = {
        id: item.id,
        name: item.name,
        form:
          variant === "overview"
            ? {
                info: [...item.form[matchType]["info"]],
                result: item.form[matchType].result,
              }
            : {},
        zone: league.name ? commandZones[league.name][i + 1] : "",
        [matchType]: {
          [time]:
            variant === "overview"
              ? { ...item.matches[matchType][time] }
              : { ...item.statistics[variant][matchType][time] },
        },
      };

      actualStanding.push(team);
    });

    const sortTable = useCallback(
      (item: string, standings: TeamProps[]) => {
        standings.sort((a: TeamProps, b: TeamProps) => {
          return b[matchType] && a[matchType]
            ? b[matchType][time][item as keyof Games] -
                a[matchType][time][item as keyof Games]
            : 0;
        });
      },
      [matchType, time],
    );

    const mapToSort = {
      overview: {
        match: "P",
        first_half: "P",
        second_half: "P",
      },
      corners: {
        match: "corner_over_9_5",
        first_half: "corner_over_4_5",
        second_half: "corner_over_4_5",
      },
      individ_corners: {
        match: "corner_count",
        first_half: "corner_over_4_5",
        second_half: "corner_over_4_5",
      },
      yellow_cards: {
        match: "yellow_over_4_5",
        first_half: "yellow_over_2_5",
        second_half: "yellow_over_2_5",
      },
      individ_yellow_cards: {
        match: "yellow_count",
        first_half: "yellow_count",
        second_half: "yellow_count",
      },
      total: {
        match: "total_over_2_5",
        first_half: "total_over_1_5",
        second_half: "total_over_1_5",
      },
      individ_total: {
        match: "in_total_over_1_5",
        first_half: "in_total_over_1_5",
        second_half: "in_total_over_1_5",
      },
      both_score: {
        match: "bs_yes",
        first_half: "bs_yes",
        second_half: "bs_yes",
      },
      productive_half: {
        match: "first_over_second",
        first_half: "first_over_second",
        second_half: "first_over_second",
      },
      individ_productive_half: {
        match: "first_over_second",
        first_half: "first_over_second",
        second_half: "first_over_second",
      },
    };

    sortTable(mapToSort[variant][time], actualStanding);

    const getCellWidth = useCallback(
      (arr: TableHeadersProps[]) => {
        const freeSpace = variant === "overview" ? 100 - 30 - 17 : 100 - 30;
        return `${freeSpace / arr.length}%`;
      },
      [variant],
    );

    return (
      <Table
        headers={tableHeaders[variant][time]}
        standings={actualStanding}
        cellWidth={getCellWidth(tableHeaders[variant][time])}
        matchType={matchType}
        variant={variant}
        time={time}
        sortTable={sortTable}
        activeColumn={mapToSort[variant][time]}
        // className="mt-20"
      />
    );
  },
);

StandingTable.displayName = "StandingTable";
export { StandingTable };
