export interface Standing {
  league: League;
}

export interface League {
  id: number;
  country: string;
  flag: string;
  name: string;
  logo: string;
  season: number;
  allMatches: {
    total: number;
    draw: number;
    favoriteLost: number;
    favoriteWin: number;
  };
  standings: oneTeam[];
}

export interface oneTeam {
  id: number;
  name: string;
  matches: Matches;
  points: number;
  form: {
    summary: {
      result: string;
      info: Array<{
        team1: string;
        team2: string;
        score: string;
      }>;
    };
    home: {
      result: string;
      info: Array<{
        team1: string;
        team2: string;
        score: string;
      }>;
    };
    away: {
      result: string;
      info: Array<{
        team1: string;
        team2: string;
        score: string;
      }>;
    };
  };
  statistics: Statistics;
}

export interface Statistics {
  corners: StatMatches;
  individ_corners: StatMatches;
  yellow_cards: StatMatches;
  individ_yellow_cards: StatMatches;
  total: StatMatches;
  individ_total: StatMatches;
  both_score: StatMatches;
  productive_half: StatMatches;
  individ_productive_half: StatMatches;
}

export interface Matches {
  summary: Match;
  home: Match;
  away: Match;
}

export interface StatMatches {
  summary: StatMatch;
  home: StatMatch;
  away: StatMatch;
}

export interface Match {
  match: Games;
  first_half: Games;
  second_half: Games;
}

export interface StatMatch {
  match: Stat;
  first_half: Stat;
  second_half: Stat;
}

export interface Stat {
  matches: number;
  corner_count: number;
  corner_win: number;
  corner_draw: number;
  corner_lose: number;
  corner_under_2_5: number;
  corner_under_3_5: number;
  corner_under_4_5: number;
  corner_under_5_5: number;
  corner_under_6_5: number;
  corner_under_7_5: number;
  corner_under_8_5: number;
  corner_under_9_5: number;
  corner_over_4_5: number;
  corner_over_5_5: number;
  corner_over_6_5: number;
  corner_over_7_5: number;
  corner_over_8_5: number;
  corner_over_9_5: number;
  corner_over_10_5: number;
  corner_over_11_5: number;
  yellow_count: number;
  yellow_win: number;
  yellow_draw: number;
  yellow_lose: number;
  yellow_under_0_5: number;
  yellow_under_1_5: number;
  yellow_under_2_5: number;
  yellow_under_3_5: number;
  yellow_over_1_5: number;
  yellow_over_2_5: number;
  yellow_over_3_5: number;
  yellow_over_4_5: number;
  yellow_over_5_5: number;
  total_count: number;
  total_win: number;
  total_draw: number;
  total_lose: number;
  total_under_0_5: number;
  total_under_1_5: number;
  total_under_2_5: number;
  total_over_0_5: number;
  total_over_1_5: number;
  total_over_2_5: number;
  total_over_3_5: number;
  total_over_4_5: number;
  in_total_count: number;
  in_total_under_0_5: number;
  in_total_under_1_5: number;
  in_total_over_1_5: number;
  in_total_over_2_5: number;
  bs_yes: number;
  bs_no: number;
  bs_win: number;
  bs_draw: number;
  bs_lose: number;
  first_over_second: number;
  first_equal_second: number;
  second_over_first: number;
}

export interface Games {
  M: number;
  W: number;
  D: number;
  L: number;
  GF: number;
  GA: number;
  GD: number;
  P: number;
}

// Fixtures

export interface FixtureInfo {
  id: number;
  referee: string;
  timezone: string;
  date: string;
  timestamp: number;
  periods: {
    fisrt: number;
    second: number;
  };
  venue: {
    id: number;
    name: string;
    city: string;
  };
  status: {
    long: string;
    short: string;
    elapsed: number;
  };
}

export interface LeagueFixtures {
  id: number;
  name: string;
  country: string;
  logo: string;
  flag: string;
  season: number;
  round: string;
}

export interface Teams {
  home: {
    id: number;
    name: string;
    logo: string;
    winner: boolean;
  };
  away: {
    id: number;
    name: string;
    logo: string;
    winner: boolean;
  };
}

export interface Goals {
  home: number;
  away: number;
}

export interface Score {
  halftime: Goals;
  fulltime: Goals;
  extratime: Goals;
  penalty: Goals;
}

export interface Fixture {
  fixture: FixtureInfo;
  league: LeagueFixtures;
  teams: Teams;
  goals: Goals;
  score: Score;
}

export interface AllFixtures {
  name: string;
  fixtures: Fixture[];
}
