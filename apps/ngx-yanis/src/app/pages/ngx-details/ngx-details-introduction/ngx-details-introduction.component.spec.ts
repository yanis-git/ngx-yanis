import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxDetailsIntroductionComponent } from './ngx-details-introduction.component';

describe('NgxDetailsIntroductionComponent', () => {
  let component: NgxDetailsIntroductionComponent;
  let fixture: ComponentFixture<NgxDetailsIntroductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgxDetailsIntroductionComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxDetailsIntroductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
