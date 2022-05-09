import {getTestBed, TestBed} from '@angular/core/testing';
import { DetailsComponent } from './details.component';
import {SummaryComponent} from '../summary/summary.component';
import {MockRender, MockComponent, ngMocks, MockBuilder} from 'ng-mocks';



describe('DetailsComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailsComponent, SummaryComponent],
    }).compileComponents();

    MockBuilder([DetailsComponent, SummaryComponent]);
  });

  it('should throw error when DetailsComponent does not contain SummaryComponent child component', () => {
    const fixture = getTestBed().createComponent(DetailsComponent);
    expect(() => fixture.detectChanges()).toThrowError("ngx-details: You must provide a summary component");
  });

  it('should create the component', () => {
    MockRender('<ngx-details><ngx-summary>test</ngx-summary></ngx-details>');
    const ngxDetail = ngMocks.find('ngx-details');
    expect(ngxDetail.componentInstance).toBeTruthy();
  });

  it('should contain details native DOM element', () => {
    MockRender('<ngx-details><ngx-summary>test</ngx-summary></ngx-details>');
    const nativeDetail = ngMocks.find('ngx-details details');
    expect(nativeDetail.nativeNode?.tagName).toBe('DETAILS');
  });

  it('should Emit isOpen when value change', () => {
    const isOpenHandler = jest.fn();
    MockRender('<ngx-details (isOpen)="isOpenHandler($event)"><ngx-summary>test</ngx-summary></ngx-details>', {isOpenHandler});
    ngMocks.click('ngx-details details');
    expect(isOpenHandler.mock.calls.length).toBe(1);
    expect(isOpenHandler.mock.calls[0][0]).toBe(true);
    ngMocks.click('ngx-details details');
    expect(isOpenHandler.mock.calls.length).toBe(2);
    // todo debug me
    // expect(isOpenHandler.mock.calls[1][0]).toBe(false);
  });

});
