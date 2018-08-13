import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardVenueComponent } from './dashboard-venue.component';
import { MockComponent } from '../../../node_modules/ng-mocks';
import { BusyCardComponent } from '../busy-card/busy-card.component';
import { MatCardSubtitle, MatCard, MatCardTitle, MatCardContent, MatDivider, MatCardActions, MatIcon, MatMenu, MatMenuTrigger, MatSnackBar, MatDialog } from '../../../node_modules/@angular/material';
import { RouterTestingModule } from '../../../node_modules/@angular/router/testing';
import { APIClient } from 'api';
import { from } from '../../../node_modules/rxjs';

describe('DashboardVenueComponent', () =>
{
	let component: DashboardVenueComponent;
	let fixture: ComponentFixture<DashboardVenueComponent>;

	beforeEach(async(() =>
	{
		TestBed.configureTestingModule({
			declarations: [
				DashboardVenueComponent,
				MockComponent(BusyCardComponent),
				MockComponent(MatIcon),
				MockComponent(MatCard),
				MockComponent(MatCardContent),
				MockComponent(MatCardTitle),
				MockComponent(MatCardSubtitle),
				MockComponent(MatCardActions),
				MockComponent(MatDivider),
				MockComponent(MatMenu),
				MockComponent(MatMenuTrigger)
			],
			imports: [
				RouterTestingModule
			],
			providers: [
				{ provide: APIClient, useValue: jasmine.createSpyObj<APIClient>({ getVenues: from([]) }) },
				{ provide: MatSnackBar, useValue: jasmine.createSpyObj<MatSnackBar>({ open: null }) },
				{ provide: MatDialog, useValue: jasmine.createSpyObj<MatDialog>({ open: null }) }
			]
		})
			.compileComponents();
	}));

	beforeEach(() =>
	{
		fixture = TestBed.createComponent(DashboardVenueComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () =>
	{
		expect(component).toBeTruthy();
	});
});
