import { League, Matches } from "@/types/type";
import { memo } from "react";
import { Table } from "../Table";

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

type MatchType = {
  [key in keyof Matches]: Matches[key];
};

export interface TeamProps extends Partial<MatchType> {
  id: number;
  name: string;
  form: {
    info: Array<string>;
    result: string;
  };
}
const StandingTable = memo(
  ({ league, matchType, variant, time }: TableProps) => {
    const actualStanding: Array<TeamProps> = [];
    for (const item of league.standings) {
      const team: TeamProps = {
        id: item.id,
        name: item.name,
        form: {
          info: [...item.form.info],
          result: item.form.result,
        },
        [matchType]: {
          [time]: { ...item.matches[matchType][time] },
        },
      };

      actualStanding.push(team);
    }

    const tableHeaders = {
      overview: {
        match: ["M", "W", "D", "L", "GF", "GA", "GD", "P"],
        first_half: ["M", "W", "D", "L", "GF", "GA", "GD", "P"],
        second_half: ["M", "W", "D", "L", "GF", "GA", "GD", "P"],
      },
      corners: {
        match: ["M", "W", "D", "L", "GF", "GA", "GD", "P"],
        first_half: ["M", "W", "D", "L", "GF", "GA", "GD", "P"],
        second_half: ["M", "W", "D", "L", "GF", "GA", "GD", "P"],
      },
      cards: {
        match: ["M", "W", "D", "L", "GF", "GA", "GD", "P"],
        first_half: ["M", "W", "D", "L", "GF", "GA", "GD", "P"],
        second_half: ["M", "W", "D", "L", "GF", "GA", "GD", "P"],
      },
      totals: {
        match: ["M", "W", "D", "L", "GF", "GA", "GD", "P"],
        first_half: ["M", "W", "D", "L", "GF", "GA", "GD", "P"],
        second_half: ["M", "W", "D", "L", "GF", "GA", "GD", "P"],
      },
    };

    const getCellWidth = (arr: Array<string>) => {
      const freeSpace = variant === "overview" ? 100 - 30 - 17 : 100 - 30;
      return `${freeSpace / arr.length}%`;
    };

    return (
      <Table
        headers={tableHeaders[variant][time]}
        standings={actualStanding}
        cellWidth={getCellWidth(tableHeaders[variant][time])}
        matchType={matchType}
        variant={variant}
        time={time}
        className="mt-20"
      />
    );
  },
);

StandingTable.displayName = "StandingTable";
export { StandingTable };
