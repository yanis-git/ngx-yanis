import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxYoutubeDemoComponent } from './ngx-youtube-demo.component';

describe('NgxYoutubeDemoComponent', () => {
  let component: NgxYoutubeDemoComponent;
  let fixture: ComponentFixture<NgxYoutubeDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgxYoutubeDemoComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxYoutubeDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
