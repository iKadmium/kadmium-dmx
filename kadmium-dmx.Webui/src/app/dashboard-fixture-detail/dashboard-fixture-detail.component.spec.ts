import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardFixtureDetailComponent } from './dashboard-fixture-detail.component';
import { SidenavToggleComponent } from '../sidenav-toggle/sidenav-toggle.component';
import { MockComponent } from '../../../node_modules/ng-mocks';
import { BusyCardComponent } from '../busy-card/busy-card.component';
import { MatToolbar, MatCard, MatCardContent, MatTab, MatTabGroup, MatSnackBar } from '../../../node_modules/@angular/material';
import { DashboardFixturePreviewComponent } from '../dashboard-fixture-preview/dashboard-fixture-preview.component';
import { DashboardFixtureAttributesComponent } from '../dashboard-fixture-attributes/dashboard-fixture-attributes.component';
import { DashboardFixtureColorComponent } from '../dashboard-fixture-color/dashboard-fixture-color.component';
import { APIClient } from 'api';
import { RouterTestingModule } from '../../../node_modules/@angular/router/testing';
import { ActivatedRoute, ParamMap } from '../../../node_modules/@angular/router';
import { UniverseStreamService } from '../universe-stream.service';
import { FixtureStreamService } from '../fixture-stream.service';
import { Observable, from } from '../../../node_modules/rxjs';

describe('DashboardFixtureDetailComponent', () =>
{
	let component: DashboardFixtureDetailComponent;
	let fixture: ComponentFixture<DashboardFixtureDetailComponent>;

	let paramMap: any;

	beforeEach(async(() =>
	{
		paramMap = { universeID: '1', fixtureAddress: '1' };
		TestBed.configureTestingModule({
			declarations: [
				DashboardFixtureDetailComponent,
				MockComponent(SidenavToggleComponent),
				MockComponent(BusyCardComponent),
				MockComponent(MatToolbar),
				MockComponent(DashboardFixturePreviewComponent),
				MockComponent(MatCard),
				MockComponent(MatCardContent),
				MockComponent(DashboardFixtureAttributesComponent),
				MockComponent(MatTab),
				MockComponent(DashboardFixtureColorComponent),
				MockComponent(MatTabGroup)
			],
			imports: [RouterTestingModule]
		});

		TestBed.overrideComponent(DashboardFixtureDetailComponent, {
			set: {
				providers: [
					{
						provide: APIClient,
						useValue: jasmine.createSpyObj<APIClient>({
							getActiveUniverse: from([])
						})
					},
					{ provide: ActivatedRoute, useValue: { snapshot: { paramMap: { get: param => paramMap[param] } } } },
					{ provide: UniverseStreamService, useValue: jasmine.createSpyObj<UniverseStreamService>({ subscribe: null, unsubscribe: null }) },
					{ provide: MatSnackBar, useValue: jasmine.createSpyObj<MatSnackBar>({ open: null }) },
					{ provide: FixtureStreamService, useValue: jasmine.createSpyObj<FixtureStreamService>({ subscribe: null, unsubscribe: null }) }
				]
			}
		});

		TestBed.compileComponents();
	}));

	beforeEach(() =>
	{
		fixture = TestBed.createComponent(DashboardFixtureDetailComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () =>
	{
		expect(component).toBeTruthy();
	});
});
