import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCard, MatCardContent, MatToolbar } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
import { ActiveFixture, ActiveUniverse, APIClient } from 'api';
import { MessageService } from '../services/message.service';
import { UniverseStreamService } from '../services/universe-stream.service';
import { MockComponent } from 'ng-mocks';
import { from, Observable, Subscriber, Subscription } from 'rxjs';
import { BusyCardComponent } from '../busy-card/busy-card.component';
import { DashboardFixtureListComponent } from '../dashboard-fixture-list/dashboard-fixture-list.component';
import { PreviewFixture } from '../preview-fixture';
import { SidenavToggleComponent } from '../sidenav-toggle/sidenav-toggle.component';
import { DashboardFixturesComponent } from './dashboard-fixtures.component';

describe('DashboardFixturesComponent', () =>
{
	let component: DashboardFixturesComponent;
	let fixture: ComponentFixture<DashboardFixturesComponent>;

	let universeStreamObservable: Observable<Uint8Array>;
	let universeStreamSubscriber: Subscriber<Uint8Array>;

	let activeUniverse: ActiveUniverse;

	beforeEach(async(() =>
	{
		universeStreamObservable = new Observable<Uint8Array>(internalSubscriber =>
		{
			universeStreamSubscriber = internalSubscriber;
		});

		activeUniverse = {
			name: "Universe",
			universeID: 1,
			fixtures: []
		};

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
				{ provide: APIClient, useValue: jasmine.createSpyObj<APIClient>({ getActiveUniverse: from([activeUniverse]) }) },
				{ provide: MessageService, useValue: jasmine.createSpyObj<MessageService>({ error: null }) },
				{
					provide: UniverseStreamService, useValue: jasmine.createSpyObj<UniverseStreamService>({
						open: universeStreamObservable,
						close: null
					})
				}
			]
		});

		TestBed.compileComponents();
	}));

	beforeEach(() =>
	{
		fixture = TestBed.createComponent(DashboardFixturesComponent);
		component = fixture.componentInstance;
	});

	it('should create', () =>
	{
		fixture.detectChanges();
		expect(component).toBeTruthy();
	});

	it('should unsubscribe from the universe stream socket when destroyed', () =>
	{
		const mockService = TestBed.get(UniverseStreamService) as jasmine.SpyObj<UniverseStreamService>;
		const mockSubscription = jasmine.createSpyObj<Subscription>({ unsubscribe: null });
		const mockObservable = jasmine.createSpyObj<Observable<Uint8Array>>({ subscribe: mockSubscription });
		mockService.open.and.returnValue(mockObservable);

		fixture.detectChanges();
		fixture.destroy();

		expect(mockSubscription.unsubscribe).toHaveBeenCalledTimes(1);
	});

	it('should report an error if the universe stream throws one', () =>
	{
		const errorMessage = "Error Message";
		const error = new Error(errorMessage);

		const mockService = TestBed.get(UniverseStreamService) as jasmine.SpyObj<UniverseStreamService>;
		const errorMock = TestBed.get(MessageService) as jasmine.SpyObj<MessageService>;

		mockService.open.and.throwError(errorMessage);

		fixture.detectChanges();
		fixture.destroy();

		expect(errorMock.error).toHaveBeenCalledWith(error);
	});

	it('should select fixtures', () =>
	{
		const fixtureData: ActiveFixture = {
			address: 1,
			manufacturer: "Manufacturer",
			model: "Model",
			group: "Group",
			attributes: [],
			colorWheel: [],
			movementAxis: []
		};
		const theFixture = new PreviewFixture(fixtureData);
		fixture.detectChanges();
		expect(component.selectedFixture).toBe(undefined);
		component.selectFixture(theFixture);
		expect(component.selectedFixture).toBe(theFixture);
	});
});
