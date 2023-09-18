import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RankingSchoolComponent } from './ranking-school.component';

describe('RankingSchoolComponent', () => {
  let component: RankingSchoolComponent;
  let fixture: ComponentFixture<RankingSchoolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RankingSchoolComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RankingSchoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
