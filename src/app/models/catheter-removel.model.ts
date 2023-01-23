import { Chart } from "./chart-data.model";

export interface CatheterRemoval {
  chart: Chart;
  catheterPatientCount: number;
  catheterGreaterNinetyDaysCount: number;
  overdueTaskCount: number;
}