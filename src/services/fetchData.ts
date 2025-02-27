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
export async function fetchData(url: string) {
  return fetchWithRetry(
    async () => {
      const response = await fetch(url, {
        headers: { "Content-Type": "application/json" },
        signal: AbortSignal.timeout(3000),
      });

      if (!response.ok) throw new Error("data fetch failed");
      return response.json();
    },
    {
      maxRetries: 3,
      jitter: true,
    },
  );
}
