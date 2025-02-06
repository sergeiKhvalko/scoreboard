export interface TableHeadersProps {
  btn: string;
  sortBtn: string;
  descr: string;
}

export const tableHeaders = {
  overview: {
    match: [
      {
        btn: "M",
        sortBtn: "M",
        descr: "Matches Played this season",
      },
      {
        btn: "W",
        sortBtn: "W",
        descr: "Win",
      },
      {
        btn: "D",
        sortBtn: "D",
        descr: "Draw",
      },
      {
        btn: "L",
        sortBtn: "L",
        descr: "Loss",
      },
      {
        btn: "GF",
        sortBtn: "GF",
        descr: "Goals For (GF)\nThe number of goals this\nteam have scored.",
      },
      {
        btn: "GA",
        sortBtn: "GA",
        descr:
          "Goals Against (GA)\nThe number of goals this\nteam have conceded.",
      },
      {
        btn: "GD",
        sortBtn: "GD",
        descr: "Goal Difference (GD)\nGoals Scored - Goals Conceded",
      },
      {
        btn: "P",
        sortBtn: "P",
        descr: "Points",
      },
    ],
    first_half: [
      {
        btn: "M",
        sortBtn: "M",
        descr: "Matches Played this season",
      },
      {
        btn: "W",
        sortBtn: "W",
        descr: "Win",
      },
      {
        btn: "D",
        sortBtn: "D",
        descr: "Draw",
      },
      {
        btn: "L",
        sortBtn: "L",
        descr: "Loss",
      },
      {
        btn: "GF",
        sortBtn: "GF",
        descr: "Goals For (GF)\nThe number of goals this\nteam have scored.",
      },
      {
        btn: "GA",
        sortBtn: "GA",
        descr:
          "Goals Against (GA)\nThe number of goals this\nteam have conceded.",
      },
      {
        btn: "GD",
        sortBtn: "GD",
        descr: "Goal Difference (GD)\nGoals Scored - Goals Conceded",
      },
      {
        btn: "P",
        sortBtn: "P",
        descr: "Points",
      },
    ],
    second_half: [
      {
        btn: "M",
        sortBtn: "M",
        descr: "Matches Played this season",
      },
      {
        btn: "W",
        sortBtn: "W",
        descr: "Win",
      },
      {
        btn: "D",
        sortBtn: "D",
        descr: "Draw",
      },
      {
        btn: "L",
        sortBtn: "L",
        descr: "Loss",
      },
      {
        btn: "GF",
        sortBtn: "GF",
        descr: "Goals For (GF)\nThe number of goals this\nteam have scored.",
      },
      {
        btn: "GA",
        sortBtn: "GA",
        descr:
          "Goals Against (GA)\nThe number of goals this\nteam have conceded.",
      },
      {
        btn: "GD",
        sortBtn: "GD",
        descr: "Goal Difference (GD)\nGoals Scored - Goals Conceded",
      },
      {
        btn: "P",
        sortBtn: "P",
        descr: "Points",
      },
    ],
  },
  corners: {
    match: [
      {
        btn: "M",
        sortBtn: "matches",
        descr: "Matches Played this season",
      },
      {
        btn: "W",
        sortBtn: "corner_win",
        descr: "Win",
      },
      {
        btn: "D",
        sortBtn: "corner_draw",
        descr: "Draw",
      },
      {
        btn: "L",
        sortBtn: "corner_lose",
        descr: "Loss",
      },
      {
        btn: "u8.5",
        sortBtn: "corner_under_8_5",
        descr: "",
      },
      {
        btn: "u9.5",
        sortBtn: "corner_under_9_5",
        descr: "",
      },
      {
        btn: "o9.5",
        sortBtn: "corner_over_9_5",
        descr: "",
      },
      {
        btn: "o10.5",
        sortBtn: "corner_over_10_5",
        descr: "",
      },
      {
        btn: "o11.5",
        sortBtn: "corner_over_11_5",
        descr: "",
      },
    ],
    first_half: [
      {
        btn: "M",
        sortBtn: "matches",
        descr: "Matches Played this season",
      },
      {
        btn: "W",
        sortBtn: "corner_win",
        descr: "Win",
      },
      {
        btn: "D",
        sortBtn: "corner_draw",
        descr: "Draw",
      },
      {
        btn: "L",
        sortBtn: "corner_lose",
        descr: "Loss",
      },
      {
        btn: "u3.5",
        sortBtn: "corner_under_3_5",
        descr: "",
      },
      {
        btn: "u4.5",
        sortBtn: "corner_under_4_5",
        descr: "",
      },
      {
        btn: "o4.5",
        sortBtn: "corner_over_4_5",
        descr: "",
      },
      {
        btn: "o5.5",
        sortBtn: "corner_over_5_5",
        descr: "",
      },
      {
        btn: "o6.5",
        sortBtn: "corner_over_6_5",
        descr: "",
      },
    ],
    second_half: [
      {
        btn: "M",
        sortBtn: "matches",
        descr: "Matches Played this season",
      },
      {
        btn: "W",
        sortBtn: "corner_win",
        descr: "Win",
      },
      {
        btn: "D",
        sortBtn: "corner_draw",
        descr: "Draw",
      },
      {
        btn: "L",
        sortBtn: "corner_lose",
        descr: "Loss",
      },
      {
        btn: "u3.5",
        sortBtn: "corner_under_3_5",
        descr: "",
      },
      {
        btn: "u4.5",
        sortBtn: "corner_under_4_5",
        descr: "",
      },
      {
        btn: "o4.5",
        sortBtn: "corner_over_4_5",
        descr: "",
      },
      {
        btn: "o5.5",
        sortBtn: "corner_over_5_5",
        descr: "",
      },
      {
        btn: "o6.5",
        sortBtn: "corner_over_6_5",
        descr: "",
      },
    ],
  },
  individ_corners: {
    match: [
      {
        btn: "M",
        sortBtn: "matches",
        descr: "Matches Played this season",
      },
      {
        btn: "All",
        sortBtn: "corner_count",
        descr: "All corners",
      },
      {
        btn: "u4.5",
        sortBtn: "corner_under_4_5",
        descr: "",
      },
      {
        btn: "u5.5",
        sortBtn: "corner_under_5_5",
        descr: "",
      },
      {
        btn: "o5.5",
        sortBtn: "corner_over_5_5",
        descr: "",
      },
      {
        btn: "o6.5",
        sortBtn: "corner_over_6_5",
        descr: "",
      },
      {
        btn: "o7.5",
        sortBtn: "corner_over_7_5",
        descr: "",
      },
      {
        btn: "o8.5",
        sortBtn: "corner_over_8_5",
        descr: "",
      },
      {
        btn: "o9.5",
        sortBtn: "corner_over_9_5",
        descr: "",
      },
    ],
    first_half: [
      {
        btn: "M",
        sortBtn: "matches",
        descr: "Matches Played this season",
      },
      {
        btn: "All",
        sortBtn: "corner_count",
        descr: "All corners",
      },
      {
        btn: "u2.5",
        sortBtn: "corner_under_2_5",
        descr: "",
      },
      {
        btn: "u3.5",
        sortBtn: "corner_under_3_5",
        descr: "",
      },
      {
        btn: "u4.5",
        sortBtn: "corner_under_4_5",
        descr: "",
      },
      {
        btn: "o4.5",
        sortBtn: "corner_over_4_5",
        descr: "",
      },
      {
        btn: "o5.5",
        sortBtn: "corner_over_5_5",
        descr: "",
      },
      {
        btn: "o6.5",
        sortBtn: "corner_over_6_5",
        descr: "",
      },
      {
        btn: "o7.5",
        sortBtn: "corner_over_7_5",
        descr: "",
      },
    ],
    second_half: [
      {
        btn: "M",
        sortBtn: "matches",
        descr: "Matches Played this season",
      },
      {
        btn: "All",
        sortBtn: "corner_count",
        descr: "All corners",
      },
      {
        btn: "u2.5",
        sortBtn: "corner_under_2_5",
        descr: "",
      },
      {
        btn: "u3.5",
        sortBtn: "corner_under_3_5",
        descr: "",
      },
      {
        btn: "u4.5",
        sortBtn: "corner_under_4_5",
        descr: "",
      },
      {
        btn: "o4.5",
        sortBtn: "corner_over_4_5",
        descr: "",
      },
      {
        btn: "o5.5",
        sortBtn: "corner_over_5_5",
        descr: "",
      },
      {
        btn: "o6.5",
        sortBtn: "corner_over_6_5",
        descr: "",
      },
      {
        btn: "o7.5",
        sortBtn: "corner_over_7_5",
        descr: "",
      },
    ],
  },
  yellow_cards: {
    match: [
      {
        btn: "M",
        sortBtn: "matches",
        descr: "Matches Played this season",
      },
      {
        btn: "W",
        sortBtn: "yellow_win",
        descr: "Win",
      },
      {
        btn: "D",
        sortBtn: "yellow_draw",
        descr: "Draw",
      },
      {
        btn: "L",
        sortBtn: "yellow_lose",
        descr: "Loss",
      },
      {
        btn: "u2.5",
        sortBtn: "yellow_under_2_5",
        descr: "",
      },
      {
        btn: "u3.5",
        sortBtn: "yellow_under_3_5",
        descr: "",
      },
      {
        btn: "o3.5",
        sortBtn: "yellow_over_3_5",
        descr: "",
      },
      {
        btn: "o4.5",
        sortBtn: "yellow_over_4_5",
        descr: "",
      },
      {
        btn: "o5.5",
        sortBtn: "yellow_over_5_5",
        descr: "",
      },
    ],
    first_half: [
      {
        btn: "M",
        sortBtn: "matches",
        descr: "Matches Played this season",
      },
      {
        btn: "W",
        sortBtn: "yellow_win",
        descr: "Win",
      },
      {
        btn: "D",
        sortBtn: "yellow_draw",
        descr: "Draw",
      },
      {
        btn: "L",
        sortBtn: "yellow_lose",
        descr: "Loss",
      },
      {
        btn: "u0.5",
        sortBtn: "yellow_under_0_5",
        descr: "",
      },
      {
        btn: "u1.5",
        sortBtn: "yellow_under_1_5",
        descr: "",
      },
      {
        btn: "o1.5",
        sortBtn: "yellow_over_1_5",
        descr: "",
      },
      {
        btn: "o2.5",
        sortBtn: "yellow_over_2_5",
        descr: "",
      },
      {
        btn: "o3.5",
        sortBtn: "yellow_over_3_5",
        descr: "",
      },
    ],
    second_half: [
      {
        btn: "M",
        sortBtn: "matches",
        descr: "Matches Played this season",
      },
      {
        btn: "W",
        sortBtn: "yellow_win",
        descr: "Win",
      },
      {
        btn: "D",
        sortBtn: "yellow_draw",
        descr: "Draw",
      },
      {
        btn: "L",
        sortBtn: "yellow_lose",
        descr: "Loss",
      },
      {
        btn: "u0.5",
        sortBtn: "yellow_under_0_5",
        descr: "",
      },
      {
        btn: "u1.5",
        sortBtn: "yellow_under_1_5",
        descr: "",
      },
      {
        btn: "o1.5",
        sortBtn: "yellow_over_1_5",
        descr: "",
      },
      {
        btn: "o2.5",
        sortBtn: "yellow_over_2_5",
        descr: "",
      },
      {
        btn: "o3.5",
        sortBtn: "yellow_over_3_5",
        descr: "",
      },
    ],
  },
};
