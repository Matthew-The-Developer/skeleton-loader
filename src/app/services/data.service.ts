import { Injectable } from '@angular/core';
import { ScaleType } from '@swimlane/ngx-charts';
import { delay, Observable, of } from 'rxjs';
import { AKF } from '../models/akf.model';
import { CatheterRemoval } from '../models/catheter-removel.model';
import { TransplantStatus } from '../models/transplant-status.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getCatheterRemoval(): Observable<CatheterRemoval> {
    return of({
      chart: {
        colorScheme: {
          name: 'catheterRemoval',
          selectable: false,
          group: ScaleType.Linear,
          domain: ['#ff1919', '#4776ce', '#21af26'],
        },
        data: [
          { name: 'Catheter', value: 20 },
          { name: 'Graft', value: 25 },
          { name: 'Fistula', value: 45 },
        ],
        xAxis: true,
        showXAxisLabel: true,
        xAxisLabel: 'Access Type',
        yAxis: true,
        showYAxisLabel: true,
        yAxisLabel: '# of Patients',
        showLegend: false
      },
      catheterPatientCount: 56,
      catheterGreaterNinetyDaysCount: 32,
      overdueTaskCount: 12
    }).pipe(delay(5000));
  }

  getTransplantStatus(): Observable<TransplantStatus> {
    return of({
      chart: {
        colorScheme: {
          name: 'catheterRemoval',
          selectable: false,
          group: ScaleType.Linear,
          domain: ['#ff0000', '#ffc000', '#00b050', '#ffff00'],
        },
        data: [
          { name: 'No Status', value: 56 },
          { name: 'Declined', value: 12 },
          { name: 'Active', value: 34 },
          { name: 'Inactive', value: 9 },
        ],
        xAxis: true,
        showXAxisLabel: true,
        xAxisLabel: 'Status',
        yAxis: true,
        showYAxisLabel: true,
        yAxisLabel: '# of Patients',
        showLegend: false
      },
      overdueTaskCount: 14,
      duesoonTaskCount: 6
    }).pipe(delay(3000));
  }

  getAKF(): Observable<AKF> {
    return of({
      patientProfiles: [
        { color: 'cobra', label: 'COBRA', value: 9 },
        { color: 'submitted', label: 'Submitted', value: 3 },
        { color: 'inactive', label: 'Inactive', value: 1 },
        { color: 'keyed-paid', label: 'Keyed', value: 9 },
        { color: 'needs-update', label: 'Needs Update', value: 2 },
        { color: 'new-incomplete', label: 'Incompleted', value: 29 },
      ],
      requests: [
        { color: 'cobra', label: 'COBRA', value: 0 },
        { color: 'submitted', label: 'Submitted', value: 5 },
        { color: 'inactive', label: 'Inactive', value: 2 },
        { color: 'keyed-paid', label: 'Keyed', value: 20 },
        { color: 'needs-update', label: 'Needs Update', value: 0 },
        { color: 'new-incomplete', label: 'Incompleted', value: 15 },
        { color: 'void-issues', label: 'Ins. Issues', value: 0 },
      ],
      transactions: [
        { color: 'new-incomplete', label: 'New', value: 0 },
        { color: 'keyed-paid', label: 'Paid', value: 0 },
        { color: 'void-issues', label: 'Void', value: 0 },
      ]
    }).pipe(delay(7000));
  }
}
