/* eslint-disable @typescript-eslint/no-unused-vars */
import { TestBed } from '@angular/core/testing';
import { NgxTranslateCutOptionsService } from './ngx-translate-cut.options.service';
import { NgxTranslateCutPipe } from './ngx-translate-cut.pipe';

// const data: string = [1, 2, 3].map((i) => `text ${i}`).join('|');
const data = 'first | second | last';

describe('NgxTranslateCutPipe', () => {
  let pipe: NgxTranslateCutPipe;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgxTranslateCutOptionsService]
    });
    const options = TestBed.get(NgxTranslateCutOptionsService);
    pipe = new NgxTranslateCutPipe(options);
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
});
