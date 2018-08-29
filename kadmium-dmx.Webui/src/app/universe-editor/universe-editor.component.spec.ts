import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatCard, MatCardActions, MatCardContent, MatCardTitle, MatDialog, MatDialogRef, MatExpansionPanel, MatExpansionPanelActionRow, MatExpansionPanelDescription, MatExpansionPanelHeader, MatExpansionPanelTitle, MatFormField, MatIcon, MatOption, MatSelect, MatToolbar } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { APIClient, FixtureData, FixtureDefinitionSkeleton, FixtureOptions, IFixtureDefinition, IGroupData, UniverseData } from 'api';
import { FixtureType } from 'app/enums/fixture-type.enum';
import { FileReaderService } from 'app/file-reader.service';
import { FileSaverService } from 'app/file-saver.service';
import { MessageService } from 'app/message.service';
import { IUniverseEditorAddMultipleFixturesDialogOutputData, UniverseEditorAddMultipleFixturesDialogComponent } from 'app/universe-editor-add-multiple-fixtures-dialog/universe-editor-add-multiple-fixtures-dialog.component';
import { UniverseEditorPresetSaveDialogComponentResultData } from 'app/universe-editor-preset-save-dialog/universe-editor-preset-save-dialog.component';
import { MockComponent } from 'ng-mocks';
import { from } from 'rxjs';
import { FixtureOptionsTestHelpers } from '../test/fixture-options-test-helpers';
import { UniverseEditorComponent } from './universe-editor.component';
import { UniverseTestHelpers } from '../test/universe-test-helpers';
import { FixtureDefinitionSkeletonHelpers } from '../test/fixture-definition-skeleton-helpers';
import { FixtureDefinitionTestHelpers } from '../test/fixture-definition-test-helpers';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { DeleteConfirmDialogComponent } from 'app/delete-confirm-dialog/delete-confirm-dialog.component';


