import {ComponentFixture, TestBed} from '@angular/core/testing';

import {NgxDetailsInstallationComponent} from './ngx-details-installation.component';
import {CodeSnippetModule} from '../../../features/code-snippet/code-snippet.module';

describe('NgxDetailsInstallationComponent', () => {
  let component: NgxDetailsInstallationComponent;
  let fixture: ComponentFixture<NgxDetailsInstallationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgxDetailsInstallationComponent],
      imports: [CodeSnippetModule.forRoot()],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxDetailsInstallationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
