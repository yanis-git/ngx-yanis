import {Injectable, OnDestroy} from '@angular/core';
import {BehaviorSubject, delay, distinctUntilChanged, filter, map, Observable, Subject, Subscription, take} from 'rxjs';
import {Options, YouTubePlayer} from 'youtube-player/dist/types';
import {defaultPlayerVars, PlayerState} from './Type';
import PlayerFactory from 'youtube-player';

@Injectable()
export class NgxYoutubePlayerService implements OnDestroy {
  private _player!: YouTubePlayer;
  private _playerState$ = new Subject<PlayerState>();
  private _isFullyReady$ = new BehaviorSubject(false);
  private _isFullyReady = false;
  private _isPlaying = false;
  private _subscriptions: Subscription[] = [];

  start(
    element: HTMLElement,
    youtubeId: string,
    options:
      Options = {}
  ): this {
    this.initializePlayer(element, youtubeId, options);
    this.bindPlayerStateChange();
    return this;
  }

  seekTo(time: number): this {
    this._player.seekTo(time, true);
    return this;
  }

  enableLoop(): this {
    const sub = this._playerState$
      .pipe(filter(state => state === PlayerState.ENDED))
      .subscribe(() => this.seekTo(0).play())
    this._subscriptions.push(sub);
    return this;
  }

  play(): this {
    this._player.playVideo();
    return this;
  }

  pause(): this {
    this._player.pauseVideo();
    return this;
  }

  toggle(): this {
    if (this._isPlaying) {
      this.pause();
    } else {
      this.play();
    }
    return this;
  }

  get isReady$(): Observable<boolean> {
    return this._isFullyReady$.asObservable();
  }

  get isPlaying$(): Observable<boolean> {
    return this._playerState$
      .pipe(
        map(state => state === PlayerState.PLAYING && this._isFullyReady),
        distinctUntilChanged()
      );
  }

  ngOnDestroy() {
    this._subscriptions.forEach(subscription => subscription?.unsubscribe());
  }

  private initializePlayer(element: HTMLElement, youtubeId: string, options: Options = {}) {
    this._player = PlayerFactory(element, {
      width: '100%',
      height: '100%',
      playerVars: {videoId: youtubeId, playlist: youtubeId, ...defaultPlayerVars, ...options} as any
    });
    // Goal here is to hide the Youtube UI from screen reader and keyboard navigation.
    this._player.getIframe().then(iframe => {
      iframe.tabIndex = -1;
      iframe.setAttribute('aria-hidden', 'true');
    });
  }

  private bindPlayerStateChange() {
    this._player.on('stateChange', (event: { data: number }) => {
      this._playerState$.next(event.data);
    });

    this._subscriptions.push(this._playerState$
      // when first playing event occur, wait 4000 for youtube UI to be hidden.
      .pipe(filter(state => state === PlayerState.PLAYING), take(1), delay(4000))
      .subscribe(() => {
        this.seekTo(0);
        this._isFullyReady = true;
        this._isFullyReady$.next(true)
      }));

    this._subscriptions.push(this.isPlaying$.subscribe(state => this._isPlaying = state));
  }
}
