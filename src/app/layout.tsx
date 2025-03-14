import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.scss";
import { Navbar } from "@/widgets/Navbar";
import cn from "classnames";
import { BottomNav } from "@/shared/ui/BottomNav/BottomNav";
import { MainProvider } from "@/shared/providers";
import { YandexMetrica } from "./yandex-metrica";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Football Statistics App",
  description: "Corners, Yellow Cards",
  other: {
    ["yandex-verification"]: "2c7499e98291f57a",
  },
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
        suppressHydrationWarning
        className={cn(`${geistSans.variable} ${geistMono.variable}`)}
      >
        <YandexMetrica />
        <MainProvider>
          <div
            id="app"
            className={cn("app")}
          >
            <Navbar pages={pages} />
            <main className="main">
              <div className="container">{children}</div>
            </main>

            <BottomNav pages={pages} />
          </div>
        </MainProvider>
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
        link: "/leagues/bundesliga?season=2024&league=78",
      },
      {
        name: "2bundesliga",
        link: "/leagues/2bundesliga?season=2024&league=79",
      },
      {
        name: "SeriaA",
        link: "/leagues/seria-a?season=2024&league=135",
      },
      {
        name: "Laliga",
        link: "/leagues/laliga?season=2024&league=140",
      },
      {
        name: "League1",
        link: "/leagues/league1?season=2024&league=61",
      },
      {
        name: "Primera",
        link: "/leagues/primera?season=2024&league=94",
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
        link: "/leagues/bundesliga?season=2024&league=78",
      },
      {
        name: "2bundesliga",
        link: "/leagues/2bundesliga?season=2024&league=79",
      },
      {
        name: "SeriaA",
        link: "/leagues/seria-a?season=2024&league=135",
      },
      {
        name: "Laliga",
        link: "/leagues/laliga?season=2024&league=140",
      },
      {
        name: "League1",
        link: "/leagues/league1?season=2024&league=61",
      },
      {
        name: "Primera",
        link: "/leagues/primera?season=2024&league=94",
      },
    ],
  },
];
