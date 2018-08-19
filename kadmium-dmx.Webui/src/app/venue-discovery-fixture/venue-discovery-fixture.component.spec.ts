import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VenueDiscoveryFixtureComponent } from './venue-discovery-fixture.component';
import { MockComponent } from 'ng-mocks';
import { MatCard, MatCardTitle, MatCardContent, MatIcon, MatCardActions } from '@angular/material';
import { ActiveFixture } from 'api';

describe('VenueDiscoveryFixtureComponent', () =>
{
	let component: VenueDiscoveryFixtureComponent;
	let fixture: ComponentFixture<VenueDiscoveryFixtureComponent>;
	let activeFixture: ActiveFixture;

	beforeEach(async(() =>
	{
		activeFixture = {
			address: 1,
			attributes: [],
			colorWheel: [],
			group: "",
			manufacturer: "",
			model: "",
			movementAxis: []
		};

		TestBed.configureTestingModule({
			declarations: [
				VenueDiscoveryFixtureComponent,
				MockComponent(MatCard),
				MockComponent(MatCardTitle),
				MockComponent(MatCardContent),
				MockComponent(MatIcon),
				MockComponent(MatCardActions)
			]
		});

		TestBed.compileComponents();
	}));

	beforeEach(() =>
	{
		fixture = TestBed.createComponent(VenueDiscoveryFixtureComponent);
		component = fixture.componentInstance;
		component.fixture = activeFixture;
		fixture.detectChanges();
	});

	it('should create', () =>
	{
		expect(component).toBeTruthy();
	});
});
