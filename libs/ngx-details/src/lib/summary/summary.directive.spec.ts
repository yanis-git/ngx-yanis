import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SummaryDirective } from './summary.directive';
import {Component} from '@angular/core';

@Component({
  template: `<summary ngxSummary></summary>`
})
class DummyComponent {}

describe('SummaryComponent', () => {
  let component: SummaryDirective;
  let fixture: ComponentFixture<SummaryDirective>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SummaryDirective, DummyComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DummyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
