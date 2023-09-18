import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RankingTopAllComponent } from './ranking-top-all.component';

describe('RankingTopAllComponent', () => {
  let component: RankingTopAllComponent;
  let fixture: ComponentFixture<RankingTopAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RankingTopAllComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RankingTopAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
