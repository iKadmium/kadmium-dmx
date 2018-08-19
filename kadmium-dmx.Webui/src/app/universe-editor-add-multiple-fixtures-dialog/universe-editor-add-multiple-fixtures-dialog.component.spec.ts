import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniverseEditorAddMultipleFixturesDialogComponent, IUniverseEditorAddMultipleFixturesDialogInputData } from './universe-editor-add-multiple-fixtures-dialog.component';
import { MockComponent } from 'ng-mocks';
import { FormsModule } from '@angular/forms';
import { MatFormField, MatSelect, MatOption, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

describe('UniverseEditorAddMultipleFixturesDialogComponent', () =>
{
	let component: UniverseEditorAddMultipleFixturesDialogComponent;
	let fixture: ComponentFixture<UniverseEditorAddMultipleFixturesDialogComponent>;
	let data: IUniverseEditorAddMultipleFixturesDialogInputData;

	beforeEach(async(() =>
	{
		data = {
			groups: [],
			skeletons: []
		};
		TestBed.configureTestingModule({
			declarations: [
				UniverseEditorAddMultipleFixturesDialogComponent,
				MockComponent(MatFormField),
				MockComponent(MatSelect),
				MockComponent(MatOption)
			],
			imports: [
				FormsModule
			]
		});

		TestBed.overrideComponent(UniverseEditorAddMultipleFixturesDialogComponent, {
			set: {
				providers: [
					{
						provide: MatDialogRef, useValue: jasmine.createSpyObj<MatDialogRef<UniverseEditorAddMultipleFixturesDialogComponent>>({
							close: null
						})
					},
					{ provide: MAT_DIALOG_DATA, useValue: data }
				]
			}
		})

		TestBed.compileComponents();
	}));

	beforeEach(() =>
	{
		fixture = TestBed.createComponent(UniverseEditorAddMultipleFixturesDialogComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () =>
	{
		expect(component).toBeTruthy();
	});
});
