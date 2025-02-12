import { AllLeaguesPage } from "@/components/screens/allLeaguesPage/AllLeaguesPage";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { season: seasonId } = await searchParams;

  if (typeof seasonId !== "string") return null;

  return <AllLeaguesPage seasonId={seasonId} />;
}
