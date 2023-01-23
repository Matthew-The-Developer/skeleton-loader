import { Color } from "@swimlane/ngx-charts";

export interface Chart {
  colorScheme: Color;
  data: ChartData[];
  xAxis: boolean;
  showXAxisLabel: boolean;
  xAxisLabel: string;
  yAxis: boolean;
  showYAxisLabel: boolean;
  yAxisLabel: string;
  showLegend: boolean;
}

export interface ChartData {
  name: string
  value: number
}