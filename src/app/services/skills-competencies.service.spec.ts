import { TestBed } from '@angular/core/testing';

import { SkillsCompetenciesService } from './skills-competencies.service';

describe('SkillsCompetenciesService', () => {
  let service: SkillsCompetenciesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SkillsCompetenciesService);
  });

  xit('should be created', () => {
    expect(service).toBeTruthy();
  });
});
