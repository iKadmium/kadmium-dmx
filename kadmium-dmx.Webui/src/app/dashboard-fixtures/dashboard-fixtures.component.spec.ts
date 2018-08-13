import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardFixturesComponent } from './dashboard-fixtures.component';
import { SidenavToggleComponent } from '../sidenav-toggle/sidenav-toggle.component';
import { MockComponent } from '../../../node_modules/ng-mocks';
import { MatToolbar, MatCard, MatCardContent, MatSnackBar } from '../../../node_modules/@angular/material';
import { BusyCardComponent } from '../busy-card/busy-card.component';
import { DashboardFixtureListComponent } from 'app/dashboard-fixture-list/dashboard-fixture-list.component';
import { RouterTestingModule } from '../../../node_modules/@angular/router/testing';
import { APIClient } from 'api';
import { from, Observable } from '../../../node_modules/rxjs';

describe('DashboardFixturesComponent', () =>
{
	let component: DashboardFixturesComponent;
	let fixture: ComponentFixture<DashboardFixturesComponent>;

	beforeEach(async(() =>
	{
		TestBed.configureTestingModule({
			declarations: [
				DashboardFixturesComponent,
				MockComponent(SidenavToggleComponent),
				MockComponent(MatToolbar),
				MockComponent(BusyCardComponent),
				MockComponent(DashboardFixtureListComponent),
				MockComponent(MatCard),
				MockComponent(MatCardContent)
			],
			imports: [
				RouterTestingModule
			],
			providers: [
				{ provide: APIClient, useValue: jasmine.createSpyObj<APIClient>({ getActiveUniverse: from([]) }) },
				{ provide: MatSnackBar, useValue: jasmine.createSpyObj<MatSnackBar>({ open: null }) }
			]
		})
			.compileComponents();
	}));

	beforeEach(() =>
	{
		fixture = TestBed.createComponent(DashboardFixturesComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () =>
	{
		expect(component).toBeTruthy();
	});
});
