import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { MatCard, MatCardContent, MatTab, MatTabGroup, MatToolbar } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { ActiveAttribute, ActiveUniverse, APIClient } from 'api';
import { AttributeUpdateData, FixtureStreamService } from '../services/fixture-stream.service';
import { MessageService } from '../services/message.service';
import { UniverseStreamService } from '../services/universe-stream.service';
import { MockComponent } from 'ng-mocks';
import { from, Observable, Subscriber, Subscription } from 'rxjs';
import { BusyCardComponent } from '../busy-card/busy-card.component';
import { DashboardFixtureAttributesComponent } from '../dashboard-fixture-attributes/dashboard-fixture-attributes.component';
import { DashboardFixtureColorComponent } from '../dashboard-fixture-color/dashboard-fixture-color.component';
import { DashboardFixturePreviewComponent } from '../dashboard-fixture-preview/dashboard-fixture-preview.component';
import { SidenavToggleComponent } from '../sidenav-toggle/sidenav-toggle.component';
import { DashboardFixtureDetailComponent } from './dashboard-fixture-detail.component';

describe('DashboardFixtureDetailComponent', () =>
{
	let component: DashboardFixtureDetailComponent;
	let fixture: ComponentFixture<DashboardFixtureDetailComponent>;
	let activeUniverseData: ActiveUniverse;
	let fixtureStreamObservable: Observable<AttributeUpdateData[]>;
	let fixtureStreamSubscriber: Subscriber<AttributeUpdateData[]>;

	let universeStreamObservable: Observable<Uint8Array>;
	let universeStreamSubscriber: Subscriber<Uint8Array>;

	const universeID = 1;
	const fixtureAddress = 1;
	const manufacturer = "Manufacturer";
	const model = "Model";
	const group = "Group";
	const redChannel: ActiveAttribute = {
		name: "Red",
		controlled: true,
		displayMin: 0,
		displayMax: 255,
		dmx: true,
		dmxAddress: 1,
		value: 0
	};

	let paramMap: any;

	beforeEach(async(() =>
	{
		fixtureStreamObservable = new Observable<AttributeUpdateData[]>(internalSubscriber =>
		{
			fixtureStreamSubscriber = internalSubscriber;
		});

		universeStreamObservable = new Observable<Uint8Array>(internalSubscriber =>
		{
			universeStreamSubscriber = internalSubscriber;
		});

		activeUniverseData = {
			name: "Universe Name",
			universeID: universeID,
			fixtures: [
				{
					address: fixtureAddress,
					manufacturer: manufacturer,
					model: model,
					group: group,
					movementAxis: [],
					attributes: [
						redChannel
					],
					colorWheel: []
				}
			]
		};

		paramMap = { universeID: universeID, fixtureAddress: fixtureAddress };

		TestBed.configureTestingModule({
			declarations: [
				DashboardFixtureDetailComponent,
				MockComponent(SidenavToggleComponent),
				MockComponent(BusyCardComponent),
				MockComponent(MatToolbar),
				MockComponent(DashboardFixturePreviewComponent),
				MockComponent(MatCard),
				MockComponent(MatCardContent),
				MockComponent(DashboardFixtureAttributesComponent),
				MockComponent(MatTab),
				MockComponent(DashboardFixtureColorComponent),
				MockComponent(MatTabGroup)
			],
			imports: [
				RouterTestingModule,
				NoopAnimationsModule
			],
			providers: [
				{
					provide: APIClient,
					useValue: jasmine.createSpyObj<APIClient>({
						getActiveUniverse: from([activeUniverseData])
					})
				},
				{ provide: FixtureStreamService, useValue: jasmine.createSpyObj<FixtureStreamService>({ open: fixtureStreamObservable }) },
				{ provide: UniverseStreamService, useValue: jasmine.createSpyObj<UniverseStreamService>({ open: universeStreamObservable }) },
				{ provide: ActivatedRoute, useValue: { snapshot: { paramMap: { get: param => paramMap[param] } } } },
				{ provide: MessageService, useValue: jasmine.createSpyObj<MessageService>({ error: null }) },
			]
		});

		TestBed.compileComponents();
	}));

	beforeEach(() =>
	{
		fixture = TestBed.createComponent(DashboardFixtureDetailComponent);
		component = fixture.componentInstance;
	});

	it('should create', fakeAsync(() =>
	{
		fixture.detectChanges();
		tick();
		expect(component).toBeTruthy();
		expect(component.loading).toBeFalsy();
		fixture.destroy();
	}));

	it('should request the active universe', () =>
	{
		const apiClient = TestBed.get(APIClient) as jasmine.SpyObj<APIClient>;
		fixture.detectChanges();
		expect(apiClient.getActiveUniverse).toHaveBeenCalledTimes(1);
	});

	it('should show an error if it fails to get the active universe', fakeAsync(() =>
	{
		const error = new Error("Error Message");
		const apiClientService = TestBed.get(APIClient) as jasmine.SpyObj<APIClient>;
		const errorService = TestBed.get(MessageService) as jasmine.SpyObj<MessageService>;
		apiClientService.getActiveUniverse.and.throwError(error.message);

		fixture.detectChanges();
		tick();

		expect(errorService.error).toHaveBeenCalledWith(error);
		fixture.destroy();
	}));

	it('should load the active universe', fakeAsync(() =>
	{
		fixture.detectChanges();
		tick();
		expect(component.fixture.manufacturer).toBe(manufacturer);
		expect(component.fixture.model).toBe(model);
		expect(component.fixture.channelNameMap.get(redChannel.name).name).toBe(redChannel.name);
		expect(component.fixture.channelNameMap.get(redChannel.name).address).toBe(redChannel.dmxAddress);
		fixture.destroy();
	}));

	it('should open a fixture stream socket when created', fakeAsync(() =>
	{
		const fixtureStreamService = TestBed.get(FixtureStreamService) as jasmine.SpyObj<FixtureStreamService>;
		fixture.detectChanges();
		tick();
		expect(fixtureStreamService.open).toHaveBeenCalledTimes(1);
		fixture.destroy();
	}));

	it('should show an error if it fails to open the status stream', fakeAsync(() =>
	{
		const errorMessage = "Error Message";
		const error = new Error(errorMessage);
		const fixtureStreamService = TestBed.get(FixtureStreamService) as jasmine.SpyObj<FixtureStreamService>;
		const errorService = TestBed.get(MessageService) as jasmine.SpyObj<MessageService>;
		fixtureStreamService.open.and.throwError(errorMessage);

		fixture.detectChanges();
		tick();

		expect(errorService.error).toHaveBeenCalledWith(error);
		fixture.destroy();
	}));

	it('should unsubscribe from the fixture stream socket when destroyed', fakeAsync(() =>
	{
		const fixtureStreamService = TestBed.get(FixtureStreamService) as jasmine.SpyObj<FixtureStreamService>;
		const mockSubscription = jasmine.createSpyObj<Subscription>({ unsubscribe: null });
		const mockObservable = jasmine.createSpyObj<Observable<AttributeUpdateData[]>>({ subscribe: mockSubscription });
		fixtureStreamService.open.and.returnValue(mockObservable);
		fixture.detectChanges();
		tick();
		fixture.destroy();
		expect(mockSubscription.unsubscribe).toHaveBeenCalledTimes(1);
	}));

	it('should open a universe stream socket when created', fakeAsync(() =>
	{
		const universeStreamService = TestBed.get(UniverseStreamService) as jasmine.SpyObj<UniverseStreamService>;
		fixture.detectChanges();
		tick();
		expect(universeStreamService.open).toHaveBeenCalledTimes(1);
		fixture.destroy();
	}));

	it('should unsubscribe from the universe stream socket when destroyed', fakeAsync(() =>
	{
		const universeStreamService = TestBed.get(UniverseStreamService) as jasmine.SpyObj<UniverseStreamService>;
		const subscriptionMock = jasmine.createSpyObj<Subscription>({ unsubscribe: null });
		const observableMock = jasmine.createSpyObj<Observable<Uint8Array>>({ subscribe: subscriptionMock });
		universeStreamService.open.and.returnValue(observableMock);

		fixture.detectChanges();
		tick();
		fixture.destroy();

		expect(subscriptionMock.unsubscribe).toHaveBeenCalledTimes(1);
	}));

	it('should render at a fixed rate', fakeAsync(() =>
	{
		const previewComponent = jasmine.createSpyObj<DashboardFixturePreviewComponent>({ render: Promise.resolve() });
		fixture.detectChanges();
		component.fixturePreview = previewComponent;
		tick(100);
		expect(previewComponent.render).toHaveBeenCalledTimes(1);
		tick(100);
		expect(previewComponent.render).toHaveBeenCalledTimes(2);
		fixture.destroy();
	}));

	it('should render the data it is given', fakeAsync(() =>
	{
		const dataValue = 128;
		const data = new Uint8Array(512);
		data.fill(dataValue);
		const previewComponent = jasmine.createSpyObj<DashboardFixturePreviewComponent>({ render: Promise.resolve() });

		fixture.detectChanges();
		tick();
		universeStreamSubscriber.next(data);
		component.fixturePreview = previewComponent;
		tick(100);

		expect(previewComponent.render).toHaveBeenCalledWith(data);
		fixture.destroy();
	}));

	it('should update attributes when it receives an attribute update', fakeAsync(() =>
	{
		const attributeName = "Red";
		const attributeValue = 1;

		fixture.detectChanges();
		tick();
		const attribute = component.attributes.find(x => x.name === attributeName);
		expect(attribute.value).toBe(0);
		fixtureStreamSubscriber.next([{ name: attributeName, value: attributeValue }]);
		tick();

		expect(attribute.value).toBe(attributeValue);
		fixture.destroy();
	}));
});
