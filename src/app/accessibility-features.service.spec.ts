import { TestBed } from '@angular/core/testing';

import { AccessibilityFeaturesService } from './accessibility-features.service';

describe('AccessibilityFeaturesService', () => {
  let service: AccessibilityFeaturesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccessibilityFeaturesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
