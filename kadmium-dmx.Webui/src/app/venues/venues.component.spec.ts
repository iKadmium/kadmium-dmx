import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VenuesComponent } from './venues.component';
import { BusyCardComponent } from '../busy-card/busy-card.component';
import { MockComponent } from '../../../node_modules/ng-mocks';
import { MatFormField, MatIcon, MatToolbar, MatCard, MatCardContent, MatSnackBar, MatDialog } from '../../../node_modules/@angular/material';
import { SidenavToggleComponent } from '../sidenav-toggle/sidenav-toggle.component';
import { RouterTestingModule } from '../../../node_modules/@angular/router/testing';
import { from } from '../../../node_modules/rxjs';
import { APIClient } from 'api';

describe('VenuesComponent', () =>
{
	let component: VenuesComponent;
	let fixture: ComponentFixture<VenuesComponent>;

	beforeEach(async(() =>
	{
		TestBed.configureTestingModule({
			declarations: [
				VenuesComponent,
				MockComponent(BusyCardComponent),
				MockComponent(MatFormField),
				MockComponent(MatIcon),
				MockComponent(MatToolbar),
				MockComponent(MatCard),
				MockComponent(MatCardContent),
				MockComponent(SidenavToggleComponent)
			],
			imports: [
				RouterTestingModule
			]
		});

		TestBed.overrideComponent(VenuesComponent, {
			set: {
				providers: [
					{ provide: APIClient, useValue: jasmine.createSpyObj<APIClient>({ getVenues: from([[]]) }) },
					{ provide: MatSnackBar, useValue: jasmine.createSpyObj<MatSnackBar>({ open: null }) },
					{ provide: MatDialog, useValue: jasmine.createSpyObj<MatDialog>({ open: null }) }
				]
			}
		})

		TestBed.compileComponents();
	}));

	beforeEach(() =>
	{
		fixture = TestBed.createComponent(VenuesComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () =>
	{
		expect(component).toBeTruthy();
	});
});
