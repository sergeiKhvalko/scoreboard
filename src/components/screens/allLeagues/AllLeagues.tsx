import { Breadcrumbs } from "@/shared/ui/Breadcrumbs/Breadcrumbs";
import { useMemo } from "react";
import styles from "./AllLeagues.module.scss";
import { Card } from "@/shared/ui/Card/Card";
import Image from "next/image";
import Link from "next/link";
import cn from "classnames";
import { getCompletedProgress } from "@/shared/util/helpers";

export const AllLeaguesPage = ({ allLeagues }) => {
  const breadcrumbs = useMemo(
    () => [
      {
        title: "Scoreboard",
        disabled: false,
        href: "/",
      },
      {
        title: "Leagues",
        disabled: true,
        href: "/leagues?season=2024",
      },
    ],
    [],
  );

  console.log(allLeagues);

  return (
    <div>
      <Breadcrumbs items={breadcrumbs} />

      <div className={styles.header}>
        <h1 className="text-capitalize mx-4">Football Leagues</h1>
        <span className="text-h6 text-grey-darken-1 mt-2">Info & Stats</span>
      </div>

      {allLeagues.map((league) => (
        <Card
          key={league.id}
          className="mt-20"
        >
          <div className={styles.league}>
            <div className={styles.logo}>
              <Image
                src={league.logo}
                alt={league.name}
                width={90}
                height={90}
              />
            </div>
            <div className={styles.leagueDescr}>
              <Link
                href={`leagues/${league.name.toLowerCase()}?season=${
                  league.season
                }&league=${league.id}`}
                className={styles.linkName}
              >
                {league.name}
              </Link>
              <div className={styles.country}>
                <Image
                  src={league.flag}
                  alt={league.country}
                  width={30}
                  height={30}
                />
                <span>{league.country}</span>
              </div>
            </div>
            <div className={styles.btnAction}>
              <Link
                href={`leagues/${league.name.toLowerCase()}?season=${
                  league.season
                }&league=${league.id}`}
                className={styles.linkBtn}
              >
                <span className={cn("mdi", "mdi-chevron-right")}></span>
              </Link>
            </div>
            <div className={styles.stat}>
              <div>
                <div className={styles.chip}>
                  <h3 className="text-h6 text-sm-h5 text-lg-h4 font-weight-bold text-green-accent-2">
                    {(league["totalGoals"] / league["totalMatches"]).toFixed(2)}
                  </h3>
                </div>

                <p className="text-subtitle-2 text-sm-subtitle-1">
                  Goals/ Match
                </p>
              </div>
              <div>
                <div className={styles.chip}>
                  <h3 className="text-h6 text-sm-h5 text-lg-h4 font-weight-bold text-green-accent-2">
                    {Math.round(
                      (league["totalOver2.5"] / league["totalMatches"]) * 100,
                    )}
                    %
                  </h3>
                </div>

                <p className="text-subtitle-2 text-sm-subtitle-1">Over 2.5</p>
              </div>
            </div>
            <div className={styles.progress}>
              <div className={styles.progressBlock}>
                <div
                  className={styles.progressLine}
                  style={{
                    width: `${getCompletedProgress(
                      league.totalMatches,
                      league["matchweeksInfo"][1]["count"] * 2,
                    )}%`,
                  }}
                ></div>
              </div>
              <div className={styles.progressInfo}>
                <span>
                  {getCompletedProgress(
                    league.totalMatches,
                    league["matchweeksInfo"][1]["count"] * 2,
                  )}
                  %
                </span>
                Played
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};