describe('UniverseEditorComponent', () =>
{
	let component: UniverseEditorComponent;
	let fixture: ComponentFixture<UniverseEditorComponent>;
	let fixtureDefinition: IFixtureDefinition;

	let universe: UniverseData;
	let groups: IGroupData[];
	let skeletons: FixtureDefinitionSkeleton[];
	let matDialogRef: jasmine.SpyObj<MatDialogRef<UniverseEditorAddMultipleFixturesDialogComponent>>;
	let fixtureData: FixtureData;

	let route: any;

	beforeEach(async(() =>
	{
		universe = UniverseTestHelpers.getUniverse();

		groups = [{ name: "Group", order: 1 }];

		skeletons = [FixtureDefinitionSkeletonHelpers.getFixtureDefinitionSkeleton()];

		fixtureDefinition = FixtureDefinitionTestHelpers.getRGBFixtureDefinition();

		fixtureData = {
			address: 1,
			group: groups[0].name,
			options: FixtureOptionsTestHelpers.getDefaultOptions(),
			type: skeletons[0]
		};

		route = {
			snapshot: {
				params: {
					universeID: "1"
				}
			}
		};

		matDialogRef = jasmine.createSpyObj<MatDialogRef<UniverseEditorAddMultipleFixturesDialogComponent>>({ afterClosed: from([]) });

		TestBed.configureTestingModule({
			declarations: [
				UniverseEditorComponent,
				MockComponent(MatToolbar),
				MockComponent(MatIcon),
				MockComponent(MatCard),
				MockComponent(MatCardTitle),
				MockComponent(MatCardContent),
				MockComponent(MatCardActions),
			],
			imports: [
				FormsModule,
				NoopAnimationsModule
			],
			providers: [
				{
					provide: APIClient, useValue: jasmine.createSpyObj<APIClient>({
						getGroups: from([groups]),
						getFixtureDefinitions: from([skeletons]),
						getFixtureDefinition: from([fixtureDefinition])
					})
				},
				{ provide: MessageService, useValue: jasmine.createSpyObj<MessageService>({ error: null }) },
				{ provide: MatDialog, useValue: jasmine.createSpyObj<MatDialog>({ open: matDialogRef }) },
				{ provide: FileSaverService, useValue: jasmine.createSpyObj<FileSaverService>({ save: Promise.resolve() }) },
				{ provide: FileReaderService, useValue: jasmine.createSpyObj<FileReaderService>({ read: null }) },
				{ provide: ActivatedRoute, useValue: route }
			]
		});

		TestBed.compileComponents();
	}));

	beforeEach(() =>
	{
		fixture = TestBed.createComponent(UniverseEditorComponent);
		component = fixture.componentInstance;
		component.groups = groups;
		component.universe = universe;
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
		it('should request fixture definitions', () =>
		{
			let serviceMock = TestBed.get(APIClient) as jasmine.SpyObj<APIClient>;
			fixture.detectChanges();
			expect(serviceMock.getFixtureDefinitions).toHaveBeenCalledTimes(1);
		});

		it('should report an error if fetching the fixture definitions throws one', () =>
		{
			let error = new Error("Error");
			let messageServiceMock = TestBed.get(MessageService) as jasmine.SpyObj<MessageService>;
			let apiClientMock = TestBed.get(APIClient) as jasmine.SpyObj<APIClient>;
			apiClientMock.getFixtureDefinitions.and.throwError(error.message);
			fixture.detectChanges();
			expect(messageServiceMock.error).toHaveBeenCalledWith(error);
		});
	});

	describe('delete', () =>
	{
		it('should open a delete dialog', () =>
		{
			let matDialogMock = TestBed.get(MatDialog) as jasmine.SpyObj<MatDialog>;
			component.universe.fixtures = [fixtureData];
			component.removeElement(0);
			expect(matDialogMock.open).toHaveBeenCalledWith(DeleteConfirmDialogComponent, jasmine.any(Object));
		});

		it('should remove elements', (done) =>
		{
			matDialogRef.afterClosed.and.returnValue(from([true]));
			component.universe.fixtures = [fixtureData];
			component.removeElement(0).then(() =>
			{
				expect(component.universe.fixtures.length).toBe(0);
				done();
			});
		});
	})

	it('should add fixtures', (done) =>
	{
		let quantity = 3;
		let firstAddress = 1;
		let result: IUniverseEditorAddMultipleFixturesDialogOutputData = {
			address: firstAddress,
			group: groups[0],
			quantity: quantity,
			skeleton: skeletons[0]
		};
		let matDialogMock = TestBed.get(MatDialog) as jasmine.SpyObj<MatDialog>;
		matDialogRef.afterClosed.and.returnValue(from([result]));
		matDialogMock.open.and.returnValue(matDialogRef);

		fixture.detectChanges();

		component.universe.fixtures = [];
		component.addElements().then(() =>
		{
			expect(component.universe.fixtures.length).toBe(quantity);
			let expectedLastAddress = fixtureDefinition.channels.length * (quantity - 1) + firstAddress;
			expect(component.universe.fixtures[quantity - 1].address).toBe(expectedLastAddress);
			done();
		});
	});

	it('should edit fixtures', (done) =>
	{
		let result: FixtureData = {
			address: 5,
			group: groups[0].name,
			options: {} as any,
			type: skeletons[0]
		}
		matDialogRef.afterClosed.and.returnValue(from([result]));
		component.universe.fixtures = [fixtureData];
		component.edit(0).then(() =>
		{
			expect(component.universe.fixtures[0].address).toBe(5);
			done();
		});
	});

	it('should edit options', (done) =>
	{
		let result: FixtureOptions = FixtureOptionsTestHelpers.getDefaultOptions();
		matDialogRef.afterClosed.and.returnValue(from([result]));
		component.options(fixtureData).then(() =>
		{
			expect(fixtureData.options).toBe(result);
			done();
		});
	});

	it('should save presets', (done) =>
	{
		let result: UniverseEditorPresetSaveDialogComponentResultData = {
			filename: "filename.json",
			fixtures: [fixtureData]
		};
		let fileSaverServiceMock = TestBed.get(FileSaverService) as jasmine.SpyObj<FileSaverService>;
		component.universe.fixtures = [fixtureData];
		matDialogRef.afterClosed.and.returnValue(from([result]));
		component.savePresetAs().then(() =>
		{
			expect(fileSaverServiceMock.save).toHaveBeenCalledWith(result.filename + ".json", [fixtureData]);
			done();
		});
	});

	it('upload should trigger the given input element', () =>
	{
		let element = jasmine.createSpyObj<HTMLInputElement>({ click: null });
		component.upload(element);
		expect(element.click).toHaveBeenCalledTimes(1);
	});

	it('filesSelected should call the upload method', (done) =>
	{
		let fileReader = TestBed.get(FileReaderService) as jasmine.SpyObj<FileReaderService>;

		let files: File[] = [new File([], "filename.json")];

		let fixtures = [fixtureData, fixtureData];
		fileReader.read.and.returnValue(Promise.resolve(fixtures));

		component.universe.fixtures = [];
		component.uploadFiles(files).then(() =>
		{
			expect(component.universe.fixtures.length).toBe(fixtures.length);
			done();
		});
	});

	it('filesSelected should report an error if uploading throws one', () =>
	{
		let error = new Error("Error");
		let fileReader = TestBed.get(FileReaderService) as jasmine.SpyObj<FileReaderService>;
		let messageServiceMock = TestBed.get(MessageService) as jasmine.SpyObj<MessageService>;

		fileReader.read.and.throwError(error.message);
		let file = new File([JSON.stringify(fixtureData)], "file.json");

		component.uploadFiles([file]);
		expect(messageServiceMock.error).toHaveBeenCalledWith(error);
	});
});
