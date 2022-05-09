import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NgxDetailsComponent } from './ngx-details.component';
import { NgxDetailsModule as NgxLibDetailsModule } from '@ngx-yanis/ngx-details';
import { CodeSnippetModule } from '../../features/code-snippet/code-snippet.module';
import { NgxDetailsDemoBasicComponent } from './ngx-detail-demo-basic/ngx-details-demo-basic.component';

const routes: Routes = [{ path: '', component: NgxDetailsComponent }];

@NgModule({
  declarations: [NgxDetailsComponent, NgxDetailsDemoBasicComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CodeSnippetModule,
    NgxLibDetailsModule,
  ],
})
export class NgxDetailsModule {}
