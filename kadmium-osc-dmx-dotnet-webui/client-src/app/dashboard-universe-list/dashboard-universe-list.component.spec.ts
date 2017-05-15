import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardUniverseListComponent } from './dashboard-universe-list.component';

describe('DashboardUniverseListComponent', () => {
  let component: DashboardUniverseListComponent;
  let fixture: ComponentFixture<DashboardUniverseListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardUniverseListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardUniverseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
