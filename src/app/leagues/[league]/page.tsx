import { LeaguePage } from "@/components/screens/leaguePage/LeaguePage";
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
    return <div>An unexpected error occurred, please reload the page</div>;

  return (
    <LeaguePage
      league={league}
      leagueId={leagueId}
      season={seasonId}
    />
  );
}
