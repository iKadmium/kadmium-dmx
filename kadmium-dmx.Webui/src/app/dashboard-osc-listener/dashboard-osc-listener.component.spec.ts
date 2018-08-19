import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardOSCListenerComponent } from './dashboard-osc-listener.component';
import { MockComponent } from 'ng-mocks';
import { MatCard, MatCardTitle, MatCardSubtitle, MatCardContent, MatCardActions, MatIcon, MatSlideToggle } from '@angular/material';
import { BusyCardComponent } from '../busy-card/busy-card.component';
import { APIClient } from 'api';
import { from } from 'rxjs';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MessageService } from 'app/message.service';

describe('DashboardOSCListenerComponent', () =>
{
	let component: DashboardOSCListenerComponent;
	let fixture: ComponentFixture<DashboardOSCListenerComponent>;

	beforeEach(async(() =>
	{
		TestBed.configureTestingModule({
			declarations: [
				DashboardOSCListenerComponent,
				MockComponent(MatCard),
				MockComponent(MatCardTitle),
				MockComponent(MatCardSubtitle),
				MockComponent(MatCardContent),
				MockComponent(MatCardActions),
				MockComponent(BusyCardComponent),
				MockComponent(MatIcon),
				MockComponent(MatSlideToggle),
			],
			providers: [
				{
					provide: APIClient,
					useValue: jasmine.createSpyObj<APIClient>({
						enabledOSCListener: from([true]),
						setEnabledOSCListener: from([])
					})
				},
				{ provide: MessageService, useValue: jasmine.createSpyObj<MessageService>({ error: null }) }
			],
			imports: [
				NoopAnimationsModule
			]
		})
			.compileComponents();
	}));

	beforeEach(() =>
	{
		fixture = TestBed.createComponent(DashboardOSCListenerComponent);
		component = fixture.componentInstance;
	});

	it('should create', () =>
	{
		fixture.detectChanges();
		expect(component).toBeTruthy();
	});

	it('should request the status of the OSC Listener', () =>
	{
		let serviceMock = TestBed.get(APIClient) as jasmine.SpyObj<APIClient>;
		fixture.detectChanges();
		expect(serviceMock.enabledOSCListener).toHaveBeenCalledTimes(1);
	});

	it('should show an error message if the API client throws an error', () =>
	{
		let serviceMock = TestBed.get(APIClient) as jasmine.SpyObj<APIClient>;
		let messageServiceMock = TestBed.get(MessageService) as jasmine.SpyObj<MessageService>;
		let errorMessage = "Error";
		let error = new Error(errorMessage);
		serviceMock.enabledOSCListener.and.throwError(errorMessage);
		fixture.detectChanges();

		expect(messageServiceMock.error).toHaveBeenCalledWith(error);
	});

	it('should toggle the status of the OSC Listener when requested', () =>
	{
		let serviceMock = TestBed.get(APIClient) as jasmine.SpyObj<APIClient>;
		fixture.detectChanges();
		expect(component.enabled).toBe(false);
		component.toggleEnabled();
		expect(serviceMock.setEnabledOSCListener).toHaveBeenCalledWith({ value: true });
		component.enabled = true;
		component.toggleEnabled();
		expect(serviceMock.setEnabledOSCListener).toHaveBeenCalledWith({ value: false });
	});

	it('should report an error if the API Client throws one while toggling', () =>
	{
		let errorMessage = "Error";
		let error = new Error(errorMessage);
		let serviceMock = TestBed.get(APIClient) as jasmine.SpyObj<APIClient>;
		let messageServiceMock = TestBed.get(MessageService) as jasmine.SpyObj<MessageService>;
		serviceMock.setEnabledOSCListener.and.throwError(errorMessage);
		fixture.detectChanges();

		component.toggleEnabled();
		expect(messageServiceMock.error).toHaveBeenCalledWith(error);
	});
});
