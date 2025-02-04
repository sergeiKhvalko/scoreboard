import { DetailedStatsPage } from "@/components/screens/detailedStats/DeatiledStats";
import { standingService } from "@/services/standingService";

export default async function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const { season: seasonId, league: leagueId } = await searchParams;

  if (typeof seasonId !== "string" || typeof leagueId !== "string") {
    return null;
  }

  const league = await standingService.getStandings(leagueId, seasonId);
  if (!league) return null;

  return (
    <DetailedStatsPage
      league={league}
      leagueId={leagueId}
      season={seasonId}
    />
  );
}
