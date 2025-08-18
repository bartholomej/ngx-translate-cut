import { provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { NgxTranslateCutOptionsService } from './ngx-translate-cut.options.service';
import { NgxTranslateCutPipe } from './ngx-translate-cut.pipe';

const data = 'first | second | last';

describe('NgxTranslateCutPipe', () => {
  let pipe: NgxTranslateCutPipe;
  let options: NgxTranslateCutOptionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        NgxTranslateCutPipe, // Provide the standalone pipe explicitly
        NgxTranslateCutOptionsService,
        provideZonelessChangeDetection(),
      ],
    });
    options = TestBed.inject(NgxTranslateCutOptionsService);
    pipe = TestBed.inject(NgxTranslateCutPipe);
  });

  it('First', () => {
    expect(pipe.transform(data, 0))
      .toEqual('first');
  });

  it('Second', () => {
    expect(pipe.transform(data, 1))
      .toEqual('second');
  });

  it('Last', () => {
    expect(pipe.transform(data, 2))
      .toEqual('last');
  });

  it('Out of array', () => {
    expect(pipe.transform(data, 3))
      .toEqual('');

    expect(pipe.transform(data, -1))
      .toEqual('');
  });

  it('Empty', () => {
    expect(pipe.transform('', 0))
      .toEqual('');

    expect(pipe.transform(undefined, 0))
      .toEqual('');

    expect(pipe.transform(null, 0))
      .toEqual('');
  });

  describe('Separator', () => {
    const dataWithCustomSeparator = 'first * second * last';

    it('Should use custom separator', () => {
      options.separator = '*';

      expect(pipe.transform(dataWithCustomSeparator, 0))
        .toEqual('first');
      expect(pipe.transform(dataWithCustomSeparator, 1))
        .toEqual('second');
      expect(pipe.transform(dataWithCustomSeparator, 2))
        .toEqual('last');
    });
  });

  describe('Trim', () => {
    it('Should omit trim', () => {
      options.trim = false;

      expect(pipe.transform(data, 0))
        .toEqual('first ');
      expect(pipe.transform(data, 1))
        .toEqual(' second ');
      expect(pipe.transform(data, 2))
        .toEqual(' last');
    });
  });
});
