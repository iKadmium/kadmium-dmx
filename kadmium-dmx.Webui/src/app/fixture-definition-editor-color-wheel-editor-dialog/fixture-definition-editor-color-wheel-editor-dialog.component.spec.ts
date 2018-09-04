import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef, MatFormField, MAT_DIALOG_DATA } from '@angular/material';
import { IColorWheelEntryData } from 'api';
import { MockComponent } from 'ng-mocks';
import { ColorWheelTestHelpers } from '../test/color-wheel-test-helpers';
import { FixtureDefinitionEditorColorWheelEditorDialogComponent } from './fixture-definition-editor-color-wheel-editor-dialog.component';

describe('FixtureDefinitionEditorColorWheelEditorDialogComponent', () =>
{
	let component: FixtureDefinitionEditorColorWheelEditorDialogComponent;
	let fixture: ComponentFixture<FixtureDefinitionEditorColorWheelEditorDialogComponent>;
	let data: IColorWheelEntryData;

	beforeEach(async(() =>
	{
		data = ColorWheelTestHelpers.getColorWheelEntry("Black");

		TestBed.configureTestingModule({
			declarations: [
				FixtureDefinitionEditorColorWheelEditorDialogComponent,
				MockComponent(MatFormField)
			],
			imports: [
				ReactiveFormsModule
			],
			providers: [
				{
					provide: MatDialogRef, useValue: jasmine.createSpyObj<MatDialogRef<FixtureDefinitionEditorColorWheelEditorDialogComponent>>({
						close: null
					})
				},
				{ provide: MAT_DIALOG_DATA, useValue: data }
			]
		});

		TestBed.compileComponents();
	}));

	beforeEach(() =>
	{
		fixture = TestBed.createComponent(FixtureDefinitionEditorColorWheelEditorDialogComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () =>
	{
		expect(component).toBeTruthy();
	});
});
