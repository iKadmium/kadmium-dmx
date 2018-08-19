import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardFixtureListComponent } from './dashboard-fixture-list.component';
import { MockComponent } from 'ng-mocks';
import { MatGridList, MatGridTile, MatGridTileHeaderCssMatStyler, MatGridTileFooterCssMatStyler } from '@angular/material';
import { DashboardFixturePreviewComponent } from '../dashboard-fixture-preview/dashboard-fixture-preview.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('DashboardFixtureListComponent', () =>
{
	let component: DashboardFixtureListComponent;
	let fixture: ComponentFixture<DashboardFixtureListComponent>;

	beforeEach(async(() =>
	{
		TestBed.configureTestingModule({
			declarations: [
				DashboardFixtureListComponent,
				MockComponent(MatGridList),
				MockComponent(MatGridTile),
				MockComponent(DashboardFixturePreviewComponent),
				MockComponent(MatGridTileHeaderCssMatStyler),
				MockComponent(MatGridTileFooterCssMatStyler),
				MockComponent(DashboardFixturePreviewComponent)
			],
			imports: [
				RouterTestingModule
			]
		})
			.compileComponents();
	}));

	beforeEach(() =>
	{
		fixture = TestBed.createComponent(DashboardFixtureListComponent);
		component = fixture.componentInstance;
		component.universe = {
			fixtures: [],
			name: "Name",
			universeID: 1,
			values: []
		}
		fixture.detectChanges();
	});

	it('should create', () =>
	{
		expect(component).toBeTruthy();
	});
});
