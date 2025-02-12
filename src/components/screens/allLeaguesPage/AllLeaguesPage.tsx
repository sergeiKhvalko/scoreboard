// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { cache } from "react";

import { AllLeagues } from "../../ui/allLeagues/AllLeagues";

export const AllLeaguesPage = async ({ seasonId }: { seasonId: string }) => {
  // Advanced retry utility with configurable options
  async function fetchWithRetry<T>(
    fetchFn: () => Promise<T>,
    options: {
      maxRetries?: number;
      baseDelay?: number;
      backoffFactor?: number;
      jitter?: boolean;
    } = {},
  ): Promise<T> {
    const {
      maxRetries = 3,
      baseDelay = 1000,
      backoffFactor = 2,
      jitter = true,
    } = options;

    let lastError: Error | null = null;

    for (let attempt = 0; attempt < maxRetries; attempt++) {
      try {
        return await fetchFn();
      } catch (error) {
        lastError = error as Error;

        // Calculate delay with optional jitter
        let delay = baseDelay * Math.pow(backoffFactor, attempt);

        if (jitter) {
          // Add randomness to prevent thundering herd problem
          delay = delay * (1 + Math.random());
        }

        console.error(
          `Attempt ${attempt + 1} failed. Retrying in ${Math.round(delay)}ms`,
          error,
        );

        await new Promise((resolve) => setTimeout(resolve, delay));
      }
    }

    throw lastError || new Error("All retry attempts failed");
  }

  // Simulated data fetching functions with different characteristics
  async function fetchLeagueData(url: string) {
    return fetchWithRetry(
      async () => {
        const response = await fetch(url, {
          headers: { "Content-Type": "application/json" },
          signal: AbortSignal.timeout(3000),
        });

        if (!response.ok) throw new Error("League data fetch failed");
        return response.json();
      },
      {
        maxRetries: 3,
        jitter: true,
      },
    );
  }

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

  // Cached server-side data fetching with Promise strategies
  const fetchLeaguesDataInParallel = cache(async (urls: string[]) => {
    try {
      const results = await Promise.all(
        urls.map((url) => fetchLeagueData(url)),
      );
      return results;
    } catch (error) {
      console.error("Promise.all() failed:", error);
      throw error;
    }
  });

  try {
    const responses = await fetchLeaguesDataInParallel(urls);
    const allLeagues = responses.map((res) => res["response"][0]["league"]);

    return <AllLeagues allLeagues={allLeagues} />;
  } catch (e) {
    return (
      <div className="text-red-500">
        Failed to load user data. Please reload page.
      </div>
    );
  }
};
