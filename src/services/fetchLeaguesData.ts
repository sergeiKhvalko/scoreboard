import { cache } from "react";
import { fetchData } from "./fetchData";

// Cached server-side data fetching with Promise strategies
export const fetchLeaguesData = cache(async (seasonId: string) => {
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
  try {
    const results = await Promise.all(urls.map((url) => fetchData(url)));
    return results;
  } catch (error) {
    console.error("Promise.all() failed:", error);
    throw error;
  }
});
