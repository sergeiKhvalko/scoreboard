import { League } from "@/types/type";

/* eslint-disable @typescript-eslint/no-explicit-any */
export function getCompletedProgress(totalMatches: number, totalTeams: number) {
  return Math.round(
    (totalMatches / ((totalTeams - 1) * 2 * (totalTeams / 2))) * 100,
  );
}

export function getInfoForAllMatchweeks(matchweeks: any): {
  [key: string]: Record<string, number>;
} {
  const res: { [key: string]: Record<string, number> } = {};

  for (const key in matchweeks) {
    if (!res["home team win"]) res["home team win"] = {};
    if (!res["home team win"][matchweeks[key]["home team win"]])
      res["home team win"][matchweeks[key]["home team win"]] = 0;
    res["home team win"][matchweeks[key]["home team win"]] += 1;

    if (!res["away team win"]) res["away team win"] = {};
    if (!res["away team win"][matchweeks[key]["away team win"]])
      res["away team win"][matchweeks[key]["away team win"]] = 0;
    res["away team win"][matchweeks[key]["away team win"]] += 1;

    if (!res["draw"]) res["draw"] = {};
    if (!res["draw"][matchweeks[key]["draw"]])
      res["draw"][matchweeks[key]["draw"]] = 0;
    res["draw"][matchweeks[key]["draw"]] += 1;

    if (!res["favorite win"]) res["favorite win"] = {};
    if (!res["favorite win"][matchweeks[key]["favorite win"]])
      res["favorite win"][matchweeks[key]["favorite win"]] = 0;
    res["favorite win"][matchweeks[key]["favorite win"]] += 1;

    if (!res["favorite lost"]) res["favorite lost"] = {};
    if (!res["favorite lost"][matchweeks[key]["favorite lost"]])
      res["favorite lost"][matchweeks[key]["favorite lost"]] = 0;
    res["favorite lost"][matchweeks[key]["favorite lost"]] += 1;

    if (!res["both score yes"]) res["both score yes"] = {};
    if (!res["both score yes"][matchweeks[key]["both score yes"]])
      res["both score yes"][matchweeks[key]["both score yes"]] = 0;
    res["both score yes"][matchweeks[key]["both score yes"]] += 1;

    if (!res["both score no"]) res["both score no"] = {};
    if (!res["both score no"][matchweeks[key]["both score no"]])
      res["both score no"][matchweeks[key]["both score no"]] = 0;
    res["both score no"][matchweeks[key]["both score no"]] += 1;

    if (!res["total over 2.5"]) res["total over 2.5"] = {};
    if (!res["total over 2.5"][matchweeks[key]["total over 2.5"]])
      res["total over 2.5"][matchweeks[key]["total over 2.5"]] = 0;
    res["total over 2.5"][matchweeks[key]["total over 2.5"]] += 1;

    if (!res["total over 3.5"]) res["total over 3.5"] = {};
    if (!res["total over 3.5"][matchweeks[key]["total over 3.5"]])
      res["total over 3.5"][matchweeks[key]["total over 3.5"]] = 0;
    res["total over 3.5"][matchweeks[key]["total over 3.5"]] += 1;

    if (!res["total over 4.5"]) res["total over 4.5"] = {};
    if (!res["total over 4.5"][matchweeks[key]["total over 4.5"]])
      res["total over 4.5"][matchweeks[key]["total over 4.5"]] = 0;
    res["total over 4.5"][matchweeks[key]["total over 4.5"]] += 1;

    if (!res["total under 1.5"]) res["total under 1.5"] = {};
    if (!res["total under 1.5"][matchweeks[key]["total under 1.5"]])
      res["total under 1.5"][matchweeks[key]["total under 1.5"]] = 0;
    res["total under 1.5"][matchweeks[key]["total under 1.5"]] += 1;

    if (!res["total under 2.5"]) res["total under 2.5"] = {};
    if (!res["total under 2.5"][matchweeks[key]["total under 2.5"]])
      res["total under 2.5"][matchweeks[key]["total under 2.5"]] = 0;
    res["total under 2.5"][matchweeks[key]["total under 2.5"]] += 1;

    if (!res["home team corners win"]) res["home team corners win"] = {};
    if (!res["home team corners win"][matchweeks[key]["home team corners win"]])
      res["home team corners win"][
        matchweeks[key]["home team corners win"]
      ] = 0;
    res["home team corners win"][matchweeks[key]["home team corners win"]] += 1;

    if (!res["away team corners win"]) res["away team corners win"] = {};
    if (!res["away team corners win"][matchweeks[key]["away team corners win"]])
      res["away team corners win"][
        matchweeks[key]["away team corners win"]
      ] = 0;
    res["away team corners win"][matchweeks[key]["away team corners win"]] += 1;

    if (!res["corners over 9.5"]) res["corners over 9.5"] = {};
    if (!res["corners over 9.5"][matchweeks[key]["corners over 9.5"]])
      res["corners over 9.5"][matchweeks[key]["corners over 9.5"]] = 0;
    res["corners over 9.5"][matchweeks[key]["corners over 9.5"]] += 1;

    if (!res["corners over 10.5"]) res["corners over 10.5"] = {};
    if (!res["corners over 10.5"][matchweeks[key]["corners over 10.5"]])
      res["corners over 10.5"][matchweeks[key]["corners over 10.5"]] = 0;
    res["corners over 10.5"][matchweeks[key]["corners over 10.5"]] += 1;

    if (!res["corners over 11.5"]) res["corners over 11.5"] = {};
    if (!res["corners over 11.5"][matchweeks[key]["corners over 11.5"]])
      res["corners over 11.5"][matchweeks[key]["corners over 11.5"]] = 0;
    res["corners over 11.5"][matchweeks[key]["corners over 11.5"]] += 1;

    if (!res["corners over 12.5"]) res["corners over 12.5"] = {};
    if (!res["corners over 12.5"][matchweeks[key]["corners over 12.5"]])
      res["corners over 12.5"][matchweeks[key]["corners over 12.5"]] = 0;
    res["corners over 12.5"][matchweeks[key]["corners over 12.5"]] += 1;

    if (!res["corners over 13.5"]) res["corners over 13.5"] = {};
    if (!res["corners over 13.5"][matchweeks[key]["corners over 13.5"]])
      res["corners over 13.5"][matchweeks[key]["corners over 13.5"]] = 0;
    res["corners over 13.5"][matchweeks[key]["corners over 13.5"]] += 1;

    if (!res["corners under 8.5"]) res["corners under 8.5"] = {};
    if (!res["corners under 8.5"][matchweeks[key]["corners under 8.5"]])
      res["corners under 8.5"][matchweeks[key]["corners under 8.5"]] = 0;
    res["corners under 8.5"][matchweeks[key]["corners under 8.5"]] += 1;

    if (!res["corners under 9.5"]) res["corners under 9.5"] = {};
    if (!res["corners under 9.5"][matchweeks[key]["corners under 9.5"]])
      res["corners under 9.5"][matchweeks[key]["corners under 9.5"]] = 0;
    res["corners under 9.5"][matchweeks[key]["corners under 9.5"]] += 1;

    if (!res["home team yellow cards win"])
      res["home team yellow cards win"] = {};
    if (
      !res["home team yellow cards win"][
        matchweeks[key]["home team yellow cards win"]
      ]
    )
      res["home team yellow cards win"][
        matchweeks[key]["home team yellow cards win"]
      ] = 0;
    res["home team yellow cards win"][
      matchweeks[key]["home team yellow cards win"]
    ] += 1;

    if (!res["away team yellow cards win"])
      res["away team yellow cards win"] = {};
    if (
      !res["away team yellow cards win"][
        matchweeks[key]["away team yellow cards win"]
      ]
    )
      res["away team yellow cards win"][
        matchweeks[key]["away team yellow cards win"]
      ] = 0;
    res["away team yellow cards win"][
      matchweeks[key]["away team yellow cards win"]
    ] += 1;

    if (!res["yellow cards over 3.5"]) res["yellow cards over 3.5"] = {};
    if (!res["yellow cards over 3.5"][matchweeks[key]["yellow cards over 3.5"]])
      res["yellow cards over 3.5"][
        matchweeks[key]["yellow cards over 3.5"]
      ] = 0;
    res["yellow cards over 3.5"][matchweeks[key]["yellow cards over 3.5"]] += 1;

    if (!res["yellow cards over 4.5"]) res["yellow cards over 4.5"] = {};
    if (!res["yellow cards over 4.5"][matchweeks[key]["yellow cards over 4.5"]])
      res["yellow cards over 4.5"][
        matchweeks[key]["yellow cards over 4.5"]
      ] = 0;
    res["yellow cards over 4.5"][matchweeks[key]["yellow cards over 4.5"]] += 1;

    if (!res["yellow cards over 5.5"]) res["yellow cards over 5.5"] = {};
    if (!res["yellow cards over 5.5"][matchweeks[key]["yellow cards over 5.5"]])
      res["yellow cards over 5.5"][
        matchweeks[key]["yellow cards over 5.5"]
      ] = 0;
    res["yellow cards over 5.5"][matchweeks[key]["yellow cards over 5.5"]] += 1;

    if (!res["yellow cards over 6.5"]) res["yellow cards over 6.5"] = {};
    if (!res["yellow cards over 6.5"][matchweeks[key]["yellow cards over 6.5"]])
      res["yellow cards over 6.5"][
        matchweeks[key]["yellow cards over 6.5"]
      ] = 0;
    res["yellow cards over 6.5"][matchweeks[key]["yellow cards over 6.5"]] += 1;

    if (!res["yellow cards over 7.5"]) res["yellow cards over 7.5"] = {};
    if (!res["yellow cards over 7.5"][matchweeks[key]["yellow cards over 7.5"]])
      res["yellow cards over 7.5"][
        matchweeks[key]["yellow cards over 7.5"]
      ] = 0;
    res["yellow cards over 7.5"][matchweeks[key]["yellow cards over 7.5"]] += 1;

    if (!res["yellow cards under 2.5"]) res["yellow cards under 2.5"] = {};
    if (
      !res["yellow cards under 2.5"][matchweeks[key]["yellow cards under 2.5"]]
    )
      res["yellow cards under 2.5"][
        matchweeks[key]["yellow cards under 2.5"]
      ] = 0;
    res["yellow cards under 2.5"][
      matchweeks[key]["yellow cards under 2.5"]
    ] += 1;

    if (!res["yellow cards under 3.5"]) res["yellow cards under 3.5"] = {};
    if (
      !res["yellow cards under 3.5"][matchweeks[key]["yellow cards under 3.5"]]
    )
      res["yellow cards under 3.5"][
        matchweeks[key]["yellow cards under 3.5"]
      ] = 0;
    res["yellow cards under 3.5"][
      matchweeks[key]["yellow cards under 3.5"]
    ] += 1;

    if (!res["productive half 1 over 2"]) res["productive half 1 over 2"] = {};
    if (
      !res["productive half 1 over 2"][
        matchweeks[key]["productive half 1 over 2"]
      ]
    )
      res["productive half 1 over 2"][
        matchweeks[key]["productive half 1 over 2"]
      ] = 0;
    res["productive half 1 over 2"][
      matchweeks[key]["productive half 1 over 2"]
    ] += 1;

    if (!res["productive half 1 equal 2"])
      res["productive half 1 equal 2"] = {};
    if (
      !res["productive half 1 equal 2"][
        matchweeks[key]["productive half 1 equal 2"]
      ]
    )
      res["productive half 1 equal 2"][
        matchweeks[key]["productive half 1 equal 2"]
      ] = 0;
    res["productive half 1 equal 2"][
      matchweeks[key]["productive half 1 equal 2"]
    ] += 1;

    if (!res["productive half 2 over 1"]) res["productive half 2 over 1"] = {};
    if (
      !res["productive half 2 over 1"][
        matchweeks[key]["productive half 2 over 1"]
      ]
    )
      res["productive half 2 over 1"][
        matchweeks[key]["productive half 2 over 1"]
      ] = 0;
    res["productive half 2 over 1"][
      matchweeks[key]["productive half 2 over 1"]
    ] += 1;
  }

  return res;
}

