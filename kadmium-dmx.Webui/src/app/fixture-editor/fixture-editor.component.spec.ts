import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef, MatFormField, MatOption, MatSelect, MAT_DIALOG_DATA } from '@angular/material';
import { MockComponent } from 'ng-mocks';
import { FixtureEditorComponent, FixtureEditorData } from './fixture-editor.component';
import { FixtureOptionsTestHelpers } from 'app/test/fixture-options-test-helpers';


describe('FixtureEditorComponent', () =>
{
	let component: FixtureEditorComponent;
	let fixture: ComponentFixture<FixtureEditorComponent>;
	let data: FixtureEditorData;

	beforeEach(async(() =>
	{
		data = {
			fixture: {
				address: 1,
				group: "Group",
				options: FixtureOptionsTestHelpers.getRestrictedAxis("Pan"),
				type: {
					manufacturer: "Manufacturer",
					model: "Model"
				}
			},
			groups: [
				{ name: "Group", order: 1 }
			],
			skeletons: [
				{ manufacturer: "Manufacturer", model: "Model" }
			]
		}

		TestBed.configureTestingModule({
			declarations: [
				FixtureEditorComponent,
				MockComponent(MatFormField),
				MockComponent(MatSelect),
				MockComponent(MatOption),
			],
			imports: [ReactiveFormsModule],
			providers: [
				{ provide: MatDialogRef, useValue: jasmine.createSpyObj<MatDialogRef<FixtureEditorComponent>>({ close: null }) },
				{ provide: MAT_DIALOG_DATA, useValue: data }
			]
		});
		TestBed.compileComponents();
	}));

	beforeEach(() =>
	{
		fixture = TestBed.createComponent(FixtureEditorComponent);
		component = fixture.componentInstance;
	});

	it('should create', () =>
	{
		fixture.detectChanges();
		expect(component).toBeTruthy();
	});

	it('should close the dialog with a result when OK is clicked', () =>
	{
		let matDialogRefMock = TestBed.get(MatDialogRef) as jasmine.SpyObj<MatDialogRef<FixtureEditorComponent>>;
		fixture.detectChanges();
		let okButton = (fixture.nativeElement as HTMLElement).querySelector(".btn-ok") as HTMLButtonElement;
		component.data = data;
		okButton.click();
		expect(matDialogRefMock.close).toHaveBeenCalledWith(component.data.fixture);
	});

	it('should close the dialog with a null result when cancel is clicked', () =>
	{
		let matDialogRefMock = TestBed.get(MatDialogRef) as jasmine.SpyObj<MatDialogRef<FixtureEditorComponent>>;
		fixture.detectChanges();
		let cancelButton = (fixture.nativeElement as HTMLElement).querySelector(".btn-cancel") as HTMLButtonElement;
		component.data = data;
		cancelButton.click();
		expect(matDialogRefMock.close).toHaveBeenCalledWith();
	});
});
