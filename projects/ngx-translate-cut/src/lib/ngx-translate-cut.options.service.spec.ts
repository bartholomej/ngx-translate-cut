import { provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { describe, expect, it } from 'vitest';
import { NgxTranslateCutOptionsService, provideNgxTranslateCut } from './ngx-translate-cut.options.service';

describe('NgxTranslateCutOptionsService', () => {
  it('should be created with default options', () => {
    TestBed.configureTestingModule({
      providers: [provideZonelessChangeDetection()]
    });
    const service = TestBed.inject(NgxTranslateCutOptionsService);
    expect(service).toBeTruthy();
    expect(service.separator).toEqual('|');
    expect(service.trim).toEqual(true);
  });

  it('should support provideNgxTranslateCut custom options', () => {
    TestBed.configureTestingModule({
      providers: [
        provideNgxTranslateCut({ separator: '*', trim: false }),
        provideZonelessChangeDetection()
      ]
    });
    const service = TestBed.inject(NgxTranslateCutOptionsService);
    expect(service).toBeTruthy();
    expect(service.separator).toEqual('*');
    expect(service.trim).toEqual(false);
  });
});

