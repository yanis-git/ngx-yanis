import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxYoutubePlayerComponent } from './ngx-youtube-player/ngx-youtube-player.component';

@NgModule({
  imports: [CommonModule],
  declarations: [NgxYoutubePlayerComponent],
  exports: [NgxYoutubePlayerComponent]
})
export class NgxYoutubeEmbedModule {}
