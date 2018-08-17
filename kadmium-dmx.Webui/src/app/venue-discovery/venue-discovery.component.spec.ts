import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VenueDiscoveryComponent } from './venue-discovery.component';
import { MockComponent } from '../../../node_modules/ng-mocks';
import { SidenavToggleComponent } from '../sidenav-toggle/sidenav-toggle.component';
import { MatToolbar, MatPaginator, MatCardContent, MatCard, MatDialog, MatSnackBar } from '../../../node_modules/@angular/material';
import { BusyCardComponent } from '../busy-card/busy-card.component';
import { VenueDiscoveryFixtureComponent } from '../venue-discovery-fixture/venue-discovery-fixture.component';
import { VenueDiscoveryUnassignedComponent } from '../venue-discovery-unassigned/venue-discovery-unassigned.component';
import { APIClient } from 'api';
import { from } from '../../../node_modules/rxjs';
import { ActivatedRoute } from '../../../node_modules/@angular/router';
import { FormsModule } from '../../../node_modules/@angular/forms';

describe('VenueDiscoveryComponent', () =>
{
	let component: VenueDiscoveryComponent;
	let fixture: ComponentFixture<VenueDiscoveryComponent>;
	let route: any;

	beforeEach(async(() =>
	{
		route = {
			snapshot: {
				params: {
					universeID: 1
				}
			}
		}
		TestBed.configureTestingModule({
			declarations: [
				VenueDiscoveryComponent,
				MockComponent(SidenavToggleComponent),
				MockComponent(MatToolbar),
				MockComponent(BusyCardComponent),
				MockComponent(VenueDiscoveryFixtureComponent),
				MockComponent(VenueDiscoveryUnassignedComponent),
				MockComponent(MatPaginator),
				MockComponent(MatCard),
				MockComponent(MatCardContent)
			],
			imports: [
				FormsModule
			]
		});

		TestBed.overrideComponent(VenueDiscoveryComponent, {
			set: {
				providers: [
					{ provide: MatDialog, useValue: jasmine.createSpyObj<MatDialog>({ open: null }) },
					{ provide: APIClient, useValue: jasmine.createSpyObj<APIClient>({ getActiveVenue: from([]) }) },
					{ provide: MatSnackBar, useValue: jasmine.createSpyObj<MatSnackBar>({ open: null }) },
					{ provide: ActivatedRoute, useValue: route }
				]
			}
		})

		TestBed.compileComponents();
	}));

	beforeEach(() =>
	{
		fixture = TestBed.createComponent(VenueDiscoveryComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () =>
	{
		expect(component).toBeTruthy();
	});
});
