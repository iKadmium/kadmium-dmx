import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCard, MatCardActions, MatCardContent, MatCardSubtitle, MatCardTitle, MatIcon, MatDialog } from '@angular/material';
import { MockComponent } from 'ng-mocks';
import { FixtureDataTestHelpers } from '../test/fixture-data-test-helpers';
import { FixtureDefinitionTestHelpers } from '../test/fixture-definition-test-helpers';
import { FixtureDataWithDefinition } from '../venue-discovery/venue-discovery.component';
import { VenueDiscoveryFixtureComponent } from './venue-discovery-fixture.component';


describe('VenueDiscoveryFixtureComponent', () =>
{
	let component: VenueDiscoveryFixtureComponent;
	let fixture: ComponentFixture<VenueDiscoveryFixtureComponent>;
	let activeFixture: FixtureDataWithDefinition;

	beforeEach(async(() =>
	{
		activeFixture = {
			fixture: FixtureDataTestHelpers.getFixtureData(),
			definition: FixtureDefinitionTestHelpers.getRGBFixtureDefinition()
		};

		TestBed.configureTestingModule({
			declarations: [
				VenueDiscoveryFixtureComponent,
				MockComponent(MatCard),
				MockComponent(MatCardTitle),
				MockComponent(MatCardSubtitle),
				MockComponent(MatCardContent),
				MockComponent(MatIcon),
				MockComponent(MatCardActions)
			],
			providers: [
				{ provide: MatDialog, useValue: jasmine.createSpyObj<MatDialog>({ open: null }) }
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
