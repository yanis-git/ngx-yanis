import {AfterViewInit, Component, ElementRef, Input, ViewChild} from '@angular/core';
import {YouTubePlayer as YoutubePlayType} from 'youtube-player/dist/types';
import YouTubePlayer from 'youtube-player';

declare const YT: { PlayerState: { BUFFERING: number, CUED: number, ENDED: number, PAUSED: number, PLAYING: number, UNSTARTED: number } };

@Component({
  selector: 'ngx-youtube-player',
  templateUrl: './ngx-youtube-player.component.html',
  styleUrls: ['./ngx-youtube-player.component.scss'],
})
export class NgxYoutubePlayerComponent implements AfterViewInit {
  @Input() youtubeId!: string;
  @ViewChild('youtube') frame!: ElementRef<HTMLElement>;
  private player!: YoutubePlayType;

  public isPlaying = false;

  ngAfterViewInit() {
    this.initializePlayer();
    this.bindPlayerStateChange();

    if (!this.isPreferReduceMotion()) {
      this.player.playVideo();
    }

  }

  onToggleBackground() {
    if (this.isPlaying) {
      this.player.pauseVideo();
    } else {
      this.player.playVideo();
    }
  }

  private isPreferReduceMotion(): boolean {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  private initializePlayer() {
    this.player = YouTubePlayer(this.frame.nativeElement, {
      width: '100%',
      height: '100%',
      playerVars: {
        color: "white",
        videoId: this.youtubeId,
        playlist: this.youtubeId,
        iv_load_policy: 3,
        rel: 0,
        playsinline: 1,
        autoplay: 1,
        controls: 0,
        showinfo: 0,
        widget: 1,
        modestbranding: 1,
        loop: 1,
        mute: 1,
      } as any
    });
  }

  private bindPlayerStateChange() {
    this.player.on('stateChange', (event) => {
      this.isPlaying = event.data === YT.PlayerState.PLAYING;
      if (event.data === YT.PlayerState.ENDED) {
        this.player.seekTo(0, true);
        this.player.playVideo();
      }
    });
  }
}
