import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsComponent } from './settings.component';
import { MockComponent } from 'ng-mocks';
import { BusyCardComponent } from '../busy-card/busy-card.component';
import { SidenavToggleComponent } from '../sidenav-toggle/sidenav-toggle.component';
import { MatIcon, MatToolbar, MatFormField, MatTab, MatCheckbox, MatOption, MatList, MatSelect, MatListItem, MatTabGroup, MatCardContent, MatCard } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { APIClient, Settings } from 'api';
import { from } from 'rxjs';
import { MessageService } from 'app/message.service';

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
						postSettings: from([])
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
		let apiClient = TestBed.get(APIClient) as jasmine.SpyObj<APIClient>;
		fixture.detectChanges();
		expect(apiClient.getSettings).toHaveBeenCalledTimes(1);
	});

	it('should report an error if request settings throws one', () =>
	{
		let error = new Error("Error");
		let apiClient = TestBed.get(APIClient) as jasmine.SpyObj<APIClient>;
		let messageService = TestBed.get(MessageService) as jasmine.SpyObj<MessageService>;
		apiClient.getSettings.and.throwError(error.message);
		fixture.detectChanges();
		expect(messageService.error).toHaveBeenCalledWith(error);
	});

	it('should save', () =>
	{
		let apiClient = TestBed.get(APIClient) as jasmine.SpyObj<APIClient>;
		component.settings = settings;
		component.save();
		expect(apiClient.postSettings).toHaveBeenCalledWith({ value: component.settings });
	});

	it('should report an error if saving throws one', () =>
	{
		let error = new Error("Error");
		let apiClient = TestBed.get(APIClient) as jasmine.SpyObj<APIClient>;
		let messageService = TestBed.get(MessageService) as jasmine.SpyObj<MessageService>;
		apiClient.postSettings.and.throwError(error.message);
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