export function getFavoritesWinPercentage(league: League) {
  return [
    Number(
      ((league.allMatches.favoriteWin / league.allMatches.total) * 100).toFixed(
        2,
      ),
    ),
    Number(
      ((league.allMatches.draw / league.allMatches.total) * 100).toFixed(2),
    ),
    Number(
      (
        (league.allMatches.favoriteLost / league.allMatches.total) *
        100
      ).toFixed(2),
    ),
  ];
}

export function getHomeTeamsWinPercentage(league: League) {
  let homeWins = 0;
  let Draws = 0;
  let homeLoses = 0;

  for (const oneTeam of league.standings) {
    homeWins += oneTeam.matches.home.match.W;
    Draws += oneTeam.matches.home.match.D;
    homeLoses += oneTeam.matches.home.match.L;
  }

  return [
    Number(((homeWins / league.allMatches.total) * 100).toFixed(2)),
    Number(((Draws / league.allMatches.total) * 100).toFixed(2)),
    Number(((homeLoses / league.allMatches.total) * 100).toFixed(2)),
  ];
}

export function getBgForOverviewPie(opacity: number) {
  return [
    `rgba(75, 192, 192, ${opacity})`,
    `rgba(255, 206, 86, ${opacity})`,
    `rgba(255, 99, 132, ${opacity})`,
  ];
}
