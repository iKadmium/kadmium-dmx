import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardTransmitterSacnComponent } from './dashboard-transmitter-sacn.component';
import { MockComponent } from 'ng-mocks';
import { BusyCardComponent } from '../busy-card/busy-card.component';
import { MatCard, MatCardTitle, MatCardSubtitle, MatCardContent, MatCardActions, MatSlideToggle } from '@angular/material';
import { APIClient } from 'api';
import { from } from 'rxjs';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MessageService } from 'app/message.service';

describe('DashboardTransmitterSacnComponent', () =>
{
	let component: DashboardTransmitterSacnComponent;
	let fixture: ComponentFixture<DashboardTransmitterSacnComponent>;

	beforeEach(async(() =>
	{
		TestBed.configureTestingModule({
			declarations: [
				DashboardTransmitterSacnComponent,
				MockComponent(BusyCardComponent),
				MockComponent(MatCard),
				MockComponent(MatCardTitle),
				MockComponent(MatCardSubtitle),
				MockComponent(MatCardContent),
				MockComponent(MatCardActions),
				MockComponent(MatSlideToggle),
			],
			providers: [
				{
					provide: APIClient,
					useValue: jasmine.createSpyObj<APIClient>({
						enabledSACNTransmitter: from([true]),
						setEnabledSACNTransmitter: from([])
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
		fixture = TestBed.createComponent(DashboardTransmitterSacnComponent);
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
		expect(serviceMock.enabledSACNTransmitter).toHaveBeenCalledTimes(1);
	});

	it('should show an error message if the API client throws an error', () =>
	{
		let serviceMock = TestBed.get(APIClient) as jasmine.SpyObj<APIClient>;
		let messageServiceMock = TestBed.get(MessageService) as jasmine.SpyObj<MessageService>;
		let errorMessage = "Error";
		let error = new Error(errorMessage);
		serviceMock.enabledSACNTransmitter.and.throwError(errorMessage);
		fixture.detectChanges();

		expect(messageServiceMock.error).toHaveBeenCalledWith(error);
	});

	it('should toggle the status of the OSC Listener when requested', () =>
	{
		let serviceMock = TestBed.get(APIClient) as jasmine.SpyObj<APIClient>;
		fixture.detectChanges();
		expect(component.enabled).toBe(false);
		component.toggleEnabled();
		expect(serviceMock.setEnabledSACNTransmitter).toHaveBeenCalledWith({ value: true });
		component.enabled = true;
		component.toggleEnabled();
		expect(serviceMock.setEnabledSACNTransmitter).toHaveBeenCalledWith({ value: false });
	});

	it('should report an error if the API Client throws one while toggling', () =>
	{
		let errorMessage = "Error";
		let error = new Error(errorMessage);
		let serviceMock = TestBed.get(APIClient) as jasmine.SpyObj<APIClient>;
		let messageServiceMock = TestBed.get(MessageService) as jasmine.SpyObj<MessageService>;
		serviceMock.setEnabledSACNTransmitter.and.throwError(errorMessage);
		fixture.detectChanges();

		component.toggleEnabled();
		expect(messageServiceMock.error).toHaveBeenCalledWith(error);
	});
});
