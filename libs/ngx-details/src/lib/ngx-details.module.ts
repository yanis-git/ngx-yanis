import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './details/details.component';
import { SummaryComponent } from './summary/summary.component';

@NgModule({
  imports: [CommonModule],
  declarations: [DetailsComponent, SummaryComponent],
  exports: [DetailsComponent, SummaryComponent],
})
export class NgxDetailsModule {}
