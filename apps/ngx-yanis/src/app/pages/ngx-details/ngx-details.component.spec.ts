import {ComponentFixture, TestBed} from '@angular/core/testing';

import {NgxDetailsComponent} from './ngx-details.component';
import {NgxDetailsModule} from '@ngx-yanis/ngx-details';
import {NgxDetailsIntroductionComponent} from './ngx-details-introduction/ngx-details-introduction.component';
import {NgxDetailsInstallationComponent} from './ngx-details-installation/ngx-details-installation.component';
import {NgxDetailsDemoBasicComponent} from './ngx-details-demo-basic/ngx-details-demo-basic.component';
import {CodeSnippetModule} from '../../features/code-snippet/code-snippet.module';

describe('NgxDetailsComponent', () => {
  let component: NgxDetailsComponent;
  let fixture: ComponentFixture<NgxDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgxDetailsComponent, NgxDetailsIntroductionComponent, NgxDetailsInstallationComponent, NgxDetailsDemoBasicComponent],
      imports: [NgxDetailsModule, CodeSnippetModule.forRoot()],
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
