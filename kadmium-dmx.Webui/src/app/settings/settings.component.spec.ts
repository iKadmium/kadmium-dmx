import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { FormArray, ReactiveFormsModule } from '@angular/forms';
// tslint:disable-next-line:max-line-length
import { MatCard, MatCardContent, MatCheckbox, MatFormField, MatIcon, MatList, MatListItem, MatOption, MatSelect, MatTab, MatTabGroup, MatToolbar } from '@angular/material';
import { APIClient, Settings } from 'api';
import { DeleteConfirmService } from 'app/services/delete-confirm.service';
import { MockComponent } from 'ng-mocks';
import { from } from 'rxjs';
import { BusyCardComponent } from '../busy-card/busy-card.component';
import { MessageService } from '../services/message.service';
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
				{ provide: MessageService, useValue: jasmine.createSpyObj<MessageService>({ error: null }) },
				{ provide: DeleteConfirmService, useValue: jasmine.createSpyObj<DeleteConfirmService>({ confirm: Promise.resolve(true) }) }
			],
			imports: [
				ReactiveFormsModule
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

	it('should appropriately store the settings it gets', fakeAsync(() =>
	{
		fixture.detectChanges();
		tick();
		expect(component.form.value).toEqual(settings);
	}));

	it('should save', () =>
	{
		const apiClient = TestBed.get(APIClient) as jasmine.SpyObj<APIClient>;
		fixture.detectChanges();
		component.save();
		expect(apiClient.putSettings).toHaveBeenCalledWith({ value: component.form.value });
	});

	it('should report an error if saving throws one', () =>
	{
		const error = new Error("Error");
		const apiClient = TestBed.get(APIClient) as jasmine.SpyObj<APIClient>;
		const messageService = TestBed.get(MessageService) as jasmine.SpyObj<MessageService>;
		apiClient.putSettings.and.throwError(error.message);
		fixture.detectChanges();
		component.save();
		expect(messageService.error).toHaveBeenCalledWith(error);
	});

	it('should add a unicast target', () =>
	{
		fixture.detectChanges();
		const unicastTargets = component.form.get('sacnTransmitter').get('unicast') as FormArray;
		unicastTargets.reset();
		component.addElement();
		expect(unicastTargets.length).toBe(1);
	});

	it('should remove a unicast target', fakeAsync(() =>
	{
		fixture.detectChanges();
		const unicastTargets = component.form.get('sacnTransmitter').get('unicast') as FormArray;
		unicastTargets.reset();
		component.addElement();
		expect(unicastTargets.length).toBe(1);
		component.removeElement(0);
		tick();
		expect(unicastTargets.length).toBe(0);
	}));
});
