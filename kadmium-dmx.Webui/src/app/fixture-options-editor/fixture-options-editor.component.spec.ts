import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from "@angular/forms";
// tslint:disable-next-line:max-line-length
import { MatCheckbox, MatDialogClose, MatDialogRef, MatDivider, MatExpansionPanel, MatExpansionPanelHeader, MatExpansionPanelTitle, MatFormField, MAT_DIALOG_DATA } from '@angular/material';
import { APIClient, IFixtureDefinition } from 'api';
import { MessageService } from '../services/message.service';
import { MockComponent } from 'ng-mocks';
import { from } from 'rxjs';
import { FixtureType } from '../enums/fixture-type.enum';
import { FixtureOptionsTestHelpers } from '../test/fixture-options-test-helpers';
import { FixtureOptionsEditorComponent, FixtureOptionsEditorData } from './fixture-options-editor.component';


describe('FixtureOptionsEditorComponent', () =>
{
	let component: FixtureOptionsEditorComponent;
	let fixture: ComponentFixture<FixtureOptionsEditorComponent>;

	let fixtureContainer: FixtureOptionsEditorData;
	let definition: IFixtureDefinition;

	beforeEach(async(() =>
	{
		fixtureContainer = {
			options: FixtureOptionsTestHelpers.getRestrictedAxis("Pan"),
			type: {
				manufacturer: "Some guy",
				model: "Some thing"
			}
		};

		definition = {
			channels: [],
			colorWheel: [],
			fixtureType: FixtureType.LED,
			movements: [],
			skeleton: {
				manufacturer: fixtureContainer.type.manufacturer,
				model: fixtureContainer.type.model
			}
		};

		TestBed.configureTestingModule({
			declarations: [
				FixtureOptionsEditorComponent,
				MockComponent(MatFormField),
				MockComponent(MatExpansionPanel),
				MockComponent(MatExpansionPanelTitle),
				MockComponent(MatExpansionPanelHeader),
				MockComponent(MatDivider),
				MockComponent(MatCheckbox),
				MockComponent(MatDialogClose)
			],
			providers: [
				{ provide: APIClient, useValue: jasmine.createSpyObj<APIClient>({ getFixtureDefinition: from([definition]) }) },
				{ provide: MatDialogRef, useValue: jasmine.createSpyObj<MatDialogRef<FixtureOptionsEditorComponent>>({ close: null }) },
				{ provide: MessageService, useValue: jasmine.createSpyObj<MessageService>({ error: null }) },
				{ provide: MAT_DIALOG_DATA, useValue: fixtureContainer }
			],
			imports: [ReactiveFormsModule]
		});

		TestBed.compileComponents();
	}));

	beforeEach(() =>
	{
		fixture = TestBed.createComponent(FixtureOptionsEditorComponent);
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
		it('should request the fixture definition', () =>
		{
			const serviceMock = TestBed.get(APIClient) as jasmine.SpyObj<APIClient>;
			fixture.detectChanges();
			expect(serviceMock.getFixtureDefinition).toHaveBeenCalledWith({
				model: definition.skeleton.model,
				manufacturer: definition.skeleton.manufacturer
			});
		});

		it('should report an error if getting the fixture definition throws one', () =>
		{
			const error = new Error("Error");
			const apiClient = TestBed.get(APIClient) as jasmine.SpyObj<APIClient>;
			const messageServiceMock = TestBed.get(MessageService) as jasmine.SpyObj<MessageService>;
			apiClient.getFixtureDefinition.and.throwError(error.message);
			fixture.detectChanges();
			expect(messageServiceMock.error).toHaveBeenCalledWith(error);
		});
	});
});
