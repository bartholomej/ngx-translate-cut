import { beforeEach, describe, expect, it } from 'vitest';
import { SEPARATOR } from './ngx-translate-cut.constants';
import { ngxTranslateCutOptionsFactory } from './ngx-translate-cut.options.factory';
import { NgxTranslateCutOptions } from './ngx-translate-cut.options.interface';
import { NgxTranslateCutOptionsService } from './ngx-translate-cut.options.service';

describe('ngxTranslateCutOptionsFactory', () => {
  let factory: (options?: NgxTranslateCutOptions) => NgxTranslateCutOptionsService;

  beforeEach(() => {
    factory = ngxTranslateCutOptionsFactory;
  });

  it('should be created with default options', () => {
    const result = factory();

    expect(result.separator).toEqual(SEPARATOR);
    expect(result.trim).toEqual(true);
  });

  it('should be created with custom options', () => {
    const result = factory({
      separator: '*',
      trim: false,
    });

    expect(result.separator).toEqual('*');
    expect(result.trim).toEqual(false);
  });
});
