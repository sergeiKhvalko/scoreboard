import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.scss";
import { Navbar } from "@/widgets/Sidebar/Navbar";
import cn from "classnames";
import { BottomNav } from "@/shared/ui/BottomNav/BottomNav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body
        className={cn(
          `${geistSans.variable} ${geistMono.variable}`,
          "app_dark_theme",
        )}
      >
        <div
          id="app"
          className={cn("app")}
        >
          <Navbar pages={pages} />
          {children}

          <BottomNav pages={pages} />
        </div>
      </body>
    </html>
  );
}

const pages = [
  {
    title: "Stats",
    icon: "mdi-chart-bar",
    to: "/stats?season=2024",
    stats: [
      "All Stats",
      "Corners",
      "Yellow Cards",
      "BTTS",
      "Total Over / Under",
      "Individual Total",
      "Productive Half",
    ],
  },
  {
    title: "Leagues",
    icon: "mdi-soccer",
    to: "/leagues?season=2024",
    countries: [
      "Russia",
      "England",
      "Germany",
      "Italy",
      "Spain",
      "France",
      "Portugal",
      "Netherlands",
      "Switzerland",
    ],
    leagues: [
      {
        name: "All Leagues",
        link: "/leagues?season=2024",
      },
      {
        name: "RPL",
        link: "/leagues/rfpl?season=2024&league=235",
      },
      {
        name: "FNL",
        link: "/leagues/russia?season=2024&league=236",
      },
      {
        name: "Premier League",
        link: "/leagues/premier-league?season=2024&league=39",
      },
      {
        name: "Championship",
        link: "/leagues/championship?season=2024&league=40",
      },
      {
        name: "Bundesliga",
        link: "/leagues/Bundesliga?season=2024&league=40",
      },
      {
        name: "2bundesliga",
        link: "/leagues/2bundesliga?season=2024&league=40",
      },
      {
        name: "SeriaA",
        link: "/leagues/seria-a?season=2024&league=40",
      },
      {
        name: "Laliga",
        link: "/leagues/laliga?season=2024&league=40",
      },
      {
        name: "League1",
        link: "/leagues/league1?season=2024&league=40",
      },
      {
        name: "Primera",
        link: "/leagues/primera?season=2024&league=40",
      },
    ],
  },
  {
    title: "Matches",
    icon: "mdi-soccer-field",
    to: "/",
    leagues: [
      {
        name: "RPL",
        link: "/leagues/rfpl?season=2024&league=235",
      },
      {
        name: "FNL",
        link: "/leagues/russia?season=2024&league=236",
      },
      {
        name: "Premier League",
        link: "/leagues/premier-league?season=2024&league=39",
      },
      {
        name: "Championship",
        link: "/leagues/championship?season=2024&league=40",
      },
      {
        name: "Bundesliga",
        link: "/leagues/Bundesliga?season=2024&league=40",
      },
      {
        name: "2bundesliga",
        link: "/leagues/2bundesliga?season=2024&league=40",
      },
      {
        name: "SeriaA",
        link: "/leagues/seria-a?season=2024&league=40",
      },
      {
        name: "Laliga",
        link: "/leagues/laliga?season=2024&league=40",
      },
      {
        name: "League1",
        link: "/leagues/league1?season=2024&league=40",
      },
      {
        name: "Primera",
        link: "/leagues/primera?season=2024&league=40",
      },
    ],
  },
];
