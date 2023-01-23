import { Chart } from "./chart-data.model";

export interface TransplantStatus {
  chart: Chart;
  overdueTaskCount: number;
  duesoonTaskCount: number;
}