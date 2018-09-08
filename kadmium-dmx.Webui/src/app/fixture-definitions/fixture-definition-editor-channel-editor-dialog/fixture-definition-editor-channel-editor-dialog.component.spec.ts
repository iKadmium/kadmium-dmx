import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocomplete, MatFormField, MatOption, MatSelect, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MockComponent, MockDirective } from 'ng-mocks';
import { FixtureDefinitionEditorChannelEditorDialogComponent } from './fixture-definition-editor-channel-editor-dialog.component';
import { MatAutocompleteTrigger } from '@angular/material/autocomplete';
import { IDMXChannelData } from 'api';


describe('FixtureDefinitionEditorChannelEditorDialogComponent', () =>
{
	let component: FixtureDefinitionEditorChannelEditorDialogComponent;
	let fixture: ComponentFixture<FixtureDefinitionEditorChannelEditorDialogComponent>;
	let inputData: IDMXChannelData;

	beforeEach(async(() =>
	{
		inputData = {
			name: "Channel",
			address: 1,
			min: 0,
			max: 255
		};

		TestBed.configureTestingModule({
			declarations: [
				FixtureDefinitionEditorChannelEditorDialogComponent,
				MockComponent(MatFormField),
				MockComponent(MatOption),
				MockComponent(MatSelect),
				MockComponent(MatAutocomplete),
				MockDirective(MatAutocompleteTrigger)
			],
			imports: [
				ReactiveFormsModule
			],
			providers: [
				{ provide: MatDialogRef, useValue: jasmine.createSpyObj<MatDialogRef<FixtureDefinitionEditorChannelEditorDialogComponent>>({ close: null }) },
				{ provide: MAT_DIALOG_DATA, useValue: inputData }
			]
		});
		TestBed.compileComponents();
	}));

	beforeEach(() =>
	{
		fixture = TestBed.createComponent(FixtureDefinitionEditorChannelEditorDialogComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () =>
	{
		expect(component).toBeTruthy();
	});
});
