import { League } from "@/types/type";
import styles from "./TableHeader.module.scss";
import cn from "classnames";

interface TableHeaderProps {
  league: League;
  season: string;
  title: string;
  descr?: string;
}

export const TableHeader = ({
  league,
  season,
  title,
  descr,
}: TableHeaderProps) => {
  return (
    <div className={styles.tableTitle}>
      {league.name}{" "}
      <span
        className={cn({
          [styles.homeTable]: title === "Home",
          [styles.awayTable]: title === "Away",
        })}
      >
        {title}
      </span>{" "}
      {descr} ({league.country}) - {season}/{+season.slice(-2) + 1}
    </div>
  );
};
