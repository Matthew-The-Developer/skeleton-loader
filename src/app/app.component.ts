import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AKF } from './models/akf.model';
import { CatheterRemoval } from './models/catheter-removel.model';
import { LoaderTemplate } from './models/loader-template.enum';
import { TransplantStatus } from './models/transplant-status.model';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  _catheterRemoval: BehaviorSubject<CatheterRemoval | null> = new BehaviorSubject<CatheterRemoval | null>(null);
  _transplantStatus: BehaviorSubject<TransplantStatus | null> = new BehaviorSubject<TransplantStatus | null>(null);
  _akf: BehaviorSubject<AKF | null> = new BehaviorSubject<AKF | null>(null);

  LoaderTemplate = LoaderTemplate;

  constructor(private dataService: DataService) { }
  
  ngOnInit(): void {
    this._catheterRemoval = new BehaviorSubject<CatheterRemoval | null>(null);
    this._transplantStatus = new BehaviorSubject<TransplantStatus | null>(null);
    this._akf = new BehaviorSubject<AKF | null>(null);

    this.dataService.getCatheterRemoval().subscribe((results) => this._catheterRemoval.next(results));
    this.dataService.getTransplantStatus().subscribe((results) => this._transplantStatus.next(results));
    this.dataService.getAKF().subscribe((results) => this._akf.next(results));
  }

  get catheterRemoval$(): Observable<CatheterRemoval | null> { return this._catheterRemoval.asObservable() }
  get transplantStatus$(): Observable<TransplantStatus | null> { return this._transplantStatus.asObservable() }
  get akf$(): Observable<AKF | null> { return this._akf.asObservable() }
}
