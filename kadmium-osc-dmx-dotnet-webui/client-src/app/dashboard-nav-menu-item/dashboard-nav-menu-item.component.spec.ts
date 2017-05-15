import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardNavMenuItemComponent } from './dashboard-nav-menu-item.component';

describe('DashboardNavMenuItemComponent', () => {
  let component: DashboardNavMenuItemComponent;
  let fixture: ComponentFixture<DashboardNavMenuItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardNavMenuItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardNavMenuItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
