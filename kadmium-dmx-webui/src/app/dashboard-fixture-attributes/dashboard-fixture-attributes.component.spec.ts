import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardFixtureComponent } from './dashboard-fixture.component';

describe('DashboardFixtureComponent', () => {
  let component: DashboardFixtureComponent;
  let fixture: ComponentFixture<DashboardFixtureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardFixtureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardFixtureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
