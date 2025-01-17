export function getCompletedProgress(totalMatches: number, totalTeams: number) {
  return Math.round(
    (totalMatches / ((totalTeams - 1) * 2 * (totalTeams / 2))) * 100,
  );
}

// function getCompletedProgress(league) {
//   return Math.round(
//     (league["totalMatches"] /
//       (league["matchweeksInfo"][1]["count"] *
//         2 *
//         (league["matchweeksInfo"][1]["count"] * 2 - 1))) *
//       100,
//   );
// }
