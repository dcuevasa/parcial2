import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CafeComponent } from './cafe.component';
import { CafeDetailComponent } from './cafe-detail/cafe-detail.component';
import { CafeListComponent } from './cafe-list/cafe-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CafeListComponent, CafeDetailComponent],
  exports:[CafeListComponent, CafeDetailComponent]
})
export class CafeModule { }
