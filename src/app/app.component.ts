import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AKF } from './models/akf.model';
import { CatheterRemoval } from './models/catheter-removel.model';
import { LoaderTemplate } from './models/loader-template.enum';
import { PeriodicElement } from './models/periodic-element.mode';
import { TransplantStatus } from './models/transplant-status.model';
import { DataService } from './services/data.service';

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  _catheterRemoval: BehaviorSubject<CatheterRemoval | null> = new BehaviorSubject<CatheterRemoval | null>(null);
  _transplantStatus: BehaviorSubject<TransplantStatus | null> = new BehaviorSubject<TransplantStatus | null>(null);
  _akf: BehaviorSubject<AKF | null> = new BehaviorSubject<AKF | null>(null);
  _periodicElements: BehaviorSubject<PeriodicElement[] | null> = new BehaviorSubject<PeriodicElement[] | null>(null);

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  LoaderTemplate = LoaderTemplate;

  constructor(private dataService: DataService) { }
  
  ngOnInit(): void {
    this._catheterRemoval = new BehaviorSubject<CatheterRemoval | null>(null);
    this._transplantStatus = new BehaviorSubject<TransplantStatus | null>(null);
    this._akf = new BehaviorSubject<AKF | null>(null);

    this.dataService.getCatheterRemoval().subscribe((results) => this._catheterRemoval.next(results));
    this.dataService.getTransplantStatus().subscribe((results) => this._transplantStatus.next(results));
    this.dataService.getAKF().subscribe((results) => this._akf.next(results));
    this.dataService.getPeriodicElements().subscribe((results) => this._periodicElements.next(results));
  }

  get catheterRemoval$(): Observable<CatheterRemoval | null> { return this._catheterRemoval.asObservable() }
  get transplantStatus$(): Observable<TransplantStatus | null> { return this._transplantStatus.asObservable() }
  get akf$(): Observable<AKF | null> { return this._akf.asObservable() }
  get periodicElements(): PeriodicElement[] { return this._periodicElements.value ?? [] }
}
