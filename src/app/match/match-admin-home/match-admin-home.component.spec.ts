import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchAdminHomeComponent } from './match-admin-home.component';

describe('MatchAdminHomeComponent', () => {
  let component: MatchAdminHomeComponent;
  let fixture: ComponentFixture<MatchAdminHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchAdminHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchAdminHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
