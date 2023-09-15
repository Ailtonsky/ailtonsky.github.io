import { TestBed } from '@angular/core/testing';

import { AchievementsCertificatesService } from './achievements-certificates.service';

describe('AchievementsCertificatesService', () => {
  let service: AchievementsCertificatesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AchievementsCertificatesService);
  });

  xit('should be created', () => {
    expect(service).toBeTruthy();
  });
});
