import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxYoutubePlayerComponent } from './ngx-youtube-player.component';

describe('NgxYoutubePlayerComponent', () => {
  let component: NgxYoutubePlayerComponent;
  let fixture: ComponentFixture<NgxYoutubePlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgxYoutubePlayerComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxYoutubePlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
