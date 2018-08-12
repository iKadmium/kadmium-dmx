import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardFixtureColorComponent } from './dashboard-fixture-color.component';

describe('DashboardFixtureColorComponent', () => {
  let component: DashboardFixtureColorComponent;
  let fixture: ComponentFixture<DashboardFixtureColorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardFixtureColorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardFixtureColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
