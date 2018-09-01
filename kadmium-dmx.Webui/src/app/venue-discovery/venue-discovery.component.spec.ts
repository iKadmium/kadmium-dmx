import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VenueDiscoveryComponent } from './venue-discovery.component';
import { MockComponent } from 'ng-mocks';
import { SidenavToggleComponent } from '../sidenav-toggle/sidenav-toggle.component';
import { MatToolbar, MatPaginator, MatCardContent, MatCard, MatDialog } from '@angular/material';
import { BusyCardComponent } from '../busy-card/busy-card.component';
import { VenueDiscoveryFixtureComponent } from '../venue-discovery-fixture/venue-discovery-fixture.component';
import { VenueDiscoveryUnassignedComponent } from '../venue-discovery-unassigned/venue-discovery-unassigned.component';
import { APIClient, ActiveVenue } from 'api';
import { from, Observable, Subscribable, Subscriber } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MessageService } from 'app/message.service';
import { UniverseStreamService } from '../universe-stream.service';

describe('VenueDiscoveryComponent', () =>
{
	let component: VenueDiscoveryComponent;
	let fixture: ComponentFixture<VenueDiscoveryComponent>;
	let route: any;
	let universeID: number;
	let venue: ActiveVenue;
	let universeStreamObservable: Observable<Uint8Array>;
	let universeStreamSubscriber: Subscriber<Uint8Array>;

	beforeEach(async(() =>
	{
		universeID = 1;

		universeStreamObservable = new Observable<Uint8Array>(subscriber =>
		{
			universeStreamSubscriber = subscriber;
		});

		venue = {
			name: "Active Venue",
			universes: [
				{
					universeID: universeID,
					name: "Active Universe",
					fixtures: []
				}
			]
		}

		route = {
			snapshot: {
				params: {
					universeID: universeID
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
			],
			providers: [
				{ provide: MatDialog, useValue: jasmine.createSpyObj<MatDialog>({ open: null }) },
				{ provide: APIClient, useValue: jasmine.createSpyObj<APIClient>({ getActiveVenue: from([venue]) }) },
				{ provide: MessageService, useValue: jasmine.createSpyObj<MessageService>({ error: null }) },
				{ provide: ActivatedRoute, useValue: route },
				{ provide: UniverseStreamService, useValue: jasmine.createSpyObj<UniverseStreamService>({ open: universeStreamObservable }) }
			]
		});

		TestBed.compileComponents();
	}));

	beforeEach(() =>
	{
		fixture = TestBed.createComponent(VenueDiscoveryComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	describe('component', () =>
	{
		it('should create', () =>
		{
			expect(component).toBeTruthy();
		});
	})

	describe('constructor', () =>
	{
		it('should subscribe to the universe stream service', () =>
		{
			let universeStreamServiceMock = TestBed.get(UniverseStreamService) as jasmine.SpyObj<UniverseStreamService>;
			expect(universeStreamServiceMock.open).toHaveBeenCalledTimes(1);
		});
	});

});
