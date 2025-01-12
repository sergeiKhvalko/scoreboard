"use client";

import cn from "classnames";
import { memo, useState } from "react";
import styles from "./Table.module.scss";
import { Button } from "../Button";
import Link from "next/link";
import { shortTeamNames } from "@/shared/consts/shortTeamNames";
import {
  MatchTimeProps,
  MatchTypeProps,
  TableVariantsProps,
  TeamProps,
} from "../StandingTable/StandingTable";
import { Games } from "@/types/type";

interface TableProps {
  headers: Array<string>;
  standings: Array<TeamProps>;
  cellWidth: string;
  matchType: MatchTypeProps;
  variant: TableVariantsProps;
  time: MatchTimeProps;
  className?: string;
}
const Table = memo((props: TableProps) => {
  const { headers, standings, cellWidth, matchType, variant, time, className } =
    props;
  const [activeBtn, setActiveBtn] = useState("P");

  const sortTable = (item: string) => {
    standings.sort((a, b) => {
      return b[matchType] && a[matchType]
        ? b[matchType][time][item as keyof Games] -
            a[matchType][time][item as keyof Games]
        : 0;
    });
    setActiveBtn(item);
  };

  return (
    <table className={cn(styles.table, className)}>
      <thead>
        <tr>
          <th>#</th>
          <th>Team</th>
          {headers.map((item: string) => (
            <th
              key={item}
              style={{ width: `${cellWidth}` }}
            >
              <Button
                variant="ghost"
                className={cn({ [styles.activeBtn]: activeBtn === item })}
                onClick={() => sortTable(item)}
              >
                {item}
              </Button>
            </th>
          ))}
          {variant === "overview" && <th style={{ width: "17%" }}>Form</th>}
        </tr>
      </thead>
      <tbody>
        {standings.map((team: TeamProps, i) => (
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
            {Object.entries(team[matchType]![time]).map(([key, value]) => (
              <td
                key={key}
                className={cn({
                  [styles.goalsFor]: key === "GF",
                  [styles.goalsAgainst]: key === "GA",
                })}
                style={{
                  width: `${cellWidth}`,
                }}
              >
                {value}
              </td>
            ))}
            {variant === "overview" && (
              <td style={{ width: "17%" }}>
                <div className={styles.form}>
                  {team.form.result
                    .slice(-5)
                    .split("")
                    .map((f, i) => (
                      <span
                        className={cn(styles.formItem, {
                          [styles.win]: f === "W",
                          [styles.draw]: f === "D",
                          [styles.lose]: f === "L",
                        })}
                        key={i}
                      >
                        {f}
                      </span>
                    ))}
                </div>
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
});

Table.displayName = "Table";
export { Table };
