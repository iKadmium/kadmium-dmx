import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCard, MatCardContent, MatFormField, MatIcon, MatToolbar } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { APIClient, GroupData, IGroupData } from 'api';
import { MockComponent } from 'ng-mocks';
import { from } from 'rxjs';
import { BusyCardComponent } from '../busy-card/busy-card.component';
import { FileReaderService } from '../services/file-reader.service';
import { FileSaverService } from '../services/file-saver.service';
import { MessageService } from '../services/message.service';
import { SidenavToggleComponent } from '../sidenav-toggle/sidenav-toggle.component';
import { GroupsComponent } from './groups.component';

describe('GroupsComponent', () =>
{
	let component: GroupsComponent;
	let fixture: ComponentFixture<GroupsComponent>;
	let groups: IGroupData[];

	beforeEach(async(() =>
	{
		groups = [{ name: "first", order: 0 }];

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

				// MockDirective(UniqueValueValidatorDirective)
			],
			imports: [
				ReactiveFormsModule,
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
		const apiClientMock = TestBed.get(APIClient) as jasmine.SpyObj<APIClient>;
		fixture.detectChanges();
		expect(apiClientMock.getGroups).toHaveBeenCalledTimes(1);
	});

	it('should report an error if requesting groups throws one', () =>
	{
		const error = new Error("Error");
		const messageServiceMock = TestBed.get(MessageService) as jasmine.SpyObj<MessageService>;
		const apiClientMock = TestBed.get(APIClient) as jasmine.SpyObj<APIClient>;
		apiClientMock.getGroups.and.throwError(error.message);
		fixture.detectChanges();
		expect(messageServiceMock.error).toHaveBeenCalledWith(error);
	});

	it('should add a new group', () =>
	{
		component.groups.controls = [];
		component.add();
		expect(component.groups.controls.length).toBe(1);
		component.add();
		expect(component.groups.controls.length).toBe(2);
	});

	it('should delete groups', () =>
	{
		fixture.detectChanges();
		component.delete(0);
		expect(component.groups.length).toBe(0);
	});

	it('should swap groups', fakeAsync(() =>
	{
		const first: IGroupData = { name: "First", order: 0 };
		const second: IGroupData = { name: "Second", order: 1 };
		groups = [first, second];
		const apiClientMock = TestBed.get(APIClient) as jasmine.SpyObj<APIClient>;
		apiClientMock.getGroups.and.returnValue(from([groups]));

		fixture.detectChanges();
		tick();

		component.swap(0, 1);
		const value = component.getValue();
		expect(value[0]).toEqual(jasmine.objectContaining({ name: second.name }));
		expect(value[1]).toEqual(jasmine.objectContaining({ name: first.name }));
	}));

	it('should save', () =>
	{
		const apiClientMock = TestBed.get(APIClient) as jasmine.SpyObj<APIClient>;
		fixture.detectChanges();
		component.save();
		expect(apiClientMock.putGroups).toHaveBeenCalledWith({ groups: component.getValue() });
	});

	it('should report an error if saving throws one', () =>
	{
		const error = new Error("Error");
		const apiClientMock = TestBed.get(APIClient) as jasmine.SpyObj<APIClient>;
		const serviceMock = TestBed.get(MessageService) as jasmine.SpyObj<MessageService>;
		apiClientMock.putGroups.and.throwError(error.message);
		fixture.detectChanges();
		component.save();
		expect(serviceMock.error).toHaveBeenCalledWith(error);
	});

	it('should download the groups', () =>
	{
		const serviceMock = TestBed.get(FileSaverService) as jasmine.SpyObj<FileSaverService>;
		fixture.detectChanges();
		component.download();
		expect(serviceMock.save).toHaveBeenCalledWith(jasmine.any(String), component.getValue());
	});

	it('should trigger the click function when upload is called', () =>
	{
		const inputElement = jasmine.createSpyObj<HTMLInputElement>({ click: null });
		component.upload(inputElement);
		expect(inputElement.click).toHaveBeenCalledTimes(1);
	});

	it('should upload the groups', fakeAsync(() =>
	{
		const file: File = new File([], "filename.json");
		const apiClientMock = TestBed.get(APIClient) as jasmine.SpyObj<APIClient>;
		apiClientMock.getGroups.and.returnValue(from([[]]));
		const fileReader = TestBed.get(FileReaderService) as jasmine.SpyObj<FileReaderService>;
		fileReader.read.and.returnValue(Promise.resolve(groups));
		fixture.detectChanges();
		component.filesSelected([file]);
		expect(fileReader.read).toHaveBeenCalledWith(file);
		tick();
		const groupsValue = component.getValue();
		expect(groupsValue.length).toBe(groups.length);
		for (let i = 0; i < groups.length; i++)
		{
			expect(groupsValue[i]).toEqual(groups[i]);
		}
	}));
});
