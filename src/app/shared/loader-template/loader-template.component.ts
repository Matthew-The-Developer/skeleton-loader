import { Component, Input, OnInit } from '@angular/core';
import { LoaderTemplate } from 'src/app/models/loader-template.enum';

@Component({
  selector: 'app-loader-template',
  templateUrl: './loader-template.component.html',
  styleUrls: ['./loader-template.component.scss']
})
export class LoaderTemplateComponent implements OnInit {
  @Input() template: LoaderTemplate = LoaderTemplate.WidgetOne;

  LoaderTemplate = LoaderTemplate;

  constructor() { }

  ngOnInit(): void {
  }

}
