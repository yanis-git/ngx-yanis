import {AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, Input, ViewChild} from '@angular/core';
import {NgxYoutubePlayerService} from './ngx-youtube-player.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'ngx-youtube-player',
  templateUrl: './ngx-youtube-player.component.html',
  styleUrls: ['./ngx-youtube-player.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [NgxYoutubePlayerService]
})
export class NgxYoutubePlayerComponent implements AfterViewInit {
  @Input() youtubeId!: string;
  @ViewChild('youtube') frame!: ElementRef<HTMLElement>;
  public isPlaying$: Observable<boolean>;
  public isCoverDisplay$: Observable<boolean>;

  constructor(private player: NgxYoutubePlayerService) {
    this.isCoverDisplay$ = this.player.isReady$;
    this.isPlaying$ = this.player.isPlaying$;
  }

  ngAfterViewInit() {
    if (this.isPreferReduceMotion()) {
      return;
    }
    this.player
      .start(this.frame.nativeElement, this.youtubeId)
      .enableLoop();

    this.player.play();
  }

  togglePlayer() {
    console.log('toggle')
    this.player.toggle();
  }

  private isPreferReduceMotion(): boolean {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }
}
