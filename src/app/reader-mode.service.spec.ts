import { TestBed } from '@angular/core/testing';

import { ReaderModeService } from './reader-mode.service';

describe('ReaderModeService', () => {
  let service: ReaderModeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReaderModeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
