import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { CodeSnippetModule } from './features/code-snippet/code-snippet.module';

const routes: Routes = [
  {
    path: 'ngx-youtube',
    loadChildren: () =>
      import('./pages/ngx-youtube/ngx-youtube.module').then(
        (m) => m.NgxYoutubeModule
      ),
  },
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
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CodeSnippetModule.forRoot(),
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
