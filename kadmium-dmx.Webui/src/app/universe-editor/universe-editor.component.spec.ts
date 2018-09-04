import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatCard, MatCardActions, MatCardContent, MatCardTitle, MatDialog, MatDialogRef, MatIcon, MatToolbar } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ActivatedRoute } from '@angular/router';
import { APIClient, FixtureData, FixtureDefinitionSkeleton, FixtureOptions, IFixtureDefinition, IGroupData, UniverseData } from 'api';
import { MessageService } from 'app/services/message.service';
import { MockComponent } from 'ng-mocks';
import { from } from 'rxjs';
import { DeleteConfirmDialogComponent } from '../delete-confirm-dialog/delete-confirm-dialog.component';
import { FileReaderService } from '../services/file-reader.service';
import { FileSaverService } from '../services/file-saver.service';
import { FixtureDefinitionSkeletonHelpers } from '../test/fixture-definition-skeleton-helpers';
import { FixtureDefinitionTestHelpers } from '../test/fixture-definition-test-helpers';
import { FixtureOptionsTestHelpers } from '../test/fixture-options-test-helpers';
import { UniverseTestHelpers } from '../test/universe-test-helpers';
// tslint:disable-next-line:max-line-length
import { IUniverseEditorAddMultipleFixturesDialogOutputData, UniverseEditorAddMultipleFixturesDialogComponent } from '../universe-editor-add-multiple-fixtures-dialog/universe-editor-add-multiple-fixtures-dialog.component';
// tslint:disable-next-line:max-line-length
import { UniverseEditorPresetSaveDialogComponentResultData } from '../universe-editor-preset-save-dialog/universe-editor-preset-save-dialog.component';
import { UniverseEditorComponent } from './universe-editor.component';


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
			const serviceMock = TestBed.get(APIClient) as jasmine.SpyObj<APIClient>;
			fixture.detectChanges();
			expect(serviceMock.getFixtureDefinitions).toHaveBeenCalledTimes(1);
		});

		it('should report an error if fetching the fixture definitions throws one', () =>
		{
			const error = new Error("Error");
			const messageServiceMock = TestBed.get(MessageService) as jasmine.SpyObj<MessageService>;
			const apiClientMock = TestBed.get(APIClient) as jasmine.SpyObj<APIClient>;
			apiClientMock.getFixtureDefinitions.and.throwError(error.message);
			fixture.detectChanges();
			expect(messageServiceMock.error).toHaveBeenCalledWith(error);
		});
	});

	describe('delete', () =>
	{
		it('should open a delete dialog', () =>
		{
			const matDialogMock = TestBed.get(MatDialog) as jasmine.SpyObj<MatDialog>;
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
	});

	it('should add fixtures', (done) =>
	{
		const quantity = 3;
		const firstAddress = 1;
		const result: IUniverseEditorAddMultipleFixturesDialogOutputData = {
			address: firstAddress,
			group: groups[0],
			quantity: quantity,
			skeleton: skeletons[0]
		};
		const matDialogMock = TestBed.get(MatDialog) as jasmine.SpyObj<MatDialog>;
		matDialogRef.afterClosed.and.returnValue(from([result]));
		matDialogMock.open.and.returnValue(matDialogRef);

		fixture.detectChanges();

		component.universe.fixtures = [];
		component.addElements().then(() =>
		{
			expect(component.universe.fixtures.length).toBe(quantity);
			const expectedLastAddress = fixtureDefinition.channels.length * (quantity - 1) + firstAddress;
			expect(component.universe.fixtures[quantity - 1].address).toBe(expectedLastAddress);
			done();
		});
	});

	it('should edit fixtures', (done) =>
	{
		const result: FixtureData = {
			address: 5,
			group: groups[0].name,
			options: {} as any,
			type: skeletons[0]
		};
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
		const result: FixtureOptions = FixtureOptionsTestHelpers.getDefaultOptions();
		matDialogRef.afterClosed.and.returnValue(from([result]));
		component.options(fixtureData).then(() =>
		{
			expect(fixtureData.options).toBe(result);
			done();
		});
	});

	it('should save presets', (done) =>
	{
		const result: UniverseEditorPresetSaveDialogComponentResultData = {
			filename: "filename.json",
			fixtures: [fixtureData]
		};
		const fileSaverServiceMock = TestBed.get(FileSaverService) as jasmine.SpyObj<FileSaverService>;
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
		const element = jasmine.createSpyObj<HTMLInputElement>({ click: null });
		component.upload(element);
		expect(element.click).toHaveBeenCalledTimes(1);
	});

	it('filesSelected should call the upload method', (done) =>
	{
		const fileReader = TestBed.get(FileReaderService) as jasmine.SpyObj<FileReaderService>;

		const files: File[] = [new File([], "filename.json")];

		const fixtures = [fixtureData, fixtureData];
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
		const error = new Error("Error");
		const fileReader = TestBed.get(FileReaderService) as jasmine.SpyObj<FileReaderService>;
		const messageServiceMock = TestBed.get(MessageService) as jasmine.SpyObj<MessageService>;

		fileReader.read.and.throwError(error.message);
		const file = new File([JSON.stringify(fixtureData)], "file.json");

		component.uploadFiles([file]);
		expect(messageServiceMock.error).toHaveBeenCalledWith(error);
	});
});
