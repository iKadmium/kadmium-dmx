import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VenueDiscoveryAddFixtureToVenueDialogComponent } from './venue-discovery-add-fixture-to-venue-dialog.component';
import { FormsModule } from '../../../node_modules/@angular/forms';
import { MockComponent } from '../../../node_modules/ng-mocks';
import { MatSelect, MatOption, MatFormField, MatIcon, MatDialogClose, MatCard, MatCardTitle } from '../../../node_modules/@angular/material';
import { APIClient } from 'api';
import { from } from '../../../node_modules/rxjs';

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
				FormsModule
			]
		});

		TestBed.overrideComponent(VenueDiscoveryAddFixtureToVenueDialogComponent, {
			set: {
				providers: [
					{
						provide: APIClient, useValue: jasmine.createSpyObj<APIClient>({
							getFixtureDefinitions: from([[]]),
							getGroups: from([[]])
						})
					}
				]
			}
		})

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
});
