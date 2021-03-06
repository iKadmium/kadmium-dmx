import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef, MatFormField, MatOption, MatSelect, MAT_DIALOG_DATA } from '@angular/material';
import { MockComponent } from 'ng-mocks';
import { FixtureEditorComponent, FixtureEditorData } from './fixture-editor.component';
import { FixtureOptionsTestHelpers } from '../../test/fixture-options-test-helpers';
import { FixtureData } from 'api';


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
		};

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
		const matDialogRefMock = TestBed.get(MatDialogRef) as jasmine.SpyObj<MatDialogRef<FixtureEditorComponent>>;
		fixture.detectChanges();
		component.data = data;
		component.ok();
		expect(matDialogRefMock.close).toHaveBeenCalledWith(jasmine.objectContaining<FixtureData>({
			address: component.data.fixture.address,
			group: component.data.fixture.group,
			type: component.data.fixture.type
		}));
	});

	it('should close the dialog with a null result when cancel is clicked', () =>
	{
		const matDialogRefMock = TestBed.get(MatDialogRef) as jasmine.SpyObj<MatDialogRef<FixtureEditorComponent>>;
		fixture.detectChanges();
		component.data = data;
		component.cancel();
		expect(matDialogRefMock.close).toHaveBeenCalledWith();
	});
});
