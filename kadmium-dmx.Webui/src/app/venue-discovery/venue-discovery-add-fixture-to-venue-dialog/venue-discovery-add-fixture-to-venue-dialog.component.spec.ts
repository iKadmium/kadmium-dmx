import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogClose, MatFormField, MatIcon, MatOption, MatSelect, MatDialogRef } from '@angular/material';
import { APIClient } from 'api';
import { MockComponent } from 'ng-mocks';
import { from } from 'rxjs';
import { VenueDiscoveryAddFixtureToVenueDialogComponent } from './venue-discovery-add-fixture-to-venue-dialog.component';
import { FixtureDefinitionTestHelpers } from '../../test/fixture-definition-test-helpers';

describe('VenueDiscoveryAddFixtureToVenueDialogComponent', () =>
{
	let component: VenueDiscoveryAddFixtureToVenueDialogComponent;
	let fixture: ComponentFixture<VenueDiscoveryAddFixtureToVenueDialogComponent>;

	beforeEach(async(() =>
	{
		TestBed.configureTestingModule({
			declarations: [
				VenueDiscoveryAddFixtureToVenueDialogComponent,
				MockComponent(MatSelect),
				MockComponent(MatOption),
				MockComponent(MatFormField),
				MockComponent(MatDialogClose),
				MockComponent(MatIcon)

			],
			imports: [
				FormsModule,
				ReactiveFormsModule
			],
			providers: [
				{
					provide: APIClient, useValue: jasmine.createSpyObj<APIClient>({
						getFixtureDefinitions: from([[]]),
						getGroups: from([[]])
					})
				},
				{ provide: MatDialogRef, useValue: jasmine.createSpyObj<MatDialogRef<VenueDiscoveryAddFixtureToVenueDialogComponent>>({ close: null }) }
			]
		});

		TestBed.compileComponents();
	}));

	beforeEach(() =>
	{
		fixture = TestBed.createComponent(VenueDiscoveryAddFixtureToVenueDialogComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () =>
	{
		expect(component).toBeTruthy();
	});

	describe('save button', () =>
	{
		it('should close the dialog and return the current value', () =>
		{
			const matDialogRefMock = TestBed.get(MatDialogRef) as jasmine.SpyObj<MatDialogRef<VenueDiscoveryAddFixtureToVenueDialogComponent>>;
			const saveButton = (fixture.nativeElement as HTMLElement).querySelector('.button-save') as HTMLButtonElement;
			component.form.get('group').setValue('Something');
			component.form.get('fixture').setValue(FixtureDefinitionTestHelpers.getRGBFixtureDefinition().fixtureType);
			fixture.detectChanges();
			expect(component.form.valid).toBeTruthy();
			saveButton.click();
			expect(matDialogRefMock.close).toHaveBeenCalledWith(component.form.value);
		});
	});

	describe('cancel button', () =>
	{
		it('should close the dialog and return the current value', () =>
		{
			const matDialogRefMock = TestBed.get(MatDialogRef) as jasmine.SpyObj<MatDialogRef<VenueDiscoveryAddFixtureToVenueDialogComponent>>;
			const cancelButton = (fixture.nativeElement as HTMLElement).querySelector('.button-cancel') as HTMLButtonElement;
			cancelButton.click();
			expect(matDialogRefMock.close).toHaveBeenCalledWith();
		});
	});
});
