import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgxDetailsModule } from '@ngx-yanis/ngx-details';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgxDetailsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
