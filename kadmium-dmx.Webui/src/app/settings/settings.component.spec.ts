import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsComponent } from './settings.component';
import { MockComponent } from 'ng-mocks';
import { BusyCardComponent } from '../busy-card/busy-card.component';
import { SidenavToggleComponent } from '../sidenav-toggle/sidenav-toggle.component';
import { MatIcon, MatToolbar, MatFormField, MatTab, MatCheckbox, MatOption, MatList, MatSelect, MatListItem, MatTabGroup, MatCardContent, MatCard } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { APIClient } from 'api';
import { from } from 'rxjs';
import { MessageService } from 'app/message.service';

describe('SettingsComponent', () =>
{
	let component: SettingsComponent;
	let fixture: ComponentFixture<SettingsComponent>;

	beforeEach(async(() =>
	{
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
			imports: [
				FormsModule
			]
		});

		TestBed.overrideComponent(SettingsComponent, {
			set: {
				providers: [
					{ provide: APIClient, useValue: jasmine.createSpyObj<APIClient>({ getSettings: from([]), getPortsEnttecProTransmitters: from([]) }) },
					{ provide: MessageService, useValue: jasmine.createSpyObj<MessageService>({ error: null }) }
				]
			}
		})

		TestBed.compileComponents();
	}));

	beforeEach(() =>
	{
		fixture = TestBed.createComponent(SettingsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () =>
	{
		expect(component).toBeTruthy();
	});
});
