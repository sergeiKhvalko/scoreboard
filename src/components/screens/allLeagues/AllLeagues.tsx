"use client";

import { Breadcrumbs } from "@/shared/ui/Breadcrumbs/Breadcrumbs";
import { Fragment, useMemo } from "react";
import styles from "./AllLeagues.module.scss";
import { Card } from "@/shared/ui/Card/Card";
import Image from "next/image";
import Link from "next/link";
import cn from "classnames";
import {
  getCompletedProgress,
  getInfoForAllMatchweeks,
} from "@/shared/utils/helpers";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { AnimatePresence, motion, easeOut } from "framer-motion";
import { LeagueInfo } from "./AllLeagues.props";

export const AllLeaguesPage = ({
  allLeagues,
}: {
  allLeagues: LeagueInfo[];
}) => {
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
                href={`leagues/${league.name
                  .toLowerCase()
                  .replace(" ", "-")}?season=${league.season}&league=${
                  league.id
                }`}
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
                href={`leagues/${league.name
                  .toLowerCase()
                  .replace(" ", "-")}?season=${league.season}&league=${
                  league.id
                }`}
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

          <Disclosure
            as="div"
            className={styles.disclosure}
          >
            {({ open }) => (
              <>
                <DisclosureButton className={styles.disclosureBtn}>
                  <h3>More Info</h3>
                  <span className={cn("mdi", "mdi-chevron-right")}></span>
                </DisclosureButton>
                <div className={styles.panelWrap}>
                  <AnimatePresence>
                    {open && (
                      <DisclosurePanel
                        static
                        as={Fragment}
                      >
                        <motion.div
                          initial={{ opacity: 0, y: -24 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -24 }}
                          transition={{ duration: 0.2, ease: easeOut }}
                          className={styles.panelDescr}
                        >
                          <div>
                            Key Stats for
                            <p className={cn("mt-10", "mb-10")}>
                              the left column shows how many times such an event
                              occurred in one round
                            </p>
                            <p>
                              the right column shows how many such tours there
                              were during the entire season
                            </p>
                          </div>

                          {Object.entries(
                            getInfoForAllMatchweeks(league.matchweeksInfo),
                          ).map(([key, value]) => (
                            <Disclosure
                              key={key}
                              as="div"
                              className={styles.disclosure}
                            >
                              {({ open }) => (
                                <>
                                  <DisclosureButton
                                    className={styles.disclosureBtn}
                                  >
                                    <h3>{key}</h3>
                                    <span
                                      className={cn("mdi", "mdi-chevron-right")}
                                    ></span>
                                  </DisclosureButton>
                                  <div className={styles.panelWrap}>
                                    <AnimatePresence>
                                      {open && (
                                        <DisclosurePanel
                                          static
                                          as={Fragment}
                                        >
                                          <motion.div
                                            initial={{ opacity: 0, y: -24 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -24 }}
                                            transition={{
                                              duration: 0.2,
                                              ease: easeOut,
                                            }}
                                            className={styles.panelDescr}
                                          >
                                            {Object.entries(value).map(
                                              (
                                                [
                                                  numberOfTimes,
                                                  numberOfMatchweeks,
                                                ],
                                                i,
                                              ) => (
                                                <div
                                                  key={i}
                                                  className={cn(
                                                    styles.panelItem,
                                                    {
                                                      "border-bottom":
                                                        i !==
                                                        Object.keys(value)
                                                          .length -
                                                          1,
                                                    },
                                                  )}
                                                >
                                                  <div>
                                                    {`${
                                                      Number(numberOfTimes) ===
                                                      0
                                                        ? "Not a single match in matchweek"
                                                        : Number(
                                                            numberOfTimes,
                                                          ) < 4
                                                        ? `Only ${numberOfTimes} ${
                                                            Number(
                                                              numberOfTimes,
                                                            ) === 1
                                                              ? "match"
                                                              : "matches"
                                                          } in matchweek`
                                                        : `${numberOfTimes} matches in matchweek`
                                                    }

                                                    `}
                                                  </div>
                                                  <div>
                                                    {`${numberOfMatchweeks} ${
                                                      numberOfMatchweeks > 1
                                                        ? "Matchweeks"
                                                        : "Matchweek"
                                                    } all season`}
                                                  </div>
                                                </div>
                                              ),
                                            )}
                                          </motion.div>
                                        </DisclosurePanel>
                                      )}
                                    </AnimatePresence>
                                  </div>
                                </>
                              )}
                            </Disclosure>
                          ))}
                        </motion.div>
                      </DisclosurePanel>
                    )}
                  </AnimatePresence>
                </div>
              </>
            )}
          </Disclosure>
        </Card>
      ))}
    </div>
  );
};
