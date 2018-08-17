import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VenueDiscoveryAddFixtureDefinitionDialogComponent, AddFixtureDefinitionData } from './venue-discovery-add-fixture-definition-dialog.component';
import { FormsModule } from '../../../node_modules/@angular/forms';
import { MockComponent } from '../../../node_modules/ng-mocks';
import { MatFormField, MatSelect, MatOption, MatDialogClose, MatIcon, MatDialogRef, MAT_DIALOG_DATA } from '../../../node_modules/@angular/material';

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
			imports: [FormsModule]
		});

		TestBed.overrideComponent(VenueDiscoveryAddFixtureDefinitionDialogComponent, {
			set: {
				providers: [
					{ provide: MatDialogRef, useValue: jasmine.createSpyObj<MatDialogRef<VenueDiscoveryAddFixtureDefinitionDialogComponent>>({ close: null }) },
					{ provide: MAT_DIALOG_DATA, useValue: data }
				]
			}
		})

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
