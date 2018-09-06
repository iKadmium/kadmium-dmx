import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCard, MatCardContent, MatToolbar } from '@angular/material';
import { MessageService } from '../services/message.service';
import { OSCListenerData, OSCListenerLiveService } from '../services/osclistener-live.service';
import { MockComponent } from 'ng-mocks';
import { Observable, Subscriber } from 'rxjs';
import { SidenavToggleComponent } from '../sidenav-toggle/sidenav-toggle.component';
import { DashboardOscListenerMessagesComponent } from './dashboard-osc-listener-messages.component';

describe('DashboardOscListenerMessagesComponent', () =>
{
	let component: DashboardOscListenerMessagesComponent;
	let fixture: ComponentFixture<DashboardOscListenerMessagesComponent>;

	let observable: Observable<OSCListenerData>;
	let subscriber: Subscriber<OSCListenerData>;

	beforeEach(async(() =>
	{
		observable = new Observable<OSCListenerData>(subscriberInstance =>
		{
			subscriber = subscriberInstance;
		});
		TestBed.configureTestingModule({
			declarations: [
				DashboardOscListenerMessagesComponent,
				MockComponent(SidenavToggleComponent),
				MockComponent(MatToolbar),
				MockComponent(MatCard),
				MockComponent(MatCardContent)
			],
			providers: [
				{ provide: OSCListenerLiveService, useValue: jasmine.createSpyObj<OSCListenerLiveService>({ open: observable }) },
				{ provide: MessageService, useValue: jasmine.createSpyObj<MessageService>({ error: null }) }
			]
		});


		TestBed.compileComponents();
	}));

	beforeEach(() =>
	{
		fixture = TestBed.createComponent(DashboardOscListenerMessagesComponent);
		component = fixture.componentInstance;
	});

	it('should create', () =>
	{
		fixture.detectChanges();
		expect(component).toBeTruthy();

		fixture.destroy();
	});

	it('should add messages to the text when it receives them', () =>
	{
		fixture.detectChanges();
		const value: OSCListenerData = {
			address: "/address",
			recognised: true,
			time: new Date(),
			value: 1.0
		};
		const textValue = `${value.address} => ${value.value}`;

		subscriber.next(value);
		expect(component.oscText).toBe(textValue);

		fixture.destroy();
	});

	it('should show an error if opening the listener throws one', () =>
	{
		const serviceMock = TestBed.get(OSCListenerLiveService) as jasmine.SpyObj<OSCListenerLiveService>;
		const snackbarMock = TestBed.get(MessageService) as jasmine.SpyObj<MessageService>;
		const errorMessage = "Error";
		const error = new Error(errorMessage);
		serviceMock.open.and.throwError(errorMessage);
		fixture.detectChanges();

		expect(snackbarMock.error).toHaveBeenCalledWith(error);

		fixture.destroy();
	});

	it('should show an error if the listener throws one', () =>
	{
		const snackbarMock = TestBed.get(MessageService) as jasmine.SpyObj<MessageService>;
		const errorMessage = "Error";
		const error = new Error(errorMessage);
		fixture.detectChanges();

		subscriber.error(error);
		expect(snackbarMock.error).toHaveBeenCalledWith(error);

		fixture.destroy();
	});
});
