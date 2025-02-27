import { Fixture } from "./Fixture.props";
import styles from "./Fixtures.module.scss";
import moment from "moment";
import cn from "classnames";
import { AppLink } from "@/shared/ui/AppLink";
import LocalTime from "../localTime/LocalTime";
import { HStack } from "@/shared/ui/Stack";
import Image from "next/image";

export interface FixtureProps {
  leagueId: string;
  season: string;
}

const API_KEY = process.env.API_KEY as string;

async function getFixturesByLeague(leagueId: string, season: string) {
  const url = `${process.env.DOMAINFIXURES}/fixtures?league=${leagueId}&season=${season}`;

  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": API_KEY,
      "x-rapidapi-host": "v3.football.api-sports.io",
    },
    next: {
      revalidate: 60 * 60 * 24,
    },
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    const fixtures = data.response;

    if (fixtures === null || fixtures === undefined) {
      return [];
    } else {
      return fixtures;
    }
  } catch (err) {
    console.log(
      `Error fetching ${leagueId} fixtures in year ${season}: ${err}`,
    );
    return [];
  }
}

export const Fixtures = async ({ leagueId, season }: FixtureProps) => {
  const fixtures: Fixture[] = await getFixturesByLeague(leagueId, season);
  const filteredFixtures = fixtures
    .filter((fixture) => {
      return moment(fixture.fixture.date).isBetween(
        moment().subtract(2, "weeks"),
        moment().add(6, "days"),
      );
    })
    .sort((a, b) =>
      moment(a.fixture.date).isBefore(moment(b.fixture.date)) ? 1 : -1,
    );

  return (
    <div className={styles.fixtures}>
      <table className={styles.matchesTable}>
        <thead>
          <tr>
            <td className={styles.teamHome}>Home</td>
            <td className={cn(styles.teamHomeForm, "d-none")}>Form</td>
            <td className={styles.status}></td>
            <td className={cn(styles.teamAwayForm, "d-none")}>Form</td>
            <td className={styles.teamAway}>Away</td>
          </tr>
        </thead>
        <tbody>
          {filteredFixtures.length &&
            filteredFixtures.map((match) => (
              <tr key={match.fixture.id}>
                <td className={styles.teamHome}>
                  <AppLink href={`/team/${match.teams.home.id}`}>
                    <HStack
                      justify="between"
                      align="center"
                      gap="4"
                    >
                      <Image
                        src={match.teams.home.logo}
                        alt={match.teams.home.name}
                        width={30}
                        height={30}
                        loading="lazy"
                      />
                      <span>{match.teams.home.name}</span>
                    </HStack>
                  </AppLink>
                </td>
                <td className={cn(styles.teamHomeForm, "d-none")}></td>
                <td className={styles.status}>
                  {match.goals.home !== null ? (
                    `${match.goals.home} - ${match.goals.away}`
                  ) : (
                    <AppLink
                      href={`/match/${match.teams.home.id}-${match.teams.away.id}`}
                    >
                      <LocalTime fixture={match} />
                      <span className={cn("mdi", "mdi-chart-bar")}></span>
                    </AppLink>
                  )}
                </td>
                <td className={cn(styles.teamAwayForm, "d-none")}></td>
                <td className={styles.teamAway}>
                  <AppLink href={`/team/${match.teams.away.id}`}>
                    <HStack
                      justify="between"
                      align="center"
                      gap="4"
                    >
                      <span>{match.teams.away.name}</span>
                      <Image
                        src={match.teams.away.logo}
                        alt={match.teams.away.name}
                        width={30}
                        height={30}
                        loading="lazy"
                      />
                    </HStack>
                  </AppLink>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};
