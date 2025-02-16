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
import { TableHeadersProps } from "@/shared/consts/tablesHeaders";

interface TableProps {
  headers: TableHeadersProps[];
  standings: Array<TeamProps>;
  cellWidth: string;
  matchType: MatchTypeProps;
  variant: TableVariantsProps;
  time: MatchTimeProps;
  sortTable: (item: string, standings: TeamProps[]) => void;
  activeColumn: string;
  className?: string;
}
const Table = memo((props: TableProps) => {
  const {
    headers,
    standings,
    cellWidth,
    matchType,
    variant,
    time,
    sortTable,
    activeColumn,
    className,
  } = props;

  const [activeBtn, setActiveBtn] = useState(activeColumn);

  return (
    <table className={cn(styles.table, className)}>
      <thead>
        <tr>
          <th>#</th>
          <th>Team</th>
          {headers.map((item: TableHeadersProps) => (
            <th
              key={item.btn}
              style={{ width: `${cellWidth}` }}
            >
              <div className={styles.btnWrap}>
                <Button
                  variant="ghost"
                  className={cn({
                    [styles.activeBtn]: activeBtn === item.sortBtn,
                  })}
                  onClick={() => {
                    sortTable(item.sortBtn, standings);
                    setActiveBtn(item.sortBtn);
                  }}
                >
                  {item.btn}
                </Button>
                {/* <div className={styles.btnPopup}>{item.descr}</div> */}
              </div>
            </th>
          ))}
          {variant === "overview" && <th style={{ width: "17%" }}>Form</th>}
        </tr>
      </thead>
      <tbody>
        {standings.map((team: TeamProps, i) => (
          <tr key={team.name}>
            <td
              className={cn(styles.position, {
                [styles.posOdd]: i % 2,
              })}
            >
              <div
                className={cn(styles.zone, {
                  [styles[team.zone]]:
                    variant === "overview" && matchType === "summary",
                })}
              >
                {i + 1}
              </div>
            </td>
            <td
              className={cn(styles.position, {
                [styles.posOdd]: i % 2,
              })}
            >
              <Link
                className={styles.teamName}
                href={`/teams/${team.id}`}
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
                    ?.slice(-5)
                    .split("")
                    .map((f, i) => (
                      <div
                        key={i}
                        className={cn(styles.formItem, {
                          [styles.win]: f === "W",
                          [styles.draw]: f === "D",
                          [styles.lose]: f === "L",
                        })}
                      >
                        <span>{f}</span>
                        <div className={styles.formPopup}>
                          {team.form.info &&
                            `${
                              shortTeamNames[team.form.info.slice(-5)[i].team1]
                            } ${team.form.info.slice(-5)[i].score} ${
                              shortTeamNames[team.form.info.slice(-5)[i].team2]
                            }`}
                        </div>
                      </div>
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
