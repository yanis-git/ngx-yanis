import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxYoutubeInstallationComponent } from './ngx-youtube-installation.component';

describe('NgxYoutubeInstallationComponent', () => {
  let component: NgxYoutubeInstallationComponent;
  let fixture: ComponentFixture<NgxYoutubeInstallationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgxYoutubeInstallationComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxYoutubeInstallationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
