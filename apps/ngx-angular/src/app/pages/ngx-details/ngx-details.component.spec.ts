import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxDetailsComponent } from './ngx-details.component';
import {NgxDetailsModule} from '@ngx-yanis/ngx-details';

describe('NgxDetailsComponent', () => {
  let component: NgxDetailsComponent;
  let fixture: ComponentFixture<NgxDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgxDetailsComponent],
      imports: [NgxDetailsModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
