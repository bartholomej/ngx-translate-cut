import { async, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { NgxTranslateCutModule } from 'projects/ngx-translate-cut/src/public-api';
import { AppComponent } from './app.component';


describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot(), NgxTranslateCutModule],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should get github link`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.github-logo').href).toContain('https://github.com/bartholomej/ngx-translate-cut');
  }));
});

