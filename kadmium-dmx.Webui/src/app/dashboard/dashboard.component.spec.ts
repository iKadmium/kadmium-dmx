import { DashboardComponent } from './dashboard.component';
import { ComponentFixture, TestBed, fakeAsync, tick } from "@angular/core/testing";
import { async } from "@angular/core/testing";
import { MatToolbar } from '@angular/material';
import { Title } from '@angular/platform-browser';
import { SidenavToggleComponent } from '../sidenav-toggle/sidenav-toggle.component';
import { MockComponent } from 'ng-mocks';
import { DashboardOSCListenerComponent } from '../dashboard-osc-listener/dashboard-osc-listener.component';
import { DashboardVenueComponent } from '../dashboard-venue/dashboard-venue.component';
import { DashboardTransmitterSacnComponent } from '../dashboard-transmitter-sacn/dashboard-transmitter-sacn.component';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { StatusCode } from '../enums/status-code.enum';
import { StatusData, StatusStreamService } from '../services/status-stream.service';
import { MessageService } from '../services/message.service';

describe('DashboardComponent', () =>
{
	let component: DashboardComponent;
	let fixture: ComponentFixture<DashboardComponent>;
	let observable: Observable<StatusData>;
	let subscriber: Subscriber<StatusData>;

	beforeEach(async(() =>
	{
		observable = new Observable<StatusData>(internalSubscriber =>
		{
			subscriber = internalSubscriber;
		});

		TestBed.configureTestingModule({
			declarations: [
				DashboardComponent,
				MockComponent(SidenavToggleComponent),
				MockComponent(MatToolbar),
				MockComponent(DashboardVenueComponent),
				MockComponent(DashboardOSCListenerComponent),
				MockComponent(DashboardTransmitterSacnComponent)
			],
			providers: [
				{ provide: MessageService, useValue: jasmine.createSpyObj<MessageService>({ error: null }) },
				{
					provide: StatusStreamService, useValue: jasmine.createSpyObj<StatusStreamService>({
						open: observable,
						close: null
					})
				},
				{ provide: Title, useValue: jasmine.createSpyObj<Title>({ setTitle: null }) },
			]
		});

		TestBed.compileComponents();
	}));

	beforeEach(() =>
	{
		fixture = TestBed.createComponent(DashboardComponent);
		component = fixture.componentInstance;

	});

	it('should create', () =>
	{
		fixture.detectChanges();
		expect(component).toBeTruthy();
	});

	it('should try to open a status stream when it is created', () =>
	{
		const statusStreamService = TestBed.get(StatusStreamService) as jasmine.SpyObj<StatusStreamService>;
		fixture.detectChanges();

		expect(statusStreamService.open).toHaveBeenCalledTimes(1);
	});

	it('should show an error if it fails to open the status stream', () =>
	{
		const errorMessage = "Error Message";
		const error = new Error(errorMessage);
		const statusStreamService = TestBed.get(StatusStreamService) as jasmine.SpyObj<StatusStreamService>;
		const errorService = TestBed.get(MessageService) as jasmine.SpyObj<MessageService>;
		statusStreamService.open.and.throwError(errorMessage);

		fixture.detectChanges();

		expect(errorService.error).toHaveBeenCalledWith(error);
	});

	it('should unsubscribe from the status stream when it is destroyed', () =>
	{
		const statusStreamService = TestBed.get(StatusStreamService) as jasmine.SpyObj<StatusStreamService>;
		const subscriptionMock = jasmine.createSpyObj<Subscription>({ unsubscribe: null });
		const observableMock = jasmine.createSpyObj<Observable<StatusData>>({ subscribe: subscriptionMock });
		statusStreamService.open.and.returnValue(observableMock);

		fixture.detectChanges();
		fixture.destroy();

		expect(subscriptionMock.unsubscribe).toHaveBeenCalledTimes(1);
	});

	it('should update its status when it receives a status update message', fakeAsync(() =>
	{
		const controller = "OSCListeners";
		const code = StatusCode.Error;
		const message = "Aaaargh";

		fixture.detectChanges();
		tick();

		const updateMessage: StatusData = {
			code: code,
			controller: controller,
			message: message
		};

		subscriber.next(updateMessage);
		tick();
		const status = component.statuses.get(controller);
		expect(status.statusCode).toBe(code);
		expect(status.body).toBe(message);
	}));


});
