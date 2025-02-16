"use client";

import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { PieProps } from "./Pie.props";
import styles from "./Pie.module.scss";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function PieComponent({ labels, datasets }: PieProps) {
  const data = {
    labels: labels,
    datasets: datasets,
  };

  return (
    <div>
      <div className={styles.pieWrap}>
        <Pie
          data={data}
          options={{ maintainAspectRatio: false }}
        />
      </div>
    </div>
  );
}
