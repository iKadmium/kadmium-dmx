import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolsComponent } from './tools.component';
import { MockComponent, MockComponents } from 'ng-mocks';
import { SidenavToggleComponent } from '../sidenav-toggle/sidenav-toggle.component';
import { MatIcon, MatToolbar, MatExpansionPanelTitle, MatExpansionPanelDescription, MatListOption, MatList, MatExpansionPanelHeader, MatSelectionList, MatDivider, MatCard, MatCardContent, MatExpansionPanel, MatFormField } from '@angular/material';
import { BusyCardComponent } from '../busy-card/busy-card.component';
import { APIClient, Settings, GroupData } from 'api';
import { from } from 'rxjs';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MessageService } from 'app/message.service';
import { FileSaverService } from 'app/file-saver.service';
import { By } from '@angular/platform-browser';
import { Attribute } from 'app/tools/tools.component';
import { group } from '@angular/animations';

describe('ToolsComponent', () =>
{
	let component: ToolsComponent;
	let fixture: ComponentFixture<ToolsComponent>;
	let attributes: Attribute[];
	let settings: Settings;
	let groups: GroupData[];

	beforeEach(async(() =>
	{
		attributes = [{ name: "Attribute", min: 0, max: 255, defaultValue: 0, step: 1 }]
		settings = {
			oscPort: 9001
		} as any;

		groups = [
			{ id: "", name: "GroupName", order: 1 }
		];

		TestBed.configureTestingModule({
			declarations: [
				ToolsComponent,
				MockComponent(SidenavToggleComponent),
				MockComponent(MatIcon),
				MockComponent(MatToolbar),
				MockComponent(BusyCardComponent),
				MockComponent(MatExpansionPanel),
				MockComponent(MatExpansionPanelTitle),
				MockComponent(MatExpansionPanelDescription),
				MockComponent(MatExpansionPanelHeader),
				MockComponent(MatListOption),
				MockComponent(MatSelectionList),
				MockComponent(MatDivider),
				MockComponent(MatCard),
				MockComponent(MatCardContent),
				MockComponent(MatFormField)
			],
			imports: [
				NoopAnimationsModule
			],
			providers: [
				{
					provide: APIClient, useValue: jasmine.createSpyObj<APIClient>({
						getGroups: from([groups]),
						getSettings: from([settings])
					})
				},
				{ provide: MessageService, useValue: jasmine.createSpyObj<MessageService>({ error: null }) },
				{ provide: FileSaverService, useValue: jasmine.createSpyObj<FileSaverService>({ save: null }) }
			]
		});
		TestBed.compileComponents();
	}));

	beforeEach(() =>
	{
		fixture = TestBed.createComponent(ToolsComponent);
		component = fixture.componentInstance;
	});

	it('should create', () =>
	{
		fixture.detectChanges();
		expect(component).toBeTruthy();
	});

	it('should request groups', () =>
	{
		let serviceMock = TestBed.get(APIClient) as jasmine.SpyObj<APIClient>;
		fixture.detectChanges();
		expect(serviceMock.getGroups).toHaveBeenCalledTimes(1);
	});

	it('should report an error if getting groups throws one', () =>
	{
		let error = new Error("Error");
		let apiClient = TestBed.get(APIClient) as jasmine.SpyObj<APIClient>;
		let serviceMock = TestBed.get(MessageService) as jasmine.SpyObj<MessageService>;
		apiClient.getGroups.and.throwError(error.message);
		fixture.detectChanges();
		expect(serviceMock.error).toHaveBeenCalledWith(error);
	});

	it('should request settings', () =>
	{
		let serviceMock = TestBed.get(APIClient) as jasmine.SpyObj<APIClient>;
		fixture.detectChanges();
		expect(serviceMock.getSettings).toHaveBeenCalledTimes(1);
	});

	it('should report an error if getting settings throws one', () =>
	{
		let error = new Error("Error");
		let apiClient = TestBed.get(APIClient) as jasmine.SpyObj<APIClient>;
		let serviceMock = TestBed.get(MessageService) as jasmine.SpyObj<MessageService>;
		apiClient.getSettings.and.throwError(error.message);
		fixture.detectChanges();
		expect(serviceMock.error).toHaveBeenCalledWith(error);
	});

	it('should download', () =>
	{
		let filename = "file.json";
		let contents = "contents";
		let serviceMock = TestBed.get(FileSaverService) as jasmine.SpyObj<FileSaverService>;
		component.download(filename, contents);
		expect(serviceMock.save).toHaveBeenCalledWith(filename, contents);
	});

	it('should download the oscii bot script when the button is clicked', () =>
	{
		let fileSaverService = TestBed.get(FileSaverService) as jasmine.SpyObj<FileSaverService>;
		let mockedLists = fixture.debugElement.queryAll(By.directive(MockComponent(MatSelectionList))).map(x => x.componentInstance) as MatSelectionList[];
		let mockedGroupsList = mockedLists[0];
		(mockedGroupsList.selectedOptions as any) = { selected: [] };
		let mockedAttributesList = mockedLists[1];
		(mockedAttributesList.selectedOptions as any) = { selected: [] };

		component.groups = groups;
		component.settings = settings;
		fixture.detectChanges();

		component.attributes = attributes;
		let osciiButton = (fixture.nativeElement as HTMLElement).querySelector(".download-oscii-bot") as HTMLButtonElement;
		osciiButton.click();
		expect(fileSaverService.save).toHaveBeenCalledTimes(1);
	});

	it('should download the oscii bot script when the button is clicked', () =>
	{
		let fileSaverService = TestBed.get(FileSaverService) as jasmine.SpyObj<FileSaverService>;
		let mockedLists = fixture.debugElement.queryAll(By.directive(MockComponent(MatSelectionList))).map(x => x.componentInstance) as MatSelectionList[];
		let mockedGroupsList = mockedLists[0];
		(mockedGroupsList.selectedOptions as any) = { selected: [] };
		let mockedAttributesList = mockedLists[1];
		(mockedAttributesList.selectedOptions as any) = { selected: [] };

		component.groups = groups;
		component.settings = settings;
		fixture.detectChanges();

		component.attributes = attributes;
		let reaperButton = (fixture.nativeElement as HTMLElement).querySelector(".download-reaper") as HTMLButtonElement;
		reaperButton.click();
		expect(fileSaverService.save).toHaveBeenCalledTimes(1);
	});
});
