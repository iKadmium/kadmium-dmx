import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VenueDiscoveryUnassignedComponent } from './venue-discovery-unassigned.component';
import { MatCardTitle, MatFormField, MatIcon, MatSlider, MatCard, MatCardContent } from '@angular/material';
import { MockComponent } from 'ng-mocks';
import { FormsModule } from '@angular/forms';

describe('VenueDiscoveryUnassignedComponent', () =>
{
	let component: VenueDiscoveryUnassignedComponent;
	let fixture: ComponentFixture<VenueDiscoveryUnassignedComponent>;

	beforeEach(async(() =>
	{
		TestBed.configureTestingModule({
			declarations: [
				VenueDiscoveryUnassignedComponent,
				MockComponent(MatCard),
				MockComponent(MatCardTitle),
				MockComponent(MatCardContent),
				MockComponent(MatFormField),
				MockComponent(MatIcon),
				MockComponent(MatSlider),
				MockComponent(MatSlider)
			],
			imports: [FormsModule]
		});

		TestBed.overrideComponent(VenueDiscoveryUnassignedComponent, {
			set: {
				providers: [

				]
			}
		})

		TestBed.compileComponents();
	}));

	beforeEach(() =>
	{
		fixture = TestBed.createComponent(VenueDiscoveryUnassignedComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () =>
	{
		expect(component).toBeTruthy();
	});
});
