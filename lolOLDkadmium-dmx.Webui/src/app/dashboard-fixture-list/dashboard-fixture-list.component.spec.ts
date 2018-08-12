import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardFixtureListComponent } from './dashboard-fixture-list.component';

describe('DashboardFixtureListComponent', () => {
  let component: DashboardFixtureListComponent;
  let fixture: ComponentFixture<DashboardFixtureListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardFixtureListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardFixtureListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
