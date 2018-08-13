import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardOscListenerMessagesComponent } from './dashboard-osc-listener-messages.component';
import { MockComponent } from '../../../node_modules/ng-mocks';
import { SidenavToggleComponent } from '../sidenav-toggle/sidenav-toggle.component';
import { MatToolbar, MatCardContent, MatCard, MatCardTitle } from '../../../node_modules/@angular/material';

describe('DashboardOscListenerMessagesComponent', () =>
{
	let component: DashboardOscListenerMessagesComponent;
	let fixture: ComponentFixture<DashboardOscListenerMessagesComponent>;

	beforeEach(async(() =>
	{
		TestBed.configureTestingModule({
			declarations: [
				DashboardOscListenerMessagesComponent,
				MockComponent(SidenavToggleComponent),
				MockComponent(MatToolbar),
				MockComponent(MatCard),
				MockComponent(MatCardContent)
			]
		})
			.compileComponents();
	}));

	beforeEach(() =>
	{
		fixture = TestBed.createComponent(DashboardOscListenerMessagesComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () =>
	{
		expect(component).toBeTruthy();
	});
});
