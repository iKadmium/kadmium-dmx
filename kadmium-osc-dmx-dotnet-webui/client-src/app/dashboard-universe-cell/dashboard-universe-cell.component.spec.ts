import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardUniverseCellComponent } from './dashboard-universe-cell.component';

describe('DashboardUniverseCellComponent', () => {
  let component: DashboardUniverseCellComponent;
  let fixture: ComponentFixture<DashboardUniverseCellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardUniverseCellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardUniverseCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
