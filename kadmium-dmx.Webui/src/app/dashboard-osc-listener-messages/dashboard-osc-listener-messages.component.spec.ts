import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardOscListenerMessagesComponent } from './dashboard-osc-listener-messages.component';
import { MockComponent } from 'ng-mocks';
import { SidenavToggleComponent } from '../sidenav-toggle/sidenav-toggle.component';
import { MatToolbar, MatCardContent, MatCard } from '@angular/material';
import { OSCListenerLiveService, OSCListenerData } from '../osclistener-live.service';
import { Observable, Subscriber } from 'rxjs';
import { MessageService } from 'app/message.service';

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
		let value: OSCListenerData = {
			address: "/address",
			recognised: true,
			time: new Date(),
			value: 1.0
		};
		let textValue = `${value.address} => ${value.value}`

		subscriber.next(value);
		expect(component.oscText).toBe(textValue);

		fixture.destroy();
	});

	it('should show an error if opening the listener throws one', () =>
	{
		let serviceMock = TestBed.get(OSCListenerLiveService) as jasmine.SpyObj<OSCListenerLiveService>;
		let snackbarMock = TestBed.get(MessageService) as jasmine.SpyObj<MessageService>;
		let errorMessage = "Error";
		let error = new Error(errorMessage);
		serviceMock.open.and.throwError(errorMessage);
		fixture.detectChanges();

		expect(snackbarMock.error).toHaveBeenCalledWith(error);

		fixture.destroy();
	});

	it('should show an error if the listener throws one', () =>
	{
		let snackbarMock = TestBed.get(MessageService) as jasmine.SpyObj<MessageService>;
		let errorMessage = "Error";
		let error = new Error(errorMessage);
		fixture.detectChanges();

		subscriber.error(error);
		expect(snackbarMock.error).toHaveBeenCalledWith(error);

		fixture.destroy();
	});
});
