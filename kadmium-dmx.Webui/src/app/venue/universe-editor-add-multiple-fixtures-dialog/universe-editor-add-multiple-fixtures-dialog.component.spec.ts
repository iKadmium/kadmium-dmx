import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef, MatFormField, MatOption, MatSelect, MAT_DIALOG_DATA } from '@angular/material';
import { MockComponent } from 'ng-mocks';
// tslint:disable-next-line:max-line-length
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
		const address = 100;
		const quantity = 100;
		const skeleton = { manufacturer: "Manufacturer", model: "Model" };
		const group = { name: "Group", order: 1 };
		const dialogRefMock = TestBed.get(MatDialogRef) as jasmine.SpyObj<MatDialogRef<UniverseEditorAddMultipleFixturesDialogComponent>>;

		component.formGroup.get("address").setValue(address);
		component.formGroup.get("quantity").setValue(quantity);
		component.formGroup.get("skeleton").setValue(skeleton);
		component.formGroup.get("group").setValue(group);

		const okButton = (fixture.nativeElement as HTMLElement).querySelector(".btn-ok") as HTMLButtonElement;
		okButton.click();

		const expectedResult: IUniverseEditorAddMultipleFixturesDialogOutputData = {
			address: address,
			quantity: quantity,
			skeleton: skeleton,
			group: group
		};
		expect(dialogRefMock.close).toHaveBeenCalledWith(expectedResult);
	});

	it('should return nothing when cancel is clicked', () =>
	{
		const dialogRefMock = TestBed.get(MatDialogRef) as jasmine.SpyObj<MatDialogRef<UniverseEditorAddMultipleFixturesDialogComponent>>;
		const cancelButton = (fixture.nativeElement as HTMLElement).querySelector(".btn-cancel") as HTMLButtonElement;
		cancelButton.click();

		expect(dialogRefMock.close).toHaveBeenCalledWith();
	});
});
