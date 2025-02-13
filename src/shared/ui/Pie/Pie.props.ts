type Datasets = {
  label: string;
  data: number[];
  backgroundColor: string[];
  hoverBackgroundColor?: string[];
  borderColor?: string[];
  borderWidth?: number;
};

export interface PieProps {
  labels: string[];
  datasets: Datasets[];
}
