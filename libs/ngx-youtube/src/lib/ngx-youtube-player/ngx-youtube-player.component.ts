import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
  ViewChild
} from '@angular/core';
import {NgxYoutubePlayerService} from './ngx-youtube-player.service';
import {Observable, Subscription} from 'rxjs';

@Component({
  selector: 'ngx-youtube-player',
  templateUrl: './ngx-youtube-player.component.html',
  styleUrls: ['./ngx-youtube-player.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [NgxYoutubePlayerService]
})
export class NgxYoutubePlayerComponent implements AfterViewInit, OnDestroy {
  @Input() youtubeId!: string;
  @ViewChild('youtube') frame!: ElementRef<HTMLElement>;

  @Output() readyChange = new EventEmitter<boolean>();
  @Output() playingChange = new EventEmitter<boolean>();

  public isPlaying$: Observable<boolean>;
  public isCoverDisplay$: Observable<boolean>;

  private _subscriptions: Subscription[] = [];

  constructor(private player: NgxYoutubePlayerService) {
    this.isCoverDisplay$ = this.player.isReady$;
    this.isPlaying$ = this.player.isPlaying$;
    this.proxyValues();
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

  ngOnDestroy() {
    this._subscriptions.forEach(sub => sub?.unsubscribe());
  }

  togglePlayer() {
    this.player.toggle();
  }

  private isPreferReduceMotion(): boolean {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  private proxyValues() {
    this._subscriptions.push(this.isPlaying$.subscribe(state => this.playingChange.emit(state)));
    this._subscriptions.push(this.isCoverDisplay$.subscribe(state => this.readyChange.emit(state)));
  }
}
