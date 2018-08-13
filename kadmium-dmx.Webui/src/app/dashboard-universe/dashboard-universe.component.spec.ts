import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardUniverseComponent } from './dashboard-universe.component';
import { APIClient } from 'api';
import { from } from '../../../node_modules/rxjs';
import { MatSnackBar, MatCard, MatCardContent, MatToolbar } from '../../../node_modules/@angular/material';
import { SidenavToggleComponent } from '../sidenav-toggle/sidenav-toggle.component';
import { MockComponent } from '../../../node_modules/ng-mocks';
import { RouterTestingModule } from '../../../node_modules/@angular/router/testing';
import { NoopAnimationsModule } from '../../../node_modules/@angular/platform-browser/animations';

describe('DashboardUniverseComponent', () =>
{
	let component: DashboardUniverseComponent;
	let fixture: ComponentFixture<DashboardUniverseComponent>;

	beforeEach(async(() =>
	{
		TestBed.configureTestingModule({
			declarations: [
				DashboardUniverseComponent,
				MockComponent(SidenavToggleComponent),
				MockComponent(MatCard),
				MockComponent(MatCardContent),
				MockComponent(MatToolbar)
			],
			imports: [
				RouterTestingModule,
				NoopAnimationsModule
			],
			providers: [
				{ provide: APIClient, useValue: jasmine.createSpyObj<APIClient>({ getActiveUniverse: from([]) }) },
				{ provide: MatSnackBar, useValue: jasmine.createSpyObj<MatSnackBar>({ open: null }) }
			]
		})
			.compileComponents();
	}));

	beforeEach(() =>
	{
		fixture = TestBed.createComponent(DashboardUniverseComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () =>
	{
		expect(component).toBeTruthy();
	});
});
