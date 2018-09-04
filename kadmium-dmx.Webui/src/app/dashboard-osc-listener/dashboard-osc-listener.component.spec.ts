import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCard, MatCardActions, MatCardContent, MatCardSubtitle, MatCardTitle, MatIcon, MatSlideToggle } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { APIClient } from 'api';
import { MessageService } from 'app/services/message.service';
import { MockComponent } from 'ng-mocks';
import { from } from 'rxjs';
import { BusyCardComponent } from '../busy-card/busy-card.component';
import { DashboardOSCListenerComponent } from './dashboard-osc-listener.component';

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
						getOSCListenerEnabled: from([true]),
						setOSCListenerEnabled: from([])
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
		const serviceMock = TestBed.get(APIClient) as jasmine.SpyObj<APIClient>;
		fixture.detectChanges();
		expect(serviceMock.getOSCListenerEnabled).toHaveBeenCalledTimes(1);
	});

	it('should show an error message if the API client throws an error', () =>
	{
		const serviceMock = TestBed.get(APIClient) as jasmine.SpyObj<APIClient>;
		const messageServiceMock = TestBed.get(MessageService) as jasmine.SpyObj<MessageService>;
		const errorMessage = "Error";
		const error = new Error(errorMessage);
		serviceMock.getOSCListenerEnabled.and.throwError(errorMessage);
		fixture.detectChanges();

		expect(messageServiceMock.error).toHaveBeenCalledWith(error);
	});

	it('should toggle the status of the OSC Listener when requested', () =>
	{
		const serviceMock = TestBed.get(APIClient) as jasmine.SpyObj<APIClient>;
		fixture.detectChanges();
		expect(component.enabled).toBe(false);
		component.toggleEnabled();
		expect(serviceMock.setOSCListenerEnabled).toHaveBeenCalledWith({ value: true });
		component.enabled = true;
		component.toggleEnabled();
		expect(serviceMock.setOSCListenerEnabled).toHaveBeenCalledWith({ value: false });
	});

	it('should report an error if the API Client throws one while toggling', () =>
	{
		const errorMessage = "Error";
		const error = new Error(errorMessage);
		const serviceMock = TestBed.get(APIClient) as jasmine.SpyObj<APIClient>;
		const messageServiceMock = TestBed.get(MessageService) as jasmine.SpyObj<MessageService>;
		serviceMock.setOSCListenerEnabled.and.throwError(errorMessage);
		fixture.detectChanges();

		component.toggleEnabled();
		expect(messageServiceMock.error).toHaveBeenCalledWith(error);
	});
});
