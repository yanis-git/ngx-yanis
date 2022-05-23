import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NgxYoutubeDemoComponent } from './ngx-youtube-demo/ngx-youtube-demo.component';
import { NgxYoutubeComponent } from './ngx-youtube.component';
import {NgxYoutubeEmbedModule} from '@ngx-yanis/ngx-youtube-embed';

const routes: Routes = [{
  path: '',
  component: NgxYoutubeComponent
}];

@NgModule({
  declarations: [NgxYoutubeDemoComponent, NgxYoutubeComponent],
  imports: [CommonModule, RouterModule.forChild(routes), NgxYoutubeEmbedModule],
})
export class NgxYoutubeModule {}
