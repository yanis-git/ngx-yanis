import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxYoutubeComponent } from './ngx-youtube.component';

describe('NgxYoutubeComponent', () => {
  let component: NgxYoutubeComponent;
  let fixture: ComponentFixture<NgxYoutubeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgxYoutubeComponent],
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
