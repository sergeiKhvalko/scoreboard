export interface commandZonesProps {
  [key: number]: string;
}

export type commandZonesType = {
  [key: string]: commandZonesProps;
};

export const commandZones: commandZonesType = {
  RPL: {},
  "Premier League": {
    1: "zone1",
    2: "zone1",
    3: "zone1",
    4: "zone1",
    5: "zone2",
    18: "zone4",
    19: "zone4",
    20: "zone4",
  },
};
