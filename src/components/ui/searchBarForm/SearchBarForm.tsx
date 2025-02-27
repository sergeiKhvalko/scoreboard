"use client";
import { HStack } from "@/shared/ui/Stack";
// import { Team } from "@/types";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import styles from "./SearchBarForm.module.scss";
import { Input } from "@/shared/ui/Input";
import cn from "classnames";
import Image from "next/image";

interface Team {
  id: number;
  name: string;
  logo: string;
}

export function SearchBarForm({
  teamsData,
  className,
}: {
  teamsData: Team[];
  className: string;
}) {
  const [searchTerm, setSearchTerm] = useState("");
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const [showFilteredBox, setShowFilteredBox] = useState(false);

  const router = useRouter();

  const filteredTeams = teamsData.filter((team) =>
    team.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    setFocusedIndex(-1);
    setShowFilteredBox(true);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "ArrowDown") {
      let length = 0;
      if (filteredTeams.length > 10) {
        length = 10;
      } else {
        length = filteredTeams.length;
      }
      console.log(focusedIndex);
      setFocusedIndex((prevIndex) =>
        prevIndex < length - 1 ? prevIndex + 1 : prevIndex,
      );
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setFocusedIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : prevIndex,
      );
    } else if (event.key === "Enter") {
      if (focusedIndex !== -1) {
        const teamId = filteredTeams[focusedIndex].id;
        router.push(`/team/${teamId}`);
        setSearchTerm("");
      }
    }
  };

  const handleTeamItemClick = () => {
    setSearchTerm("");
  };

  const teamListRef = useRef<HTMLDivElement>(null);

  const handleOutsideClick = (event: MouseEvent) => {
    if (
      teamListRef.current &&
      !teamListRef.current.contains(event.target as Node)
    ) {
      setShowFilteredBox(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <HStack
      justify="center"
      align="center"
      className={cn(styles.searchBarWrap, className)}
    >
      <Input
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        onKeyDown={handleKeyDown}
        placeholder="Search for a team"
        className={styles.searchInput}
      />
      {searchTerm && filteredTeams.length > 0 && showFilteredBox ? (
        <div
          ref={teamListRef}
          className={styles.filteredBox}
        >
          {filteredTeams.slice(0, 10).map((standing, i) => (
            <Link
              href={`/team/${standing.id}`}
              key={standing.id}
              className={cn(styles.boxLink, {
                [styles.focusedBoxLink]: i === focusedIndex,
              })}
              onClick={() => handleTeamItemClick()}
            >
              <HStack
                justify="start"
                align="center"
                gap="16"
              >
                <Image
                  src={standing.logo}
                  alt={standing.name}
                  width={20}
                  height={20}
                  loading="lazy"
                />
                <span>{standing.name}</span>
              </HStack>
            </Link>
          ))}
        </div>
      ) : null}
    </HStack>
  );
}
