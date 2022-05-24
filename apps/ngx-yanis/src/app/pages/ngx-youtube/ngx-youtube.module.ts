import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NgxYoutubeDemoComponent } from './ngx-youtube-demo/ngx-youtube-demo.component';
import { NgxYoutubeComponent } from './ngx-youtube.component';
import { NgxYoutubePlayerModule } from '@ngx-yanis/ngx-youtube';
import { NgxYoutubeIntroComponent } from './ngx-youtube-intro/ngx-youtube-intro.component';
import { NgxYoutubeInstallationComponent } from './ngx-youtube-installation/ngx-youtube-installation.component';
import { CodeSnippetModule } from '../../features/code-snippet/code-snippet.module';
import { NgxYoutubeUsageComponent } from './ngx-youtube-usage/ngx-youtube-usage.component';

const routes: Routes = [
  {
    path: '',
    component: NgxYoutubeComponent,
  },
];

@NgModule({
  declarations: [
    NgxYoutubeDemoComponent,
    NgxYoutubeComponent,
    NgxYoutubeIntroComponent,
    NgxYoutubeInstallationComponent,
    NgxYoutubeUsageComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CodeSnippetModule,
    NgxYoutubePlayerModule,
  ],
})
export class NgxYoutubeModule {}
