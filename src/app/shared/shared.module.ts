import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { LoaderComponent } from './loader/loader.component';
import { LoaderTemplateComponent } from './loader-template/loader-template.component';



@NgModule({
  declarations: [
    LoaderComponent,
    LoaderTemplateComponent
  ],
  imports: [
    CommonModule,
    NgxSkeletonLoaderModule,
  ],
  exports: [
    LoaderTemplateComponent
  ]
})
export class SharedModule { }
