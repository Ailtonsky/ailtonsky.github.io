import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AchievementsCertificatesComponent } from './achievements-certificates.component';

describe('AchievementsCertificatesComponent', () => {
  let component: AchievementsCertificatesComponent;
  let fixture: ComponentFixture<AchievementsCertificatesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AchievementsCertificatesComponent]
    });
    fixture = TestBed.createComponent(AchievementsCertificatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
