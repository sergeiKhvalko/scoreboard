export interface LeagueInfo {
  id: number;
  country: string;
  flag: string;
  logo: string;
  matchweeksInfo: { [key: string]: MatchweeksInfo };
  name: string;
  season: number;
  totalGoals: number;
  totalMatches: number;
  "totalOver2.5": number;
}

interface MatchweeksInfo {
  "away team corners win": number;
  "away team win": number;
  "away team yellow cards win": number;
  "both score no": number;
  "both score yes": number;
  "corners over 9.5": number;
  "corners over 10.5": number;
  "corners over 11.5": number;
  "corners over 12.5": number;
  "corners over 13.5": number;
  "corners under 8.5": number;
  "corners under 9.5": number;
  count: number;
  draw: number;
  "favorite lost": number;
  "favorite win": number;
  "home team corners win": number;
  "home team win": number;
  "home team yellow cards win": number;
  "productive half 1 equal 2": number;
  "productive half 1 over 2": number;
  "productive half 2 over 1": number;
  "total goals": number;
  "total over 2.5": number;
  "total over 3.5": number;
  "total over 4.5": number;
  "total under 1.5": number;
  "total under 2.5": number;
  "yellow cards over 3.5": number;
  "yellow cards over 4.5": number;
  "yellow cards over 5.5": number;
  "yellow cards over 6.5": number;
  "yellow cards over 7.5": number;
  "yellow cards under 2.5": number;
  "yellow cards under 3.5": number;
}
