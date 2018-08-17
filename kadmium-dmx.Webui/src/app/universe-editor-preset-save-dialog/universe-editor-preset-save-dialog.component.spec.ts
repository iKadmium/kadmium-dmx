import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniverseEditorPresetSaveDialogComponent, UniverseEditorPresetSaveDialogComponentData } from './universe-editor-preset-save-dialog.component';
import { MockComponent } from '../../../node_modules/ng-mocks';
import { MatList, MatListOption, MatSelectionList, MatFormField, MatDialogRef, MAT_DIALOG_DATA } from '../../../node_modules/@angular/material';

describe('UniverseEditorPresetSaveDialogComponent', () =>
{
	let component: UniverseEditorPresetSaveDialogComponent;
	let fixture: ComponentFixture<UniverseEditorPresetSaveDialogComponent>;
	let data: UniverseEditorPresetSaveDialogComponentData;

	beforeEach(async(() =>
	{
		data = {
			fixtures: []
		};
		TestBed.configureTestingModule({
			declarations: [
				UniverseEditorPresetSaveDialogComponent,
				MockComponent(MatListOption),
				MockComponent(MatList),
				MockComponent(MatSelectionList),
				MockComponent(MatFormField)
			]
		});

		TestBed.overrideComponent(UniverseEditorPresetSaveDialogComponent, {
			set: {
				providers: [
					{ provide: MatDialogRef, useValue: jasmine.createSpyObj<MatDialogRef<UniverseEditorPresetSaveDialogComponent>>({ close: null }) },
					{ provide: MAT_DIALOG_DATA, useValue: data }
				]
			}
		});

		TestBed.compileComponents();
	}));

	beforeEach(() =>
	{
		fixture = TestBed.createComponent(UniverseEditorPresetSaveDialogComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () =>
	{
		expect(component).toBeTruthy();
	});
});
