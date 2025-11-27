import { provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { NgxTranslateCutOptionsService } from 'projects/ngx-translate-cut/src/lib/ngx-translate-cut.options.service';
import { NgxTranslateCutModule } from 'projects/ngx-translate-cut/src/public-api';
import { beforeEach, describe, expect, it } from 'vitest';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgxTranslateCutOptionsService, provideZonelessChangeDetection()],
      imports: [TranslateModule.forRoot(), NgxTranslateCutModule, AppModule],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should get github link`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.github-logo').href).toContain('https://github.com/bartholomej/ngx-translate-cut');
  });
});

