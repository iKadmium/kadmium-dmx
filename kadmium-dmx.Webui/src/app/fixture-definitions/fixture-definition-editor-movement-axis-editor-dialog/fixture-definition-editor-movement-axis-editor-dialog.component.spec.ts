import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FixtureDefinitionEditorMovementAxisEditorDialogComponent } from './fixture-definition-editor-movement-axis-editor-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MockComponent } from 'ng-mocks';
import { MatFormField, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FixtureDefinitionEditorChannelEditorDialogComponent } from '../fixture-definition-editor-channel-editor-dialog/fixture-definition-editor-channel-editor-dialog.component';
import { IMovementAxisData } from 'api';

describe('FixtureDefinitionEditorMovementAxisEditorDialogComponent', () =>
{
	let component: FixtureDefinitionEditorMovementAxisEditorDialogComponent;
	let fixture: ComponentFixture<FixtureDefinitionEditorMovementAxisEditorDialogComponent>;
	let data: IMovementAxisData;

	beforeEach(async(() =>
	{
		data = {
			name: "Pan",
			min: -270,
			max: 270
		};

		TestBed.configureTestingModule({
			declarations: [
				FixtureDefinitionEditorMovementAxisEditorDialogComponent,
				MockComponent(MatFormField)
			],
			imports: [ReactiveFormsModule],
			providers: [
				{ provide: MatDialogRef, useValue: jasmine.createSpyObj<MatDialogRef<FixtureDefinitionEditorChannelEditorDialogComponent>>({ close: null }) },
				{ provide: MAT_DIALOG_DATA, useValue: data }
			]
		});
		TestBed.compileComponents();
	}));

	beforeEach(() =>
	{
		fixture = TestBed.createComponent(FixtureDefinitionEditorMovementAxisEditorDialogComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () =>
	{
		expect(component).toBeTruthy();
	});
});
