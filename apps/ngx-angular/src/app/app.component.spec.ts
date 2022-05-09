import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { NgxDetailsModule } from '@ngx-yanis/ngx-details';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [NgxDetailsModule],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
