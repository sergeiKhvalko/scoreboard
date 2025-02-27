import { AllLeagues } from "@/components/screens/allLeagues";
import { fetchLeaguesData } from "@/services/fetchLeaguesData";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { season: seasonId } = await searchParams;

  if (typeof seasonId !== "string") return null;

  try {
    const responses = await fetchLeaguesData(seasonId);
    const allLeagues = responses.map((res) => res["response"][0]["league"]);

    return <AllLeagues allLeagues={allLeagues} />;
  } catch (e) {
    return <div>Failed to load user data. Please reload page.</div>;
  }
}
