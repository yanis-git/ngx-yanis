import {ComponentFixture, TestBed} from '@angular/core/testing';

import {NgxYoutubeInstallationComponent} from './ngx-youtube-installation.component';
import {CodeSnippetModule} from '../../../features/code-snippet/code-snippet.module';

describe('NgxYoutubeInstallationComponent', () => {
  let component: NgxYoutubeInstallationComponent;
  let fixture: ComponentFixture<NgxYoutubeInstallationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgxYoutubeInstallationComponent],
      imports: [CodeSnippetModule.forRoot()]
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
