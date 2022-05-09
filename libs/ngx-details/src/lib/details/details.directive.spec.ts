import {getTestBed, TestBed} from '@angular/core/testing';
import { DetailsDirective } from './details.directive';
import {MockRender, ngMocks, MockBuilder} from 'ng-mocks';
import {Component} from '@angular/core';

@Component({
  template: `<details ngxDetails></details>`
})
class DetailsWithoutSummaryComponent { }

describe('DetailsComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailsDirective, DetailsWithoutSummaryComponent],
    }).compileComponents();

    MockBuilder([DetailsDirective]);
  });

  it('should throw error when DetailsComponent does not contain SummaryComponent child component', () => {
    const fixture = getTestBed().createComponent(DetailsWithoutSummaryComponent);
    expect(() => fixture.detectChanges()).toThrowError('ngx-details: You must provide a summary directive or native html element with a summary tag');
  });

  it('should create the component', () => {
    MockRender('<details ngxDetails><summary>test</summary></details>');
    const ngxDetail = ngMocks.find('details');
    expect(ngxDetail.componentInstance).toBeTruthy();
  });

  it('should Emit false as default value of isOpen', () => {
    const isOpenHandler = jest.fn();
    MockRender('<details ngxDetails (isOpen)="isOpenHandler($event)"><summary>test</summary></details>', {isOpenHandler});
    expect(isOpenHandler.mock.calls.length).toBe(1);
    expect(isOpenHandler.mock.calls[0][0]).toBe(false);
  });

  it('should Emit true for isOpen when it is override', () => {
    const isOpenHandler = jest.fn();
    MockRender('<details ngxDetails (isOpen)="isOpenHandler($event)" [open]="true"><summary>test</summary></details>', {isOpenHandler});
    expect(isOpenHandler.mock.calls.length).toBe(1);
    expect(isOpenHandler.mock.calls[0][0]).toBe(true);
  });


  it('should Emit isOpen when value change', () => {
    const isOpenHandler = jest.fn();
    MockRender('<details ngxDetails (isOpen)="isOpenHandler($event)"><summary>test</summary></details>', {isOpenHandler});
    ngMocks.click('details');
    expect(isOpenHandler.mock.calls.length).toBe(2);
    expect(isOpenHandler.mock.calls[1][0]).toBe(true);
  });
});
