import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardFixtureDetailComponent } from './dashboard-fixture-detail.component';

describe('DashboardFixtureDetailComponent', () => {
  let component: DashboardFixtureDetailComponent;
  let fixture: ComponentFixture<DashboardFixtureDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardFixtureDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardFixtureDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
