import Image from "next/image";
import styles from "./LeagueTitle.module.scss";
import { memo } from "react";

interface LeagueTitleProps {
  flag: string;
  title: string;
  descr: string;
}
const LeagueTitle = memo(({ flag, title, descr }: LeagueTitleProps) => {
  return (
    <div className={styles.leagueTitle}>
      <Image //error
        width={50}
        height={50}
        src={flag}
        alt="country flag"
        loading="lazy"
      />
      <h1 className={styles.title}>{title}</h1>
      <span className={styles.descr}>{descr}</span>
    </div>
  );
});

LeagueTitle.displayName = "LeagueTitle";
export { LeagueTitle };
