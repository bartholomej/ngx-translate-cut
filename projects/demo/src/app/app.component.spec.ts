import { TestBed, waitForAsync } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { NgxTranslateCutOptionsService } from 'projects/ngx-translate-cut/src/lib/ngx-translate-cut.options.service';
import { NgxTranslateCutModule } from 'projects/ngx-translate-cut/src/public-api';
import { AppComponent } from './app.component';


describe('AppComponent', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      providers: [NgxTranslateCutOptionsService],
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

  it(`should get github link`, waitForAsync(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.github-logo').href).toContain('https://github.com/bartholomej/ngx-translate-cut');
  }));
});

