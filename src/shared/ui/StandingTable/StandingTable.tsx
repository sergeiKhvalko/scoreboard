"use client";

import { Games, League, Matches } from "@/types/type";
import { memo, useCallback } from "react";
import { Table } from "../Table";
import { commandZones } from "@/shared/consts/commandZones";
import { tableHeaders, TableHeadersProps } from "@/shared/consts/tablesHeaders";

export type MatchTypeProps = "summary" | "home" | "away";
export type TableVariantsProps = "overview" | "corners" | "cards" | "totals";
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
    info: Array<string>;
    result: string;
  };
  zone: string;
}
const StandingTable = memo(
  ({ league, matchType, variant, time }: TableProps) => {
    const actualStanding: Array<TeamProps> = [];

    console.log(league);

    league.standings.forEach((item, i) => {
      const team: TeamProps = {
        id: item.id,
        name: item.name,
        form: {
          info: [...item.form.info],
          result: item.form.result,
        },
        zone: league.name ? commandZones[league.name][i + 1] : "",
        [matchType]: {
          [time]: { ...item.matches[matchType][time] },
        },
      };

      actualStanding.push(team);
    });

    const sortTable = useCallback(
      (
        item: string,
        standings: TeamProps[],
        setActiveBtn?: (str: string) => void,
      ) => {
        console.log("sort");

        standings.sort((a: TeamProps, b: TeamProps) => {
          return b[matchType] && a[matchType]
            ? b[matchType][time][item as keyof Games] -
                a[matchType][time][item as keyof Games]
            : 0;
        });
        if (setActiveBtn) {
          setActiveBtn(item);
        }
      },
      [matchType, time],
    );

    sortTable("P", actualStanding);

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
        // className="mt-20"
      />
    );
  },
);

StandingTable.displayName = "StandingTable";
export { StandingTable };
