"use client";

import { useEffect, useState } from "react";
import moment from "moment";
import { Fixture } from "../fixtures/Fixture.props";
import { HStack } from "@/shared/ui/Stack";

type PageProps = {
  fixture: Fixture;
};

export default function LocalTime({ fixture }: PageProps) {
  const [formattedTime, setFormattedTime] = useState("");

  useEffect(() => {
    function formatToLocalTime(timeUTC: string): string {
      const newTime = moment(timeUTC);
      const localDateString = newTime.format("ll");
      const localTimeString = newTime.format("HH:mm");
      return `${localDateString} ${localTimeString}`;
    }

    const fixtureTime = fixture.fixture.date;
    const formatted = formatToLocalTime(fixtureTime);
    setFormattedTime(formatted);
  }, []);

  return (
    <HStack
      justify="center"
      align="center"
    >
      {formattedTime}
    </HStack>
  );
}
