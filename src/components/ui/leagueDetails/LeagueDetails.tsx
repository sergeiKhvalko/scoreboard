"use client";

import { League } from "@/types/type";
import styles from "./LeagueDetails.module.scss";
import Link from "next/link";
import Image from "next/image";
import cn from "classnames";
import { usePathname } from "next/navigation";
import { getCompletedProgress } from "@/shared/util/helpers";

export const LeagueDetails = ({ league }: { league: League }) => {
  const pathname = usePathname().split("/");
  const leagueName = league.name.toLocaleLowerCase().replace(" ", "-");
  const currenTab = pathname[pathname.length - 1];

  const totalMatches = league.allMatches.total;
  const totalTeams = league.standings.length;

  return (
    <div className={styles.league}>
      <div className={styles.leagueInfo}>
        <Image
          width={155}
          height={155}
          src={league.logo}
          alt={league.name}
        />
        <div className={styles.leagueDetails}>
          <div className={styles.headlines}>
            <div>Nation</div>
            <div>Teams</div>
            <div className="">Season</div>
            <div>Matches</div>
            <div style={{ marginTop: "5px" }}>Progress</div>
          </div>
          <div className={styles.headlines}>
            <div className="bold">{league.country}</div>
            <div className="bold">{league.standings.length}</div>
            <div>
              <select></select>
            </div>
            <div>
              <span className="bold">
                {league.allMatches.total}/
                {(league.standings.length - 1) *
                  2 *
                  (league.standings.length / 2)}
              </span>
              &nbsp;Played
            </div>
            <div>
              <div className={styles.progress}>
                <div
                  className={styles.progressLine}
                  style={{
                    width: `${getCompletedProgress(totalMatches, totalTeams)}%`,
                  }}
                ></div>
              </div>
              <div>
                <span className="bold">
                  {getCompletedProgress(totalMatches, totalTeams)}%
                </span>
                &nbsp;Completed
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.actions}>
        <Link
          className={cn({
            [styles.active]:
              currenTab !== "fixtures" && currenTab !== "form-table",
          })}
          href={`/leagues/${leagueName}?season=${league.season}&league=${league.id}`}
        >
          Overviev
        </Link>
        <Link
          className={cn({ [styles.active]: currenTab === "fixtures" })}
          href={`/leagues/${leagueName}/fixtures?league=${league.id}`}
        >
          Fixtures
        </Link>
        <Link
          className={cn({
            [styles.active]:
              currenTab === "form-table" || currenTab === "corner-stats",
          })}
          href={`/leagues/${leagueName}/form-table?season=${league.season}&league=${league.id}`}
        >
          Detailed Stats
        </Link>
      </div>
    </div>
  );
};
