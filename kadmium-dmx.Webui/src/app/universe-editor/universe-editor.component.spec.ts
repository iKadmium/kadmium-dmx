import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { UniverseEditorComponent } from './universe-editor.component';
import { FormsModule } from '@angular/forms';
import { MatFormField, MatIcon, MatToolbar, MatExpansionPanelTitle, MatExpansionPanel, MatSelect, MatOption, MatExpansionPanelActionRow, MatExpansionPanelDescription, MatExpansionPanelHeader, MatSnackBar, MatDialog, MatCardTitle, MatCardContent, MatCardActions, MatCard, MatDialogRef } from '@angular/material';
import { MockComponent } from 'ng-mocks';
import { APIClient, FixtureDefinitionSkeleton, GroupData, UniverseData, FixtureData, FixtureDefinition, FixtureType, FixtureOptions } from 'api';
import { MessageService } from 'app/message.service';
import { from } from 'rxjs';
import { IUniverseEditorAddMultipleFixturesDialogOutputData, UniverseEditorAddMultipleFixturesDialogComponent } from 'app/universe-editor-add-multiple-fixtures-dialog/universe-editor-add-multiple-fixtures-dialog.component';
import { FixtureEditorComponent } from '../fixture-editor/fixture-editor.component';
import { UniverseEditorPresetSaveDialogComponentResultData } from 'app/universe-editor-preset-save-dialog/universe-editor-preset-save-dialog.component';
import { FileSaverService } from 'app/file-saver.service';
import { FileReaderService } from 'app/file-reader.service';

describe('UniverseEditorComponent', () =>
{
	let component: UniverseEditorComponent;
	let fixture: ComponentFixture<UniverseEditorComponent>;
	let fixtureDefinition: FixtureDefinition;

	let universe: UniverseData;
	let groups: GroupData[];
	let skeletons: FixtureDefinitionSkeleton[];
	let matDialogRef: jasmine.SpyObj<MatDialogRef<UniverseEditorAddMultipleFixturesDialogComponent>>;
	let fixtureData: FixtureData;

	beforeEach(async(() =>
	{
		universe = {
			fixtures: [],
			universeID: 1,
			name: "Universe"
		};

		groups = [{ id: "", name: "Group", order: 1 }];

		skeletons = [{ manufacturer: "Manufacturer", model: "Model" }];

		fixtureDefinition = {
			id: "",
			skeleton: skeletons[0],
			movements: [],
			fixtureType: FixtureType.LED,
			colorWheel: [],
			channels: [
				{ address: 1, min: 0, max: 255, name: "Red" },
				{ address: 2, min: 0, max: 255, name: "Green" },
				{ address: 3, min: 0, max: 255, name: "Blue" }
			]
		};

		fixtureData = {
			address: 1,
			group: groups[0].name,
			options: {
				axisInversions: [],
				axisRestrictions: [],
				maxBrightness: 1
			},
			type: skeletons[0]
		};

		matDialogRef = jasmine.createSpyObj<MatDialogRef<UniverseEditorAddMultipleFixturesDialogComponent>>({ afterClosed: from([]) });

		TestBed.configureTestingModule({
			declarations: [
				UniverseEditorComponent,
				MockComponent(MatFormField),
				MockComponent(MatIcon),
				MockComponent(MatToolbar),
				MockComponent(MatExpansionPanelTitle),
				MockComponent(MatExpansionPanel),
				MockComponent(MatExpansionPanelActionRow),
				MockComponent(MatExpansionPanelDescription),
				MockComponent(MatExpansionPanelHeader),
				MockComponent(MatSelect),
				MockComponent(MatOption),
				MockComponent(MatFormField),
				MockComponent(MatCardTitle),
				MockComponent(MatCardContent),
				MockComponent(MatCardActions),
				MockComponent(MatCard)
			],
			imports: [
				FormsModule
			],
			providers: [
				{
					provide: APIClient, useValue: jasmine.createSpyObj<APIClient>({
						getFixtureDefinitions: from([skeletons]),
						getFixtureDefinition: from([fixtureDefinition])
					})
				},
				{ provide: MessageService, useValue: jasmine.createSpyObj<MessageService>({ error: null }) },
				{ provide: MatDialog, useValue: jasmine.createSpyObj<MatDialog>({ open: matDialogRef }) },
				{ provide: FileSaverService, useValue: jasmine.createSpyObj<FileSaverService>({ save: Promise.resolve() }) },
				{ provide: FileReaderService, useValue: jasmine.createSpyObj<FileReaderService>({ read: null }) }
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

	it('should create', () =>
	{
		fixture.detectChanges();
		expect(component).toBeTruthy();
	});

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

	it('should remove elements', () =>
	{
		component.universe.fixtures = [fixtureData];
		component.removeElement(0);
		expect(component.universe.fixtures.length).toBe(0);
	});

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
		let result: FixtureOptions = {
			axisInversions: [],
			axisRestrictions: [],
			maxBrightness: 0.1
		}
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
