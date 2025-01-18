import { AllLeaguesPage } from "@/components/screens/allLeagues/AllLeagues";

export default async function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const { season: seasonId } = await searchParams;
  const urls = [
    `http://127.0.0.1:8000/matchweeks-info?season=${seasonId}&league=235`,
    `http://127.0.0.1:8000/matchweeks-info?season=${seasonId}&league=236`,
    `http://127.0.0.1:8000/matchweeks-info?season=${seasonId}&league=39`,
    `http://127.0.0.1:8000/matchweeks-info?season=${seasonId}&league=40`,
    `http://127.0.0.1:8000/matchweeks-info?season=${seasonId}&league=78`,
    `http://127.0.0.1:8000/matchweeks-info?season=${seasonId}&league=79`,
    `http://127.0.0.1:8000/matchweeks-info?season=${seasonId}&league=135`,
    `http://127.0.0.1:8000/matchweeks-info?season=${seasonId}&league=140`,
    `http://127.0.0.1:8000/matchweeks-info?season=${seasonId}&league=61`,
    `http://127.0.0.1:8000/matchweeks-info?season=${seasonId}&league=94`,
  ];

  const requests = urls.map((url) => fetch(url));
  const responses = await Promise.all(requests);
  const allLeagues = (await Promise.all(responses.map((r) => r.json()))).map(
    (res) => res["response"][0]["league"],
  );

  return <AllLeaguesPage allLeagues={allLeagues} />;
}
