import { TestBed } from '@angular/core/testing';

import { NgxTranslateCutService } from './ngx-translate-cut.service';

describe('NgxTranslateCutService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxTranslateCutService = TestBed.get(NgxTranslateCutService);
    expect(service).toBeTruthy();
  });
});
