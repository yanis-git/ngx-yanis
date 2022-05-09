import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NgxDetailsComponent } from './ngx-details.component';
import { NgxDetailsModule as NgxLibDetailsModule } from '@ngx-yanis/ngx-details';

const routes: Routes = [{ path: '', component: NgxDetailsComponent }];

@NgModule({
  declarations: [NgxDetailsComponent],
  imports: [CommonModule, RouterModule.forChild(routes), NgxLibDetailsModule],
})
export class NgxDetailsModule {}
