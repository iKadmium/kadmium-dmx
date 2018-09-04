import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatCard, MatCardContent, MatDialog, MatDialogRef, MatFormField, MatIcon, MatToolbar } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { APIClient, IFixtureDefinition, FixtureDefinitionSkeleton } from 'api';
import { DeleteConfirmDialogComponent } from '../delete-confirm-dialog/delete-confirm-dialog.component';
import { FileReaderService } from '../services/file-reader.service';
import { MockComponent } from 'ng-mocks';
import { from } from 'rxjs';
import { BusyCardComponent } from '../busy-card/busy-card.component';
import { SidenavToggleComponent } from '../sidenav-toggle/sidenav-toggle.component';
import { FixtureDefinitionsComponent } from './fixture-definitions.component';
import { FixtureType } from '../enums/fixture-type.enum';
import { MessageService } from '../services/message.service';


describe('FixtureDefinitionsComponent', () =>
{
	let component: FixtureDefinitionsComponent;
	let fixture: ComponentFixture<FixtureDefinitionsComponent>;

	let definition: IFixtureDefinition;
	let dialogObservable: jasmine.SpyObj<MatDialogRef<DeleteConfirmDialogComponent>>;

	beforeEach(async(() =>
	{
		dialogObservable = jasmine.createSpyObj<MatDialogRef<DeleteConfirmDialogComponent>>({ afterClosed: from([]) });

		definition = {
			skeleton: {
				manufacturer: "Manufacturer",
				model: "Model"
			},
			channels: [],
			colorWheel: [],
			fixtureType: FixtureType.LED,
			movements: []
		};

		TestBed.configureTestingModule({
			declarations: [
				FixtureDefinitionsComponent,
				MockComponent(SidenavToggleComponent),
				MockComponent(MatIcon),
				MockComponent(MatFormField),
				MockComponent(MatToolbar),
				MockComponent(BusyCardComponent),
				MockComponent(MatCard),
				MockComponent(MatCardContent),
			],
			imports: [
				ReactiveFormsModule,
				RouterTestingModule,
				NoopAnimationsModule
			],
			providers: [
				{
					provide: APIClient, useValue: jasmine.createSpyObj<APIClient>({
						getFixtureDefinitions: from([[]]),
						postFixtureDefinition: from([]),
						putFixtureDefinition: from([]),
						deleteFixtureDefinition: from([])
					})
				},
				{ provide: MatDialog, useValue: jasmine.createSpyObj<MatDialog>({ open: dialogObservable }) },
				{
					provide: MessageService, useValue: jasmine.createSpyObj<MessageService>({
						error: null,
						info: null
					})
				},
				{ provide: FileReaderService, useValue: jasmine.createSpyObj<FileReaderService>({ read: Promise.resolve(null) }) }
			]
		});

		TestBed.compileComponents();
	}));

	beforeEach(() =>
	{
		fixture = TestBed.createComponent(FixtureDefinitionsComponent);
		component = fixture.componentInstance;
	});

	describe('component', () =>
	{
		it('should create', () =>
		{
			fixture.detectChanges();
			expect(component).toBeTruthy();
		});
	});

	describe('constructor', () =>
	{
		it('should request the fixture definition skeletons', () =>
		{
			const serviceMock = TestBed.get(APIClient) as jasmine.SpyObj<APIClient>;
			fixture.detectChanges();
			expect(serviceMock.getFixtureDefinitions).toHaveBeenCalledTimes(1);
		});

		it('should report an error if requesting the fixture definition skeletons throws one', () =>
		{
			const error = new Error("Error");
			const apiClient = TestBed.get(APIClient) as jasmine.SpyObj<APIClient>;
			const messageServiceMock = TestBed.get(MessageService) as jasmine.SpyObj<MessageService>;
			apiClient.getFixtureDefinitions.and.throwError(error.message);
			fixture.detectChanges();
			expect(messageServiceMock.error).toHaveBeenCalledWith(error);
		});
	});

	describe('filter', () =>
	{
		it('should filter data', () =>
		{
			const first: FixtureDefinitionSkeleton = { manufacturer: "Aaaaa", model: "Aaaaaaa" };
			const second: FixtureDefinitionSkeleton = { manufacturer: "Bbbbbb", model: "Bbbbbb" };
			component.skeletons = [first, second];
			component.applyFilter("a");
			expect(component.filteredData).toContain(first);
			expect(component.filteredData).not.toContain(second);
			component.applyFilter("b");
			expect(component.filteredData).toContain(second);
			expect(component.filteredData).not.toContain(first);
		});
	});

	describe('manufacturers', () =>
	{
		it('should return manufacturers distinctly', () =>
		{
			const manufacturer = "Someone";
			const first: FixtureDefinitionSkeleton = { manufacturer: manufacturer, model: "First" };
			const second: FixtureDefinitionSkeleton = { manufacturer: manufacturer, model: "Second" };
			component.skeletons = [first, second];
			expect(component.manufacturers.length).toBe(1);
			expect(component.manufacturers).toContain(manufacturer);
		});
	});

	describe('upload', () =>
	{
		it('should trigger the given input element', () =>
		{
			const element = jasmine.createSpyObj<HTMLInputElement>({ click: null });
			component.upload(element);
			expect(element.click).toHaveBeenCalledTimes(1);
		});
	});

	describe('filesSelected', () =>
	{
		it('filesSelected should call the upload method', fakeAsync(() =>
		{
			const fileReader = TestBed.get(FileReaderService) as jasmine.SpyObj<FileReaderService>;
			const apiClient = TestBed.get(APIClient) as jasmine.SpyObj<APIClient>;

			const files: File[] = [
				new File([JSON.stringify(definition)], "file.json"),
				new File([JSON.stringify(definition)], "file.json"),
				new File([JSON.stringify(definition)], "file.json"),
			];

			fileReader.read.and.returnValue(Promise.resolve(definition));

			component.filesSelected(files);
			tick();
			tick();
			expect(apiClient.postFixtureDefinition).toHaveBeenCalledWith({ value: definition });
			expect(apiClient.postFixtureDefinition).toHaveBeenCalledTimes(files.length);
		}));
	});

	describe('filesSelected', () =>
	{
		it('filesSelected should report an error if uploading throws one', fakeAsync(() =>
		{
			const error = new Error("Error");
			const fileReader = TestBed.get(FileReaderService) as jasmine.SpyObj<FileReaderService>;
			const messageServiceMock = TestBed.get(MessageService) as jasmine.SpyObj<MessageService>;
			const apiClient = TestBed.get(APIClient) as jasmine.SpyObj<APIClient>;

			fileReader.read.and.returnValue(Promise.resolve(null));
			apiClient.postFixtureDefinition.and.throwError(error.message);
			const file = new File([JSON.stringify(definition)], "file.json");

			component.filesSelected([file]);
			tick();
			tick();
			expect(messageServiceMock.error).toHaveBeenCalledWith(error);
		}));
	});

	describe('delete', () =>
	{
		it('should open a delete confirm dialogue when delete is called', () =>
		{
			const skeleton = definition.skeleton;
			const dialogMock = TestBed.get(MatDialog) as jasmine.SpyObj<MatDialog>;
			component.deleteConfirm(skeleton);
			expect(dialogMock.open).toHaveBeenCalledTimes(1);
		});

		it('should delete the definition if the dialog is confirmed', fakeAsync(() =>
		{
			const skeleton = definition.skeleton;
			const apiClientMock = TestBed.get(APIClient) as jasmine.SpyObj<APIClient>;
			dialogObservable.afterClosed.and.returnValue(from([true]));

			component.deleteConfirm(skeleton);
			tick();
			expect(apiClientMock.deleteFixtureDefinition).toHaveBeenCalledWith({ manufacturer: skeleton.manufacturer, model: skeleton.model });
		}));

		it('should report an error if deletion fails', fakeAsync(() =>
		{
			const error = new Error("Error");
			const skeleton = definition.skeleton;
			const messageServiceMock = TestBed.get(MessageService) as jasmine.SpyObj<MessageService>;
			const apiClientMock = TestBed.get(APIClient) as jasmine.SpyObj<APIClient>;
			dialogObservable.afterClosed.and.returnValue(from([true]));
			apiClientMock.deleteFixtureDefinition.and.throwError(error.message);

			component.deleteConfirm(skeleton);
			tick();
			expect(messageServiceMock.error).toHaveBeenCalledWith(error);
		}));
	});


});
