import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniverseEditorAddMultipleFixturesDialogComponent, IUniverseEditorAddMultipleFixturesDialogInputData, IUniverseEditorAddMultipleFixturesDialogOutputData } from './universe-editor-add-multiple-fixtures-dialog.component';
import { MockComponent } from 'ng-mocks';
import { FormsModule, NgForm } from '@angular/forms';
import { MatFormField, MatSelect, MatOption, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { By } from '@angular/platform-browser';

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
		let dialogRefMock = TestBed.get(MatDialogRef) as jasmine.SpyObj<MatDialogRef<UniverseEditorAddMultipleFixturesDialogComponent>>;
		component.address = 1;
		component.quantity = 1;
		component.fixtureType = { manufacturer: "Manufacturer", model: "Model" };
		component.group = { id: "", name: "Group", order: 1 };

		let okButton = (fixture.nativeElement as HTMLElement).querySelector(".btn-ok") as HTMLButtonElement;
		okButton.click();

		let expectedResult: IUniverseEditorAddMultipleFixturesDialogOutputData = {
			address: component.address,
			quantity: component.quantity,
			skeleton: component.fixtureType,
			group: component.group
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

	it('should update the quantity when the quantity box is changed', () =>
	{
		fixture.detectChanges();
		let quantity = 3;
		let form = (fixture.debugElement.query(By.directive(NgForm)) as any) as NgForm;
		console.log(form);
		let bob = form.form.controls["quantity"];
		bob.setValue(quantity);
		fixture.detectChanges();
		expect(component.quantity).toBe(quantity);
	});
});
