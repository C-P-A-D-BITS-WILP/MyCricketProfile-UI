import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedMatchScoreComponent } from './detailed-match-score.component';

describe('DetailedMatchScoreComponent', () => {
  let component: DetailedMatchScoreComponent;
  let fixture: ComponentFixture<DetailedMatchScoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailedMatchScoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailedMatchScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
