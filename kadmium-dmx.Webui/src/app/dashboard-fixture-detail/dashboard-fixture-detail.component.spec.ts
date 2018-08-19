import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { DashboardFixtureDetailComponent } from './dashboard-fixture-detail.component';
import { SidenavToggleComponent } from '../sidenav-toggle/sidenav-toggle.component';
import { MockComponent } from 'ng-mocks';
import { BusyCardComponent } from '../busy-card/busy-card.component';
import { MatToolbar, MatCard, MatCardContent, MatTab, MatTabGroup } from '@angular/material';
import { DashboardFixturePreviewComponent } from '../dashboard-fixture-preview/dashboard-fixture-preview.component';
import { DashboardFixtureAttributesComponent } from '../dashboard-fixture-attributes/dashboard-fixture-attributes.component';
import { DashboardFixtureColorComponent } from '../dashboard-fixture-color/dashboard-fixture-color.component';
import { APIClient, ActiveUniverse, ActiveAttribute } from 'api';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';
import { UniverseStreamService } from '../universe-stream.service';
import { FixtureStreamService, AttributeUpdateData } from '../fixture-stream.service';
import { Observable, from, Subscriber, Subscription } from 'rxjs';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MessageService } from 'app/message.service';

describe('DashboardFixtureDetailComponent', () =>
{
	let component: DashboardFixtureDetailComponent;
	let fixture: ComponentFixture<DashboardFixtureDetailComponent>;
	let activeUniverseData: ActiveUniverse;
	let fixtureStreamObservable: Observable<AttributeUpdateData[]>;
	let fixtureStreamSubscriber: Subscriber<AttributeUpdateData[]>;

	let universeStreamObservable: Observable<Uint8Array>;
	let universeStreamSubscriber: Subscriber<Uint8Array>;

	let universeID = 1;
	let fixtureAddress = 1;
	let manufacturer = "Manufacturer";
	let model = "Model";
	let group = "Group";
	let redChannel: ActiveAttribute = {
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
				{ provide: FixtureStreamService, useValue: jasmine.createSpyObj<FixtureStreamService>({ open: Promise.resolve(fixtureStreamObservable), close: null }) },
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

	it('should create', () =>
	{
		fixture.detectChanges();
		expect(component).toBeTruthy();
	});

	it('should request the active universe', () =>
	{
		let apiClient = TestBed.get(APIClient) as jasmine.SpyObj<APIClient>;
		fixture.detectChanges();
		expect(apiClient.getActiveUniverse).toHaveBeenCalledTimes(1);
	});

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
		let fixtureStreamService = TestBed.get(FixtureStreamService) as jasmine.SpyObj<FixtureStreamService>;
		fixture.detectChanges();
		tick();
		expect(fixtureStreamService.open).toHaveBeenCalledTimes(1);
		fixture.destroy();
	}));

	it('should show an error if it fails to open the status stream', fakeAsync(() =>
	{
		let errorMessage = "Error Message";
		let error = new Error(errorMessage);
		let fixtureStreamService = TestBed.get(FixtureStreamService) as jasmine.SpyObj<FixtureStreamService>;
		let errorService = TestBed.get(MessageService) as jasmine.SpyObj<MessageService>;
		fixtureStreamService.open.and.throwError(errorMessage);

		fixture.detectChanges();
		tick();

		expect(errorService.error).toHaveBeenCalledWith(error);
		fixture.destroy();
	}));

	it('should close the fixture stream socket when destroyed', fakeAsync(() =>
	{
		let fixtureStreamService = TestBed.get(FixtureStreamService) as jasmine.SpyObj<FixtureStreamService>;
		fixture.detectChanges();
		tick();
		fixture.destroy();
		expect(fixtureStreamService.close).toHaveBeenCalledTimes(1);
	}));

	it('should open a universe stream socket when created', fakeAsync(() =>
	{
		let universeStreamService = TestBed.get(UniverseStreamService) as jasmine.SpyObj<UniverseStreamService>;
		fixture.detectChanges();
		tick();
		expect(universeStreamService.open).toHaveBeenCalledTimes(1);
		fixture.destroy();
	}));

	it('should unsubscribe from the universe stream socket when destroyed', fakeAsync(() =>
	{
		let universeStreamService = TestBed.get(UniverseStreamService) as jasmine.SpyObj<UniverseStreamService>;
		let subscriptionMock = jasmine.createSpyObj<Subscription>({ unsubscribe: null });
		let observableMock = jasmine.createSpyObj<Observable<Uint8Array>>({ subscribe: subscriptionMock });
		universeStreamService.open.and.returnValue(observableMock);

		fixture.detectChanges();
		tick();
		fixture.destroy();

		expect(subscriptionMock.unsubscribe).toHaveBeenCalledTimes(1);
	}));

	it('should render at a fixed rate', fakeAsync(() =>
	{
		let previewComponent = jasmine.createSpyObj<DashboardFixturePreviewComponent>({ render: Promise.resolve() });
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
		let dataValue = 128;
		let data = new Uint8Array(512);
		data.fill(dataValue);
		let previewComponent = jasmine.createSpyObj<DashboardFixturePreviewComponent>({ render: Promise.resolve() });

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
		let attributeName = "Red";
		let attributeValue = 1;

		fixture.detectChanges();
		tick();
		let attribute = component.attributes.find(x => x.name == attributeName);
		expect(attribute.value).toBe(0);
		fixtureStreamSubscriber.next([{ name: attributeName, value: attributeValue }]);
		tick();

		expect(attribute.value).toBe(attributeValue);
		fixture.destroy();
	}));
});
