import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { GroupsComponent } from './groups.component';
import { MockComponent, MockDirective } from 'ng-mocks';
import { FormsModule } from '@angular/forms';
import { SidenavToggleComponent } from '../sidenav-toggle/sidenav-toggle.component';
import { MatIcon, MatToolbar, MatFormField, MatCardContent, MatCard } from '@angular/material';
import { BusyCardComponent } from '../busy-card/busy-card.component';
import { UniqueValueValidatorDirective } from '../unique-value-validator.directive';
import { APIClient, GroupData } from 'api';
import { from } from 'rxjs';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MessageService } from 'app/message.service';
import { FileSaverService } from 'app/file-saver.service';
import { FileReaderService } from '../file-reader.service';

describe('GroupsComponent', () =>
{
	let component: GroupsComponent;
	let fixture: ComponentFixture<GroupsComponent>;
	let groups: GroupData[];

	beforeEach(async(() =>
	{
		groups = [{ id: "", name: "first", order: 0 }];
		TestBed.configureTestingModule({
			declarations: [
				GroupsComponent,
				MockComponent(SidenavToggleComponent),
				MockComponent(MatIcon),
				MockComponent(MatToolbar),
				MockComponent(BusyCardComponent),
				MockComponent(MatFormField),
				MockComponent(MatCardContent),
				MockComponent(MatCard),

				MockDirective(UniqueValueValidatorDirective)
			],
			imports: [
				FormsModule,
				NoopAnimationsModule
			],
			providers: [
				{
					provide: APIClient, useValue: jasmine.createSpyObj<APIClient>({
						getGroups: from([groups]),
						putGroups: from([])
					})
				},
				{ provide: FileReaderService, useValue: jasmine.createSpyObj<FileReaderService>({ read: null }) },
				{ provide: FileSaverService, useValue: jasmine.createSpyObj<FileSaverService>({ save: null }) },
				{ provide: MessageService, useValue: jasmine.createSpyObj<MessageService>({ error: null }) }
			]
		});

		TestBed.compileComponents();
	}));

	beforeEach(() =>
	{
		fixture = TestBed.createComponent(GroupsComponent);
		component = fixture.componentInstance;
	});

	it('should create', () =>
	{
		fixture.detectChanges();
		expect(component).toBeTruthy();
	});

	it('should request groups', () =>
	{
		let apiClientMock = TestBed.get(APIClient) as jasmine.SpyObj<APIClient>;
		fixture.detectChanges();
		expect(apiClientMock.getGroups).toHaveBeenCalledTimes(1);
	});

	it('should report an error if requesting groups throws one', () =>
	{
		let error = new Error("Error");
		let messageServiceMock = TestBed.get(MessageService) as jasmine.SpyObj<MessageService>;
		let apiClientMock = TestBed.get(APIClient) as jasmine.SpyObj<APIClient>;
		apiClientMock.getGroups.and.throwError(error.message);
		fixture.detectChanges();
		expect(messageServiceMock.error).toHaveBeenCalledWith(error);
	});

	it('should add a new group', () =>
	{
		component.groups = [];
		component.add();
		expect(component.groups.length).toBe(1);
		expect(component.groups[0].order).toBe(1);
		component.add();
		expect(component.groups.length).toBe(2);
		expect(component.groups[1].order).toBe(2);
	});

	it('should delete groups', () =>
	{
		let group: GroupData = { id: "", name: "Group", order: 1 };
		component.groups = [group];
		component.delete(group);
		expect(component.groups.length).toBe(0);
	});

	it('should swap groups', () =>
	{
		let first: GroupData = { id: "", name: "First", order: 1 };
		let second: GroupData = { id: "", name: "Second", order: 2 };
		component.groups = [first, second];
		component.swap(0, 1);
		expect(component.groups[0]).toBe(second);
		expect(component.groups[1]).toBe(first);
		expect(first.order).toBe(2);
		expect(second.order).toBe(1);
	});

	it('should save', () =>
	{
		let apiClientMock = TestBed.get(APIClient) as jasmine.SpyObj<APIClient>;
		component.groups = groups;
		component.save();
		expect(apiClientMock.putGroups).toHaveBeenCalledWith({ groups: component.groups });
	});

	it('should report an error if saving throws one', () =>
	{
		let error = new Error("Error");
		let apiClientMock = TestBed.get(APIClient) as jasmine.SpyObj<APIClient>;
		let serviceMock = TestBed.get(MessageService) as jasmine.SpyObj<MessageService>;
		apiClientMock.putGroups.and.throwError(error.message);
		component.groups = groups;
		component.save();
		expect(serviceMock.error).toHaveBeenCalledWith(error);
	});

	it('should download the groups', () =>
	{
		let serviceMock = TestBed.get(FileSaverService) as jasmine.SpyObj<FileSaverService>;
		component.groups = groups;
		component.download();
		expect(serviceMock.save).toHaveBeenCalledWith(jasmine.any(String), component.groups);
	});

	it('should trigger the click function when upload is called', () =>
	{
		let inputElement = jasmine.createSpyObj<HTMLInputElement>({ click: null });
		component.upload(inputElement);
		expect(inputElement.click).toHaveBeenCalledTimes(1);
	});

	it('should upload the groups', fakeAsync(() =>
	{
		let file: File = new File([], "filename.json");
		let fileReader = TestBed.get(FileReaderService) as jasmine.SpyObj<FileReaderService>;
		fileReader.read.and.returnValue(Promise.resolve(groups));
		component.groups = [];
		component.filesSelected([file]);
		expect(fileReader.read).toHaveBeenCalledWith(file);
		tick();
		expect(component.groups.length).toBe(groups.length);
		for (let i = 0; i < groups.length; i++)
		{
			expect(component.groups[i]).toBe(groups[i]);
		}
	}));
});
