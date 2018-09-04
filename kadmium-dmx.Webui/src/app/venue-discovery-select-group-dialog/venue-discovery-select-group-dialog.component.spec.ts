import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatButtonToggle, MatButtonToggleGroup, MatDialogClose, MatDialogContent, MatIcon } from '@angular/material';
import { APIClient } from 'api';
import { MockComponent } from 'ng-mocks';
import { from } from 'rxjs';
import { VenueDiscoverySelectGroupDialogComponent } from './venue-discovery-select-group-dialog.component';

describe('VenueDiscoverySelectGroupDialogComponent', () =>
{
	let component: VenueDiscoverySelectGroupDialogComponent;
	let fixture: ComponentFixture<VenueDiscoverySelectGroupDialogComponent>;

	beforeEach(async(() =>
	{
		TestBed.configureTestingModule({
			declarations: [
				VenueDiscoverySelectGroupDialogComponent,
				MockComponent(MatDialogContent),
				MockComponent(MatButtonToggleGroup),
				MockComponent(MatButtonToggle),
				MockComponent(MatDialogClose),
				MockComponent(MatIcon)
			],
			imports: [
				FormsModule
			]
		});

		TestBed.overrideComponent(VenueDiscoverySelectGroupDialogComponent, {
			set: {
				providers: [
					{ provide: APIClient, useValue: jasmine.createSpyObj<APIClient>({ getGroups: from([[]]) }) }
				]
			}
		});

		TestBed.compileComponents();
	}));

	beforeEach(() =>
	{
		fixture = TestBed.createComponent(VenueDiscoverySelectGroupDialogComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () =>
	{
		expect(component).toBeTruthy();
	});
});
