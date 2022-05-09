import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsDirective } from './details/details.directive';
import { SummaryDirective } from './summary/summary.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [DetailsDirective, SummaryDirective],
  exports: [DetailsDirective, SummaryDirective],
})
export class NgxDetailsModule {}
