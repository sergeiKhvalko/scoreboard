import { AllLeaguesPage } from "@/components/screens/allLeagues/AllLeagues";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { season: seasonId } = await searchParams;
  const urls = [
    `${process.env.SERVER_URL}/matchweeks-info?season=${seasonId}&league=235`,
    `${process.env.SERVER_URL}/matchweeks-info?season=${seasonId}&league=236`,
    `${process.env.SERVER_URL}/matchweeks-info?season=${seasonId}&league=39`,
    `${process.env.SERVER_URL}/matchweeks-info?season=${seasonId}&league=40`,
    `${process.env.SERVER_URL}/matchweeks-info?season=${seasonId}&league=78`,
    `${process.env.SERVER_URL}/matchweeks-info?season=${seasonId}&league=79`,
    `${process.env.SERVER_URL}/matchweeks-info?season=${seasonId}&league=135`,
    `${process.env.SERVER_URL}/matchweeks-info?season=${seasonId}&league=140`,
    `${process.env.SERVER_URL}/matchweeks-info?season=${seasonId}&league=61`,
    `${process.env.SERVER_URL}/matchweeks-info?season=${seasonId}&league=94`,
  ];

  const requests = urls.map((url) => fetch(url));
  const responses = await Promise.all(requests);
  const allLeagues = (await Promise.all(responses.map((r) => r.json()))).map(
    (res) => res["response"][0]["league"],
  );

  return <AllLeaguesPage allLeagues={allLeagues} />;
}
