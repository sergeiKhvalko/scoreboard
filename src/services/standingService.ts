import { League } from "@/types/type";

class StandingService {
  async getStandings(
    leagueId: string,
    seasonId: string = "2024",
  ): Promise<League | undefined> {
    const url = `http://127.0.0.1:8000/standings?season=${seasonId}&league=${leagueId}`;

    const options = {
      method: "GET",
      next: {
        revalidate: 60 * 60 * 24,
      },
    };

    try {
      const response = await fetch(url, options);
      const data = await response.json();
      const standings: League = data["response"][0]["league"];
      return standings;
    } catch (err) {
      console.error(
        `Error fetching ${leagueId} standings: ${err}, url---${url}`,
      );
    }
  }
}

export const standingService = new StandingService();
