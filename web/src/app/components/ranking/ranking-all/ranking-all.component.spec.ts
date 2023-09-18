import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RankingAllComponent } from './ranking-all.component';

describe('RankingAllComponent', () => {
  let component: RankingAllComponent;
  let fixture: ComponentFixture<RankingAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RankingAllComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RankingAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
