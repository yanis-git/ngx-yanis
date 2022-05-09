import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import {CodeSnippetModule} from './features/code-snippet/code-snippet.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CodeSnippetModule.forRoot(),
    RouterModule.forRoot([
      {
        path: 'ngx-details',
        loadChildren: () =>
          import('./pages/ngx-details/ngx-details.module').then(
            (m) => m.NgxDetailsModule
          ),
      },
      {
        path: '',
        redirectTo: 'ngx-details',
        pathMatch: 'full',
      },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
