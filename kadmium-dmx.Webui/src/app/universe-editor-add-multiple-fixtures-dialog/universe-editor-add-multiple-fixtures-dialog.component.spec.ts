import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgForm, ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef, MatFormField, MatOption, MatSelect, MAT_DIALOG_DATA } from '@angular/material';
import { By } from '@angular/platform-browser';
import { MockComponent } from 'ng-mocks';
import { IUniverseEditorAddMultipleFixturesDialogInputData, IUniverseEditorAddMultipleFixturesDialogOutputData, UniverseEditorAddMultipleFixturesDialogComponent } from './universe-editor-add-multiple-fixtures-dialog.component';

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
				ReactiveFormsModule
			],
			providers: [
				{
					provide: MatDialogRef, useValue: jasmine.createSpyObj<MatDialogRef<UniverseEditorAddMultipleFixturesDialogComponent>>({
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
		fixture = TestBed.createComponent(UniverseEditorAddMultipleFixturesDialogComponent);
		component = fixture.componentInstance;
	});

	it('should create', () =>
	{
		fixture.detectChanges();
		expect(component).toBeTruthy();
	});

	it('should return settings when ok is clicked', () =>
	{
		let address = 100;
		let quantity = 100;
		let skeleton = { manufacturer: "Manufacturer", model: "Model" };
		let group = { name: "Group", order: 1 };
		let dialogRefMock = TestBed.get(MatDialogRef) as jasmine.SpyObj<MatDialogRef<UniverseEditorAddMultipleFixturesDialogComponent>>;

		component.formGroup.get("address").setValue(address);
		component.formGroup.get("quantity").setValue(quantity);
		component.formGroup.get("skeleton").setValue(skeleton);
		component.formGroup.get("group").setValue(group);

		let okButton = (fixture.nativeElement as HTMLElement).querySelector(".btn-ok") as HTMLButtonElement;
		okButton.click();

		let expectedResult: IUniverseEditorAddMultipleFixturesDialogOutputData = {
			address: address,
			quantity: quantity,
			skeleton: skeleton,
			group: group
		};
		expect(dialogRefMock.close).toHaveBeenCalledWith(expectedResult);
	});

	it('should return nothing when cancel is clicked', () =>
	{
		let dialogRefMock = TestBed.get(MatDialogRef) as jasmine.SpyObj<MatDialogRef<UniverseEditorAddMultipleFixturesDialogComponent>>;
		let cancelButton = (fixture.nativeElement as HTMLElement).querySelector(".btn-cancel") as HTMLButtonElement;
		cancelButton.click();

		expect(dialogRefMock.close).toHaveBeenCalledWith();
	});
});
