import { TeamFormsPage } from "@/components/screens/teamFormsPage/TeamFormsPage";
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

  const league = await standingService.getStandings(leagueId);
  if (!league) return null;

  return (
    <TeamFormsPage
      league={league}
      leagueId={leagueId}
      season={seasonId}
    />
  );
}
