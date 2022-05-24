import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxYoutubeIntroComponent } from './ngx-youtube-intro.component';

describe('NgxYoutubeIntroComponent', () => {
  let component: NgxYoutubeIntroComponent;
  let fixture: ComponentFixture<NgxYoutubeIntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgxYoutubeIntroComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxYoutubeIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
