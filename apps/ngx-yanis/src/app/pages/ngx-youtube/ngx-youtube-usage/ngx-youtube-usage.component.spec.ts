import {ComponentFixture, TestBed} from '@angular/core/testing';

import {NgxYoutubeUsageComponent} from './ngx-youtube-usage.component';
import {CodeSnippetModule} from '../../../features/code-snippet/code-snippet.module';

describe('NgxYoutubeUsageComponent', () => {
  let component: NgxYoutubeUsageComponent;
  let fixture: ComponentFixture<NgxYoutubeUsageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgxYoutubeUsageComponent],
      imports: [CodeSnippetModule.forRoot()]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxYoutubeUsageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
