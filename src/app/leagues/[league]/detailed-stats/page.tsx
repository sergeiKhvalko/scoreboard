import { DetailedStatsPage } from "@/components/screens/detailedStatsPage/DeatiledStatsPage";
import { standingService } from "@/services/standingService";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { season: seasonId, league: leagueId } = await searchParams;

  if (typeof seasonId !== "string" || typeof leagueId !== "string") {
    return null;
  }

  const league = await standingService.getStandings(leagueId, seasonId);
  if (!league)
    return <div>Failed to load leagues data. Please reload page.</div>;

  return (
    <DetailedStatsPage
      league={league}
      leagueId={leagueId}
      season={seasonId}
    />
  );
}
