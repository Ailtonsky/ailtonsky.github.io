import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsCompetenciesComponent } from './skills-competencies.component';

describe('SkillsCompetenciesComponent', () => {
  let component: SkillsCompetenciesComponent;
  let fixture: ComponentFixture<SkillsCompetenciesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SkillsCompetenciesComponent]
    });
    fixture = TestBed.createComponent(SkillsCompetenciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
