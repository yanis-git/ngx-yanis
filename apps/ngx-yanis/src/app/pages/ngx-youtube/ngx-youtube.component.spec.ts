import {ComponentFixture, TestBed} from '@angular/core/testing';

import {NgxYoutubeComponent} from './ngx-youtube.component';
import {NgxYoutubeDemoComponent} from './ngx-youtube-demo/ngx-youtube-demo.component';

describe('NgxYoutubeComponent', () => {
  let component: NgxYoutubeComponent;
  let fixture: ComponentFixture<NgxYoutubeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgxYoutubeComponent, NgxYoutubeDemoComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxYoutubeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
