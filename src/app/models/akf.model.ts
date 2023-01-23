export interface Count {
  color: string;
  label: string;
  value: number;
}

export interface AKF {
  patientProfiles: Count[];
  requests: Count[];
  transactions: Count[];
}