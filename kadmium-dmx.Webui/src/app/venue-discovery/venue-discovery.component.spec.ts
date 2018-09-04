import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatCard, MatCardContent, MatDialog, MatIcon, MatPaginator, MatToolbar, PageEvent } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { APIClient, IFixtureDefinition, IVenueData } from 'api';
import { MessageService } from 'app/services/message.service';
import { UniverseStreamService } from 'app/services/universe-stream.service';
import { MockComponent } from 'ng-mocks';
import { from, Observable, Subscription } from 'rxjs';
import { BusyCardComponent } from '../busy-card/busy-card.component';
import { SidenavToggleComponent } from '../sidenav-toggle/sidenav-toggle.component';
import { FixtureDefinitionTestHelpers } from '../test/fixture-definition-test-helpers';
import { VenueDiscoveryFixtureComponent } from '../venue-discovery-fixture/venue-discovery-fixture.component';
import { VenueDiscoveryUnassignedComponent } from '../venue-discovery-unassigned/venue-discovery-unassigned.component';
import { VenueDiscoveryComponent } from './venue-discovery.component';

describe('VenueDiscoveryComponent', () =>
{
	let component: VenueDiscoveryComponent;
	let fixture: ComponentFixture<VenueDiscoveryComponent>;
	let route: any;
	let universeID: number;
	let venue: IVenueData;
	let subscriptionMock: jasmine.SpyObj<Subscription>;
	let observableMock: jasmine.SpyObj<Observable<Uint8Array>>;
	let fixtureDefinition: IFixtureDefinition;

	beforeEach(async(() =>
	{
		universeID = 1;
		subscriptionMock = jasmine.createSpyObj<Subscription>({ unsubscribe: null });
		observableMock = jasmine.createSpyObj<Observable<Uint8Array>>({ subscribe: subscriptionMock });
		fixtureDefinition = FixtureDefinitionTestHelpers.getRGBFixtureDefinition();

		venue = {
			name: "Active Venue",
			universes: [
				{
					universeID: universeID,
					name: "Active Universe",
					fixtures: []
				}
			]
		};

		route = {
			snapshot: {
				params: {
					universeID: universeID
				}
			}
		};

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
				MockComponent(MatCardContent),
				MockComponent(MatIcon)
			],
			imports: [
				FormsModule
			],
			providers: [
				{ provide: MatDialog, useValue: jasmine.createSpyObj<MatDialog>({ open: null }) },
				{
					provide: APIClient, useValue: jasmine.createSpyObj<APIClient>({
						getActiveVenue: from([venue]),
						getFixtureDefinition: from([fixtureDefinition])
					})
				},
				{ provide: MessageService, useValue: jasmine.createSpyObj<MessageService>({ error: null }) },
				{ provide: ActivatedRoute, useValue: route },
				{ provide: UniverseStreamService, useValue: jasmine.createSpyObj<UniverseStreamService>({ open: observableMock }) }
			]
		});

		TestBed.compileComponents();
	}));

	beforeEach(() =>
	{
		fixture = TestBed.createComponent(VenueDiscoveryComponent);
		component = fixture.componentInstance;
	});

	describe('component', () =>
	{
		it('should create', () =>
		{
			fixture.detectChanges();
			expect(component).toBeTruthy();
		});

		it('should unsubscribe from the universe stream when destroyed', () =>
		{
			fixture.detectChanges();
			fixture.destroy();
			expect(subscriptionMock.unsubscribe).toHaveBeenCalledTimes(1);
		});

		it('should change pages', () =>
		{
			fixture.detectChanges();
			const event: PageEvent = {
				length: 1,
				pageIndex: 1,
				pageSize: component.pageSize
			};
			expect(component.filteredChannels[0].address).toBe(0);
			component.pageEvent(event);
			expect(component.filteredChannels[0].address).toBe(component.pageSize);
			event.pageIndex = 0;
			component.pageEvent(event);
			expect(component.filteredChannels[0].address).toBe(0);
		});
	});

	describe('constructor', () =>
	{
		it('should subscribe to the universe stream service', () =>
		{
			fixture.detectChanges();
			const universeStreamServiceMock = TestBed.get(UniverseStreamService) as jasmine.SpyObj<UniverseStreamService>;
			expect(universeStreamServiceMock.open).toHaveBeenCalledTimes(1);
		});
	});

});
