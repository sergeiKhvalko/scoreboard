// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

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

  const result = [];
  async function fetcher(urls: string[], retry: number) {
    if (retry === 0) return;
    const requests = urls.map((url) => fetch(url));
    const resultFilter = (
      result: PromiseSettledResult<Response>[],
      error?: boolean,
    ) =>
      result
        .filter((i) => i.value.ok === (!error ? true : false))
        .map((r) => (!error ? r.value : r.value.url));

    const responses = await Promise.allSettled(requests);
    console.log(responses);

    const fulfilled = resultFilter(responses, false);
    const rejected = resultFilter(responses, true);

    console.log("fulfilled", fulfilled);
    console.log("rejected", rejected);

    result.push(...fulfilled);
    if (rejected.length) await fetcher(rejected, retry - 1);
  }
  await fetcher(urls, 5);

  if (result.length === 0) return <div>No data</div>;

  const allLeagues = (await Promise.all(result.map((r) => r.json()))).map(
    (res) => res["response"][0]["league"],
  );
  // console.log(allLeagues);

  return <AllLeaguesPage allLeagues={allLeagues} />;
  // return <div>All leagues</div>;
}
