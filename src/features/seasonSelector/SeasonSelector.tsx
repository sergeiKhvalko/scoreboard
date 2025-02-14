"use client";

import { Select } from "@/shared/ui/Select";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { memo } from "react";

const availableSeasons = [
  { content: "2024/25", value: "2024" },
  { content: "2023/24", value: "2023" },
  { content: "2022/23", value: "2022" },
  { content: "2021/22", value: "2021" },
  { content: "2020/21", value: "2020" },
  { content: "2019/20", value: "2019" },
];

const SeasonSelector = memo(
  ({ currentSeason }: { currentSeason: string | null }) => {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const leagueId = searchParams.get("league");

    const handleRedirect = (value: string) => {
      router.push(`${pathname}?season=${value}&league=${leagueId}`);
    };

    return (
      <Select
        value={currentSeason || "2024"}
        options={availableSeasons}
        onChange={handleRedirect}
      />
    );
  },
);

SeasonSelector.displayName = "SeasonSelector";
export { SeasonSelector };
