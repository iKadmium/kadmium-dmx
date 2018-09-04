import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
// tslint:disable-next-line:max-line-length
import { MatCard, MatCardContent, MatCheckbox, MatFormField, MatIcon, MatList, MatListItem, MatOption, MatSelect, MatTab, MatTabGroup, MatToolbar } from '@angular/material';
import { APIClient, Settings } from 'api';
import { MessageService } from 'app/services/message.service';
import { MockComponent } from 'ng-mocks';
import { from } from 'rxjs';
import { BusyCardComponent } from '../busy-card/busy-card.component';
import { SidenavToggleComponent } from '../sidenav-toggle/sidenav-toggle.component';
import { SettingsComponent } from './settings.component';

describe('SettingsComponent', () =>
{
	let component: SettingsComponent;
	let fixture: ComponentFixture<SettingsComponent>;
	let settings: Settings;

	beforeEach(async(() =>
	{
		settings = {
			oscPort: 8001,
			webPort: 5000,
			sacnTransmitter: {
				delay: 0,
				multicast: true,
				uuid: "",
				unicast: []
			},
			enttecProTransmitter: {
				delay: 0,
				port: ""
			}
		};

		TestBed.configureTestingModule({
			declarations: [
				SettingsComponent,
				MockComponent(BusyCardComponent),
				MockComponent(SidenavToggleComponent),
				MockComponent(MatIcon),
				MockComponent(MatToolbar),
				MockComponent(MatFormField),
				MockComponent(MatTab),
				MockComponent(MatCheckbox),
				MockComponent(MatList),
				MockComponent(MatSelect),
				MockComponent(MatOption),
				MockComponent(MatListItem),
				MockComponent(MatTabGroup),
				MockComponent(MatCardContent),
				MockComponent(MatCard)
			],
			providers: [
				{
					provide: APIClient, useValue: jasmine.createSpyObj<APIClient>({
						getSettings: from([settings]),
						putSettings: from([])
					})
				},
				{ provide: MessageService, useValue: jasmine.createSpyObj<MessageService>({ error: null }) }
			],
			imports: [
				FormsModule
			]
		});

		TestBed.compileComponents();
	}));

	beforeEach(() =>
	{
		fixture = TestBed.createComponent(SettingsComponent);
		component = fixture.componentInstance;
	});

	it('should create', () =>
	{
		fixture.detectChanges();
		expect(component).toBeTruthy();
	});

	it('should request settings', () =>
	{
		const apiClient = TestBed.get(APIClient) as jasmine.SpyObj<APIClient>;
		fixture.detectChanges();
		expect(apiClient.getSettings).toHaveBeenCalledTimes(1);
	});

	it('should report an error if request settings throws one', () =>
	{
		const error = new Error("Error");
		const apiClient = TestBed.get(APIClient) as jasmine.SpyObj<APIClient>;
		const messageService = TestBed.get(MessageService) as jasmine.SpyObj<MessageService>;
		apiClient.getSettings.and.throwError(error.message);
		fixture.detectChanges();
		expect(messageService.error).toHaveBeenCalledWith(error);
	});

	it('should save', () =>
	{
		const apiClient = TestBed.get(APIClient) as jasmine.SpyObj<APIClient>;
		component.settings = settings;
		component.save();
		expect(apiClient.putSettings).toHaveBeenCalledWith({ value: component.settings });
	});

	it('should report an error if saving throws one', () =>
	{
		const error = new Error("Error");
		const apiClient = TestBed.get(APIClient) as jasmine.SpyObj<APIClient>;
		const messageService = TestBed.get(MessageService) as jasmine.SpyObj<MessageService>;
		apiClient.putSettings.and.throwError(error.message);
		component.settings = settings;
		component.save();
		expect(messageService.error).toHaveBeenCalledWith(error);
	});

	it('should add a unicast target', () =>
	{
		component.fakeTargets = [];
		component.addElement();
		expect(component.fakeTargets.length).toBe(1);
	});

	it('should remove a unicast target', () =>
	{
		component.fakeTargets = [{ target: "somewhere" }];
		component.removeElement(0);
		expect(component.fakeTargets.length).toBe(0);
	});
});
