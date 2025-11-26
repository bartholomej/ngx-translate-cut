import { provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { beforeEach, describe, expect, it } from 'vitest';
import { NgxTranslateCutOptionsService } from './ngx-translate-cut.options.service';

describe('NgxTranslateCutOptionsService', () => {
  let service: NgxTranslateCutOptionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgxTranslateCutOptionsService, provideZonelessChangeDetection()]
    });
    service = TestBed.inject(NgxTranslateCutOptionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
