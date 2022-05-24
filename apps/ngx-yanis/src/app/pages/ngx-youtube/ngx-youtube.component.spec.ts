import {ComponentFixture, TestBed} from '@angular/core/testing';

import {NgxYoutubeComponent} from './ngx-youtube.component';
import {NgxYoutubeDemoComponent} from './ngx-youtube-demo/ngx-youtube-demo.component';
import {NgxYoutubeIntroComponent} from './ngx-youtube-intro/ngx-youtube-intro.component';
import {NgxYoutubeInstallationComponent} from './ngx-youtube-installation/ngx-youtube-installation.component';
import {NgxYoutubeUsageComponent} from './ngx-youtube-usage/ngx-youtube-usage.component';
import {NgxYoutubeModule} from './ngx-youtube.module';
import {CodeSnippetModule} from '../../features/code-snippet/code-snippet.module';

describe('NgxYoutubeComponent', () => {
  let component: NgxYoutubeComponent;
  let fixture: ComponentFixture<NgxYoutubeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgxYoutubeComponent, NgxYoutubeDemoComponent, NgxYoutubeIntroComponent, NgxYoutubeInstallationComponent, NgxYoutubeUsageComponent],
      imports: [NgxYoutubeModule, CodeSnippetModule.forRoot()]
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
