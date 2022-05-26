import {ComponentFixture, TestBed} from '@angular/core/testing';
import {NgxYoutubePlayerComponent} from './ngx-youtube-player.component';
import {BehaviorSubject, delay, filter} from 'rxjs';
import {NgxYoutubePlayerService} from './ngx-youtube-player.service';


class MockNgxYoutubePlayerService {
  private _isFullyReady$ = new BehaviorSubject(false);
  private _isPlaying$ = new BehaviorSubject(false);
  private _isPlaying = false;

  start(element: HTMLElement, youtubeId: string, options: any) {
    this._isFullyReady$.next(true);
    return this;
  }

  enableLoop() {
    return this;
  }

  play() {
    this._isPlaying$.next(true);
    this._isPlaying = true;
    return this;
  }

  pause() {
    this._isPlaying$.next(false);
    this._isPlaying = false;
    return this;
  }

  toggle() {
    this._isPlaying ? this.pause() : this.play();
    return this;
  }

  get isPlaying$() {
    return this._isPlaying$.asObservable();
  }

  get isReady$() {
    return this._isFullyReady$.pipe(delay(0));
  }
}

describe('NgxYoutubePlayerComponent', () => {
  let component: NgxYoutubePlayerComponent;
  let fixture: ComponentFixture<NgxYoutubePlayerComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [NgxYoutubePlayerComponent],
    }).overrideComponent(NgxYoutubePlayerComponent, {
      set: {providers: [{provide: NgxYoutubePlayerService, useClass: MockNgxYoutubePlayerService}]},
    })
    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxYoutubePlayerComponent);
    component = fixture.componentInstance;
    component.youtubeId = 'Bc_RrCNWTyo';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it should have a play button
  it('should have toggle play pause button when youtube background video have started', (done) => {
    const buttons = fixture.debugElement.nativeElement.querySelectorAll('button');
    expect(buttons.length).toBe(0);

    component.readyChange.pipe(filter(v => v)).subscribe(() => {
      fixture.detectChanges()
      fixture.whenStable().then(() => {
        const countOfBtns = fixture.debugElement.nativeElement.querySelectorAll('button').length;
        expect(countOfBtns).toBe(1);
        let button = fixture.debugElement.nativeElement.querySelector('button');
        expect(button.getAttribute('aria-label')).toContain('pause');
        expect(button.getAttribute('aria-pressed')).toBe('true');
        button.click();
        fixture.detectChanges();
        button = fixture.debugElement.nativeElement.querySelector('button');
        expect(button.getAttribute('aria-label')).toContain('play');
        expect(button.getAttribute('aria-pressed')).toBe('false');
        done();
      });
    });
    component.ngAfterViewInit();
  });
});
