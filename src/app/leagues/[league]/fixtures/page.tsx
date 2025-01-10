import { LeagueDetails } from "@/components/ui/leagueDetails";
import { standingService } from "@/services/standingService";

export default async function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const { league: leagueId } = await searchParams;

  if (typeof leagueId !== "string") {
    return null;
  }

  const league = await standingService.getStandings(leagueId);
  if (!league) return null;

  return <LeagueDetails league={league} />;
}
