import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxDetailsDemoBasicComponent } from './ngx-details-demo-basic.component';

describe('NgxDetailDemoBasicComponent', () => {
  let component: NgxDetailsDemoBasicComponent;
  let fixture: ComponentFixture<NgxDetailsDemoBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgxDetailsDemoBasicComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxDetailsDemoBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
