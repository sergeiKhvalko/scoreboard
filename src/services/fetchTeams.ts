import { cache } from "react";
import { fetchData } from "./fetchData";

export const fetchTeams = cache(async () => {
  const url = `${process.env.SERVER_URL}/teams`;
  try {
    const results = await fetchData(url);
    return results;
  } catch (error) {
    console.error("Promise.all() failed:", error);
    throw error;
  }
});
