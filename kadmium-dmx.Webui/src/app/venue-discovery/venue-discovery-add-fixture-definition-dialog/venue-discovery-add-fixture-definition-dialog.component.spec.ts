import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogClose, MatDialogRef, MatFormField, MatIcon, MatOption, MatSelect, MAT_DIALOG_DATA } from '@angular/material';
import { MockComponent } from 'ng-mocks';
// tslint:disable-next-line:max-line-length
import { AddFixtureDefinitionData, VenueDiscoveryAddFixtureDefinitionDialogComponent } from './venue-discovery-add-fixture-definition-dialog.component';

describe('VenueDiscoveryAddFixtureDefinitionDialogComponent', () =>
{
	let component: VenueDiscoveryAddFixtureDefinitionDialogComponent;
	let fixture: ComponentFixture<VenueDiscoveryAddFixtureDefinitionDialogComponent>;
	let data: AddFixtureDefinitionData;

	beforeEach(async(() =>
	{
		data = {
			channels: [
				{
					address: 1,
					min: 0,
					max: 255,
					name: "Red"
				}
			],
			venue: ""
		};

		TestBed.configureTestingModule({
			declarations: [
				VenueDiscoveryAddFixtureDefinitionDialogComponent,
				MockComponent(MatFormField),
				MockComponent(MatSelect),
				MockComponent(MatOption),
				MockComponent(MatDialogClose),
				MockComponent(MatIcon)
			],
			imports: [ReactiveFormsModule]
		});

		TestBed.overrideComponent(VenueDiscoveryAddFixtureDefinitionDialogComponent, {
			set: {
				providers: [
					{
						provide: MatDialogRef, useValue: jasmine.createSpyObj<MatDialogRef<VenueDiscoveryAddFixtureDefinitionDialogComponent>>({
							close: null
						})
					},
					{ provide: MAT_DIALOG_DATA, useValue: data }
				]
			}
		});

		TestBed.compileComponents();
	}));

	beforeEach(() =>
	{
		fixture = TestBed.createComponent(VenueDiscoveryAddFixtureDefinitionDialogComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () =>
	{
		expect(component).toBeTruthy();
	});
});
