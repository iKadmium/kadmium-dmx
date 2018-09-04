import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCard, MatCardActions, MatCardContent, MatCardSubtitle, MatCardTitle, MatSlideToggle } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { APIClient } from 'api';
import { MessageService } from 'app/services/message.service';
import { MockComponent } from 'ng-mocks';
import { from } from 'rxjs';
import { BusyCardComponent } from '../busy-card/busy-card.component';
import { DashboardTransmitterSacnComponent } from './dashboard-transmitter-sacn.component';

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
						getSACNTransmitterEnabled: from([true]),
						setSACNTransmitterEnabled: from([])
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
		const serviceMock = TestBed.get(APIClient) as jasmine.SpyObj<APIClient>;
		fixture.detectChanges();
		expect(serviceMock.getSACNTransmitterEnabled).toHaveBeenCalledTimes(1);
	});

	it('should show an error message if the API client throws an error', () =>
	{
		const serviceMock = TestBed.get(APIClient) as jasmine.SpyObj<APIClient>;
		const messageServiceMock = TestBed.get(MessageService) as jasmine.SpyObj<MessageService>;
		const errorMessage = "Error";
		const error = new Error(errorMessage);
		serviceMock.getSACNTransmitterEnabled.and.throwError(errorMessage);
		fixture.detectChanges();

		expect(messageServiceMock.error).toHaveBeenCalledWith(error);
	});

	it('should toggle the status of the OSC Listener when requested', () =>
	{
		const serviceMock = TestBed.get(APIClient) as jasmine.SpyObj<APIClient>;
		fixture.detectChanges();
		expect(component.enabled).toBe(false);
		component.toggleEnabled();
		expect(serviceMock.setSACNTransmitterEnabled).toHaveBeenCalledWith({ value: true });
		component.enabled = true;
		component.toggleEnabled();
		expect(serviceMock.setSACNTransmitterEnabled).toHaveBeenCalledWith({ value: false });
	});

	it('should report an error if the API Client throws one while toggling', () =>
	{
		const errorMessage = "Error";
		const error = new Error(errorMessage);
		const serviceMock = TestBed.get(APIClient) as jasmine.SpyObj<APIClient>;
		const messageServiceMock = TestBed.get(MessageService) as jasmine.SpyObj<MessageService>;
		serviceMock.setSACNTransmitterEnabled.and.throwError(errorMessage);
		fixture.detectChanges();

		component.toggleEnabled();
		expect(messageServiceMock.error).toHaveBeenCalledWith(error);
	});
});
