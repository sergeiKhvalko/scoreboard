"use client";

import { League } from "@/types/type";
import cn from "classnames";
import { memo, useState } from "react";
import styles from "./Table.module.scss";
import { Button } from "../Button";
import Link from "next/link";
import { shortTeamNames } from "@/shared/consts/shortTeamNames";

interface TableProps {
  league: League;
  matches: "summary" | "home" | "away";
  time: "match" | "first_half" | "second_half";
  variant: "overview" | "corners" | "cards" | "totals";
  className?: string;
}
const Table = memo(
  ({ league, matches, variant, time, className }: TableProps) => {
    const [activeBtn, setActiveBtn] = useState("P");

    console.log(league);

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
      <table className={cn(styles.table, className)}>
        <thead>
          <tr>
            <th>#</th>
            <th>Team</th>
            {tableHeaders[variant][time].map((item, i, arr) => (
              <th
                key={i + item}
                style={{ width: getCellWidth(arr) }}
              >
                <Button
                  variant="ghost"
                  className={cn({ [styles.activeBtn]: activeBtn === item })}
                  onClick={() => setActiveBtn(item)}
                >
                  {item}
                </Button>
              </th>
            ))}
            {variant === "overview" && <th style={{ width: "17%" }}>Form</th>}
          </tr>
        </thead>
        <tbody>
          {league.standings.map((team, i) => (
            <tr key={team.name}>
              <td>{i + 1}</td>
              <td>
                <Link
                  className={styles.teamName}
                  href={`/teams/${team.name}`}
                >
                  {shortTeamNames[team.name]}
                </Link>
              </td>
              {Object.entries(team.matches[matches][time]).map(
                ([key, value]) => (
                  <td
                    key={key}
                    style={{
                      width: getCellWidth(
                        Object.keys(team.matches[matches][time]),
                      ),
                    }}
                  >
                    {value}
                  </td>
                ),
              )}
              {variant === "overview" && (
                <td style={{ width: "17%" }}>
                  {team.form.result
                    .slice(-5)
                    .split("")
                    .map((f, i) => (
                      <span
                        className={cn(styles.form, {
                          [styles.win]: f === "W",
                          [styles.draw]: f === "D",
                          [styles.lose]: f === "L",
                        })}
                        key={i}
                      >
                        {f}
                      </span>
                    ))}
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    );
  },
);

Table.displayName = "Table";
export { Table };
