import { LeagueDetails } from "@/components/ui/leagueDetails";
import { LeagueTitle } from "@/components/ui/leagueTitle";
import { Breadcrumbs } from "@/shared/ui/Breadcrumbs/Breadcrumbs";
import { useCallback, useMemo } from "react";
import { LeagueProps, TableMatchesProps } from "../leaguePage/LeaguePage";
// import styles from "./DetailedStatsPage.module.scss";
import comCls from "../common.module.scss";
import { Tabs } from "@/shared/ui/Tabs";
import { StandingTable } from "@/shared/ui/StandingTable";
import { League } from "@/types/type";
import {
  MatchTypeProps,
  TableVariantsProps,
} from "@/shared/ui/StandingTable/StandingTable";
import { TableHeader } from "@/shared/ui/TableHeader/TableHeader";
import { HStack } from "@/shared/ui/Stack";
import PieComponent from "@/shared/ui/Pie/Pie";
import {
  getBgForOverviewPie,
  getBgForStatsPie,
  getBTTSPercentage,
  getProductivePercentage,
  getTotalCornersPercentage,
  getTotalPercentage,
  getTotalYellowPercentage,
} from "@/shared/utils";
import styles from "./DetailedStatsPage.module.scss";

export const DetailedStatsPage = ({
  league,
  leagueId,
  season,
}: LeagueProps) => {
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
          .split(" ")
          .map((s) => s.toLowerCase())
          .join("-")}?season=${season}&league=${leagueId}`,
      },
      {
        title: "Detailed Stats",
        disabled: true,
        href: `/leagues/${league.name
          .split(" ")
          .map((s) => s.toLowerCase())
          .join("-")}/detailed-stats?season=${season}&league=${leagueId}`,
      },
    ],
    [league, season, leagueId],
  );

  const generateTables = useCallback(
    (
      league: League,
      matchType: MatchTypeProps,
      variant: TableVariantsProps,
      timeArr: ["match", "first_half", "second_half"],
    ) => {
      const res: TableMatchesProps[] = [];
      const mapToTitle = {
        match: "All match",
        first_half: "1st Half",
        second_half: "2nd Half",
      };

      for (let i = 0; i < timeArr.length; i++) {
        const half = timeArr[i];
        if (
          (variant === "productive_half" ||
            variant === "individ_productive_half") &&
          (half === "first_half" || half === "second_half")
        ) {
          continue;
        }

        res.push({
          title: mapToTitle[half],
          content: (
            <StandingTable
              league={league}
              matchType={matchType}
              variant={variant}
              time={half}
            />
          ),
        });
      }

      return res;
    },
    [],
  );

  const labelsCornersTotal = [
    "Total Under 9.5",
    "Total Over 9.5",
    "Total Under 10.5",
    "Total Over 10.5",
    "Total Under 11.5",
    "Total Over 11.5",
  ];
  const datasetsCornersTotal = [
    {
      label: "%",
      data: getTotalCornersPercentage(league),
      backgroundColor: getBgForStatsPie(0.5),
      hoverBackgroundColor: getBgForStatsPie(0.6),
      borderColor: getBgForStatsPie(1),
      borderWidth: 1,
    },
  ];
  const labelsYellowTotal = [
    "Total Under 3.5",
    "Total Over 3.5",
    "Total Under 4.5",
    "Total Over 4.5",
    "Total Under 5.5",
    "Total Over 5.5",
  ];
  const datasetsYellowTotal = [
    {
      label: "%",
      data: getTotalYellowPercentage(league),
      backgroundColor: getBgForStatsPie(0.5),
      hoverBackgroundColor: getBgForStatsPie(0.6),
      borderColor: getBgForStatsPie(1),
      borderWidth: 1,
    },
  ];
  const labelsTotal = [
    "Total Under 2.5",
    "Total Over 2.5",
    "Total Under 3.5",
    "Total Over 3.5",
    "Total Under 4.5",
    "Total Over 4.5",
  ];
  const datasetsTotal = [
    {
      label: "%",
      data: getTotalPercentage(league),
      backgroundColor: getBgForStatsPie(0.5),
      hoverBackgroundColor: getBgForStatsPie(0.6),
      borderColor: getBgForStatsPie(1),
      borderWidth: 1,
    },
  ];
  const labelsBTTS = ["Both Score NO", "Both Score YES"];
  const datasetsBTTS = [
    {
      label: "%",
      data: getBTTSPercentage(league),
      backgroundColor: getBgForStatsPie(0.5),
      hoverBackgroundColor: getBgForStatsPie(0.6),
      borderColor: getBgForStatsPie(1),
      borderWidth: 1,
    },
  ];
  const labelsProductive = [
    "Second Over First",
    "First Equal Second",
    "First Over Second",
  ];
  const datasetsProductive = [
    {
      label: "%",
      data: getProductivePercentage(league),
      backgroundColor: getBgForOverviewPie(0.5),
      hoverBackgroundColor: getBgForOverviewPie(0.6),
      borderColor: getBgForOverviewPie(1),
      borderWidth: 1,
    },
  ];

  const allStats = useMemo(
    () => [
      {
        title: "Corners Total",
        image: "/corners.png",
        content: (
          <>
            <HStack
              wrap="wrap"
              align="center"
              justify="center"
              gap="24"
              className="mb-20"
            >
              <PieComponent
                labels={labelsCornersTotal}
                datasets={datasetsCornersTotal}
              />
              <div>
                <p className="mb-10">
                  Click on the buttons to exclude from display
                </p>
                <span className={styles.under}></span> <s>Total Under 11.5</s>{" "}
                <span className={styles.over}></span> <s>Total Over 11.5</s>
              </div>
            </HStack>
            <Tabs
              items={generateTables(league, "summary", "corners", [
                "match",
                "first_half",
                "second_half",
              ])}
              overflow="auto"
              minWidth={500}
            />
            <div>Description for table...</div>

            <TableHeader
              league={league}
              season={season}
              title="Home"
              descr="Table of
              total corners"
            />

            <Tabs
              items={generateTables(league, "home", "corners", [
                "match",
                "first_half",
                "second_half",
              ])}
              overflow="auto"
              minWidth={500}
            />

            <TableHeader
              league={league}
              season={season}
              title="Away"
              descr="Table of
              total corners"
            />

            <Tabs
              items={generateTables(league, "away", "corners", [
                "match",
                "first_half",
                "second_half",
              ])}
              overflow="auto"
              minWidth={500}
            />
          </>
        ),
      },
      {
        title: "Corners Individual",
        image: "/individ_corners.png",
        content: (
          <>
            <Tabs
              items={generateTables(league, "summary", "individ_corners", [
                "match",
                "first_half",
                "second_half",
              ])}
              overflow="auto"
              minWidth={500}
            />
            <div>Description for table...</div>

            <TableHeader
              league={league}
              season={season}
              title="Home"
              descr="Table of
              individual corner teams"
            />

            <Tabs
              items={generateTables(league, "home", "individ_corners", [
                "match",
                "first_half",
                "second_half",
              ])}
              overflow="auto"
              minWidth={500}
            />

            <TableHeader
              league={league}
              season={season}
              title="Away"
              descr="Table of
              individual corner teams"
            />

            <Tabs
              items={generateTables(league, "away", "individ_corners", [
                "match",
                "first_half",
                "second_half",
              ])}
              overflow="auto"
              minWidth={500}
            />
          </>
        ),
      },
      {
        title: "Yellow Cards",
        image: "/yellow_cards.png",
        content: (
          <>
            <HStack
              wrap="wrap"
              align="center"
              justify="center"
              gap="24"
              className="mb-20"
            >
              <PieComponent
                labels={labelsYellowTotal}
                datasets={datasetsYellowTotal}
              />
              <div>
                <p className="mb-10">
                  Click on the buttons to exclude from display
                </p>
                <span className={styles.under}></span> <s>Total Under 5.5</s>{" "}
                <span className={styles.over}></span> <s>Total Over 5.5</s>
              </div>
            </HStack>
            <Tabs
              items={generateTables(league, "summary", "yellow_cards", [
                "match",
                "first_half",
                "second_half",
              ])}
              overflow="auto"
              minWidth={500}
            />
            <div>Description for table...</div>

            <TableHeader
              league={league}
              season={season}
              title="Home"
              descr="Table of
              yellow cards total"
            />

            <Tabs
              items={generateTables(league, "home", "yellow_cards", [
                "match",
                "first_half",
                "second_half",
              ])}
              overflow="auto"
              minWidth={500}
            />

            <TableHeader
              league={league}
              season={season}
              title="Away"
              descr="Table of
              yellow cards total"
            />

            <Tabs
              items={generateTables(league, "away", "yellow_cards", [
                "match",
                "first_half",
                "second_half",
              ])}
              overflow="auto"
              minWidth={500}
            />
          </>
        ),
      },
      {
        title: "Yellow Cards Individual",
        image: "/individ_yellow_cards.png",
        content: (
          <>
            <Tabs
              items={generateTables(league, "summary", "individ_yellow_cards", [
                "match",
                "first_half",
                "second_half",
              ])}
              overflow="auto"
              minWidth={500}
            />
            <div>Description for table...</div>

            <TableHeader
              league={league}
              season={season}
              title="Home"
              descr="Table of
              individual yellow cards"
            />

            <Tabs
              items={generateTables(league, "home", "individ_yellow_cards", [
                "match",
                "first_half",
                "second_half",
              ])}
              overflow="auto"
              minWidth={500}
            />

            <TableHeader
              league={league}
              season={season}
              title="Away"
              descr="Table of
              individual yellow cards"
            />

            <Tabs
              items={generateTables(league, "away", "individ_yellow_cards", [
                "match",
                "first_half",
                "second_half",
              ])}
              overflow="auto"
              minWidth={500}
            />
          </>
        ),
      },
      {
        title: "Total Goals",
        image: "/total.png",
        content: (
          <>
            <HStack
              wrap="wrap"
              align="center"
              justify="center"
              gap="24"
              className="mb-20"
            >
              <PieComponent
                labels={labelsTotal}
                datasets={datasetsTotal}
              />
              <div>
                <p className="mb-10">
                  Click on the buttons to exclude from display
                </p>
                <span className={styles.under}></span> <s>Total Under 4.5</s>{" "}
                <span className={styles.over}></span> <s>Total Over 4.5</s>
              </div>
            </HStack>
            <Tabs
              items={generateTables(league, "summary", "total", [
                "match",
                "first_half",
                "second_half",
              ])}
              overflow="auto"
              minWidth={400}
            />
            <div>Description for table...</div>

            <TableHeader
              league={league}
              season={season}
              title="Home"
              descr="Table of
              total goals"
            />

            <Tabs
              items={generateTables(league, "home", "total", [
                "match",
                "first_half",
                "second_half",
              ])}
              overflow="auto"
              minWidth={400}
            />

            <TableHeader
              league={league}
              season={season}
              title="Away"
              descr="Table of
              total goals"
            />

            <Tabs
              items={generateTables(league, "away", "total", [
                "match",
                "first_half",
                "second_half",
              ])}
              overflow="auto"
              minWidth={400}
            />
          </>
        ),
      },
      {
        title: "Individual Goal Totals",
        image: "/individ_total.png",
        content: (
          <>
            <Tabs
              items={generateTables(league, "summary", "individ_total", [
                "match",
                "first_half",
                "second_half",
              ])}
              overflow="auto"
              minWidth={350}
            />
            <div>Description for table...</div>

            <TableHeader
              league={league}
              season={season}
              title="Home"
              descr="Table of
              both teams to score"
            />

            <Tabs
              items={generateTables(league, "home", "individ_total", [
                "match",
                "first_half",
                "second_half",
              ])}
              overflow="auto"
              minWidth={350}
            />

            <TableHeader
              league={league}
              season={season}
              title="Away"
              descr="Table of
              both teams to score"
            />

            <Tabs
              items={generateTables(league, "away", "individ_total", [
                "match",
                "first_half",
                "second_half",
              ])}
              overflow="auto"
              minWidth={350}
            />
          </>
        ),
      },
      {
        title: "BTTS",
        image: "/both_score.png",
        content: (
          <>
            <HStack
              wrap="wrap"
              align="center"
              justify="center"
              gap="24"
              className="mb-20"
            >
              <PieComponent
                labels={labelsBTTS}
                datasets={datasetsBTTS}
              />
            </HStack>
            <Tabs
              items={generateTables(league, "summary", "both_score", [
                "match",
                "first_half",
                "second_half",
              ])}
              overflow="auto"
              minWidth={350}
            />
            <div>Description for table...</div>

            <TableHeader
              league={league}
              season={season}
              title="Home"
              descr="Table of
              both teams to score"
            />

            <Tabs
              items={generateTables(league, "home", "both_score", [
                "match",
                "first_half",
                "second_half",
              ])}
              overflow="auto"
              minWidth={350}
            />

            <TableHeader
              league={league}
              season={season}
              title="Away"
              descr="Table of
              both teams to score"
            />

            <Tabs
              items={generateTables(league, "away", "both_score", [
                "match",
                "first_half",
                "second_half",
              ])}
              overflow="auto"
              minWidth={350}
            />
          </>
        ),
      },
      {
        title: "Productive Half",
        image: "/productive_half.png",
        content: (
          <>
            <HStack
              wrap="wrap"
              align="center"
              justify="center"
              gap="24"
              className="mb-20"
            >
              <PieComponent
                labels={labelsProductive}
                datasets={datasetsProductive}
              />
            </HStack>
            <Tabs
              items={generateTables(league, "summary", "productive_half", [
                "match",
                "first_half",
                "second_half",
              ])}
              overflow="auto"
              minWidth={300}
            />
            <div>Description for table...</div>

            <TableHeader
              league={league}
              season={season}
              title="Home"
              descr="Table Of
              Both Teams To Score"
            />

            <Tabs
              items={generateTables(league, "home", "productive_half", [
                "match",
                "first_half",
                "second_half",
              ])}
              overflow="auto"
              minWidth={300}
            />

            <TableHeader
              league={league}
              season={season}
              title="Away"
              descr="Table Of
              Both Teams To Score"
            />

            <Tabs
              items={generateTables(league, "away", "productive_half", [
                "match",
                "first_half",
                "second_half",
              ])}
              overflow="auto"
              minWidth={300}
            />
          </>
        ),
      },
      {
        title: "Individual Productive Half",
        image: "/individ_productive_half.png",
        content: (
          <>
            <Tabs
              items={generateTables(
                league,
                "summary",
                "individ_productive_half",
                ["match", "first_half", "second_half"],
              )}
              overflow="auto"
              minWidth={300}
            />
            <div>Description for table...</div>

            <TableHeader
              league={league}
              season={season}
              title="Home"
              descr="Table of
              Individual Productive Half"
            />

            <Tabs
              items={generateTables(league, "home", "individ_productive_half", [
                "match",
                "first_half",
                "second_half",
              ])}
              overflow="auto"
              minWidth={300}
            />

            <TableHeader
              league={league}
              season={season}
              title="Away"
              descr="Table of
              Individual Productive Half"
            />

            <Tabs
              items={generateTables(league, "away", "individ_productive_half", [
                "match",
                "first_half",
                "second_half",
              ])}
              overflow="auto"
              minWidth={300}
            />
          </>
        ),
      },
    ],
    [league, season, generateTables],
  );

  return (
    <div>
      <Breadcrumbs items={breadcrumbs} />

      <LeagueTitle
        flag={league.flag}
        title={league.name}
        descr="Detailed Stats"
      />

      <div className={comCls.wrapper}>
        <LeagueDetails league={league} />
        <div className={comCls.fixtures}>fixtures</div>
      </div>

      <TableHeader
        league={league}
        season={season}
        title="Detailed Statistics Tables"
      />

      <Tabs
        items={allStats}
        className="mt-20"
      />
    </div>
  );
};
