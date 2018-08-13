import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardOSCListenerComponent } from './dashboard-osc-listener.component';
import { MockComponent } from '../../../node_modules/ng-mocks';
import { MatCard, MatCardTitle, MatCardSubtitle, MatCardContent, MatCardActions, MatIcon, MatSlideToggle, MatSnackBar } from '../../../node_modules/@angular/material';
import { BusyCardComponent } from '../busy-card/busy-card.component';
import { APIClient } from 'api';
import { from } from '../../../node_modules/rxjs';
import { NoopAnimationsModule } from '../../../node_modules/@angular/platform-browser/animations';

describe('DashboardOSCListenerComponent', () =>
{
	let component: DashboardOSCListenerComponent;
	let fixture: ComponentFixture<DashboardOSCListenerComponent>;

	beforeEach(async(() =>
	{
		TestBed.configureTestingModule({
			declarations: [
				DashboardOSCListenerComponent,
				MockComponent(MatCard),
				MockComponent(MatCardTitle),
				MockComponent(MatCardSubtitle),
				MockComponent(MatCardContent),
				MockComponent(MatCardActions),
				MockComponent(BusyCardComponent),
				MockComponent(MatIcon),
				MockComponent(MatSlideToggle),
			],
			providers: [
				{ provide: APIClient, useValue: jasmine.createSpyObj<APIClient>({ enabledOSCListener: from([]) }) }
			],
			imports: [
				NoopAnimationsModule
			]
		})
			.compileComponents();
	}));

	beforeEach(() =>
	{
		fixture = TestBed.createComponent(DashboardOSCListenerComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () =>
	{
		expect(component).toBeTruthy();
	});
});
