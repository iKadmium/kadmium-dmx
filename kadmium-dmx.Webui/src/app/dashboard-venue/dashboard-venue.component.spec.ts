import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
// tslint:disable-next-line:max-line-length
import { MatCard, MatCardActions, MatCardContent, MatCardSubtitle, MatCardTitle, MatDialog, MatDialogRef, MatDivider, MatIcon, MatMenu, MatMenuTrigger } from '@angular/material';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { APIClient } from 'api';
import { MessageService } from 'app/services/message.service';
import { MockComponent } from 'ng-mocks';
import { from } from 'rxjs';
import { BusyCardComponent } from '../busy-card/busy-card.component';
import { VenueNameDialogComponent } from '../venue-name-dialog/venue-name-dialog.component';
import { DashboardVenueComponent } from './dashboard-venue.component';

describe('DashboardVenueComponent', () =>
{
	let component: DashboardVenueComponent;
	let fixture: ComponentFixture<DashboardVenueComponent>;

	let dialogSpy: jasmine.SpyObj<MatDialogRef<VenueNameDialogComponent, string>>;

	beforeEach(async(() =>
	{
		dialogSpy = jasmine.createSpyObj<MatDialogRef<VenueNameDialogComponent, string>>({ afterClosed: from([]) });

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
				RouterTestingModule,
				NoopAnimationsModule
			],
			providers: [
				{
					provide: APIClient, useValue: jasmine.createSpyObj<APIClient>({
						getVenues: from([]),
						getActiveVenue: from([]),
						activateVenue: from([]),
						postVenue: from([])
					})
				},
				{ provide: MessageService, useValue: jasmine.createSpyObj<MessageService>({ error: null, info: null }) },
				{ provide: MatDialog, useValue: jasmine.createSpyObj<MatDialog>({ open: dialogSpy }) }
			]
		});

		TestBed.compileComponents();
	}));

	beforeEach(() =>
	{
		fixture = TestBed.createComponent(DashboardVenueComponent);
		component = fixture.componentInstance;
	});

	it('component should create', () =>
	{
		fixture.detectChanges();
		expect(component).toBeTruthy();
	});

	it('component should request all the venues', () =>
	{
		const serviceMock = TestBed.get(APIClient) as jasmine.SpyObj<APIClient>;
		fixture.detectChanges();
		expect(serviceMock.getVenues).toHaveBeenCalledTimes(1);
	});

	it('component should report an error if it fails to get the venues', () =>
	{
		const error = new Error("Error");
		const apiClientMock = TestBed.get(APIClient) as jasmine.SpyObj<APIClient>;
		const messageServiceMock = TestBed.get(MessageService) as jasmine.SpyObj<MessageService>;
		apiClientMock.getVenues.and.throwError(error.message);
		fixture.detectChanges();
		expect(messageServiceMock.error).toHaveBeenCalledWith(error);
	});

	it('component should add all the venus it receives to a list', fakeAsync(() =>
	{
		const serviceMock = TestBed.get(APIClient) as jasmine.SpyObj<APIClient>;
		const venues: string[] = [
			"Venue 1",
			"Venue 2"
		];
		serviceMock.getVenues.and.returnValue(from([venues]));
		fixture.detectChanges();
		tick();
		expect(component.venueSkeletons).toBe(venues);
	}));

	it('component should call the refresh venue method on startup', () =>
	{
		const spy = spyOn(component, "refreshVenue");
		fixture.detectChanges();
		expect(spy).toHaveBeenCalledTimes(1);
	});

	it('refreshVenue should request the active venue', () =>
	{
		const serviceMock = TestBed.get(APIClient) as jasmine.SpyObj<APIClient>;
		component.refreshVenue();
		expect(serviceMock.getActiveVenue).toHaveBeenCalledTimes(1);
	});

	it('refreshVenue should report an error if it fails to get the active venue', () =>
	{
		const error = new Error("Error");
		const apiClientMock = TestBed.get(APIClient) as jasmine.SpyObj<APIClient>;
		const messageServiceMock = TestBed.get(MessageService) as jasmine.SpyObj<MessageService>;
		apiClientMock.getActiveVenue.and.throwError(error.message);
		component.refreshVenue();
		expect(messageServiceMock.error).toHaveBeenCalledWith(error);
	});

	it('loadVenue should activate the named venue', () =>
	{
		const venueName = "name";
		const serviceMock = TestBed.get(APIClient) as jasmine.SpyObj<APIClient>;
		component.loadVenue(venueName);
		expect(serviceMock.activateVenue).toHaveBeenCalledWith({ name: venueName });
	});

	it('loadVenue should report an error if it fails to load the active venue', () =>
	{
		const venueName = "name";
		const error = new Error("Error");
		const apiClientMock = TestBed.get(APIClient) as jasmine.SpyObj<APIClient>;
		const messageServiceMock = TestBed.get(MessageService) as jasmine.SpyObj<MessageService>;
		apiClientMock.activateVenue.and.throwError(error.message);
		component.loadVenue(venueName);
		expect(messageServiceMock.error).toHaveBeenCalledWith(error);
	});

	it('loadVenue should refresh when the named venue is loaded', fakeAsync(() =>
	{
		const venueName = "name";
		const spy = spyOn(component, "refreshVenue");
		component.loadVenue(venueName);
		tick();
		expect(spy).toHaveBeenCalledTimes(1);
	}));

	it('newVenue should ask the user for a new venue name', () =>
	{
		const dialogServiceMock = TestBed.get(MatDialog) as jasmine.SpyObj<MatDialog>;
		component.newVenue();
		expect(dialogServiceMock.open).toHaveBeenCalledTimes(1);
	});

	it('newVenue should create a new venue with the name if not cancelled', fakeAsync(() =>
	{
		const venueName = "Name";
		const apiClientMock = TestBed.get(APIClient) as jasmine.SpyObj<APIClient>;
		dialogSpy.afterClosed.and.returnValue(from([venueName]));
		component.newVenue();
		tick();
		expect(apiClientMock.postVenue).toHaveBeenCalledWith({ value: jasmine.objectContaining({ name: venueName }) });
	}));

	it('newVenue should try to load the new venue it created', fakeAsync(() =>
	{
		const venueName = "Name";
		const spy = spyOn(component, "loadVenue");
		const apiClientMock = TestBed.get(APIClient) as jasmine.SpyObj<APIClient>;
		dialogSpy.afterClosed.and.returnValue(from([venueName]));
		component.newVenue();
		tick();
		expect(apiClientMock.postVenue).toHaveBeenCalledWith({ value: jasmine.objectContaining({ name: venueName }) });
		tick();
		expect(spy).toHaveBeenCalledWith(venueName);
	}));

	it('newVenue should report an error if it fails to create a new venue', fakeAsync(() =>
	{
		const error = new Error("Error");
		const apiClientMock = TestBed.get(APIClient) as jasmine.SpyObj<APIClient>;
		const messageServiceMock = TestBed.get(MessageService) as jasmine.SpyObj<MessageService>;
		apiClientMock.postVenue.and.throwError(error.message);
		dialogSpy.afterClosed.and.returnValue(from(["name"]));
		component.newVenue();
		tick();
		expect(messageServiceMock.error).toHaveBeenCalledWith(error);
	}));

	it('should NOT create a new venue if cancelled', (done) =>
	{
		const apiClientMock = TestBed.get(APIClient) as jasmine.SpyObj<APIClient>;
		dialogSpy.afterClosed.and.returnValue(from([null]));
		component.newVenue().then(() =>
		{
			expect(apiClientMock.postVenue).toHaveBeenCalledTimes(0);
			done();
		});
	});

	it('template should add every item in venueSkeletons to a dropdown list', () =>
	{
		const venues: string[] = [
			"Venue 1",
			"Venue 2"
		];
		component.venueSkeletons = venues;
		fixture.detectChanges();

		const menu = fixture.debugElement.query(By.css("mat-menu"));
		const buttons = (menu.nativeElement as HTMLElement).querySelectorAll("button");
		expect(buttons.length).toBe(venues.length);
		for (let i = 0; i < venues.length; i++)
		{
			expect(buttons.item(i).innerText).toBe(venues[i]);
		}
	});

});
