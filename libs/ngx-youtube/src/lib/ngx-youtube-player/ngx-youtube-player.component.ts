import {AfterViewInit, Component, ElementRef, Input, ViewChild} from '@angular/core';
import YouTubePlayer from 'youtube-player';
import {YouTubePlayer as YoutubePlayType} from 'youtube-player/dist/types';

@Component({
  selector: 'ngx-youtube-player',
  templateUrl: './ngx-youtube-player.component.html',
  styleUrls: ['./ngx-youtube-player.component.scss'],
})
export class NgxYoutubePlayerComponent implements AfterViewInit {
  @Input() youtubeId!: string;
  @ViewChild('youtube') frame!: ElementRef<HTMLElement>;
  private player!: YoutubePlayType;

  ngAfterViewInit() {
    this.player = YouTubePlayer(this.frame.nativeElement, {
      width: '100%',
      height: '100%',
      playerVars: {
        color: "white",
        iv_load_policy: 3,
        rel: 0,
        playsinline: 1,
        autoplay: 1,
        controls: 0,
        showinfo: 0,
        widget: 1,
        modestbranding: 1
      } as any
    });
    this.player.loadVideoById(this.youtubeId);
    this.player.playVideo();
  }
}
