import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatGridList, MatGridTile, MatGridTileFooterCssMatStyler, MatGridTileHeaderCssMatStyler } from '@angular/material';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { MockComponent } from 'ng-mocks';
import { DashboardFixturePreviewComponent } from '../dashboard-fixture-preview/dashboard-fixture-preview.component';
import { PreviewFixture } from '../../preview-fixture';
import { DashboardFixtureListComponent } from './dashboard-fixture-list.component';

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
		};
	});

	it('should create', () =>
	{
		fixture.detectChanges();
		expect(component).toBeTruthy();
	});

	it('should create a fixture preview for every fixture', () =>
	{
		const fixtures: PreviewFixture[] = [
			new PreviewFixture({ address: 1, group: "", manufacturer: "", model: "", attributes: [], colorWheel: [], movementAxis: [] }),
			new PreviewFixture({ address: 2, group: "", manufacturer: "", model: "", attributes: [], colorWheel: [], movementAxis: [] }),
			new PreviewFixture({ address: 3, group: "", manufacturer: "", model: "", attributes: [], colorWheel: [], movementAxis: [] }),
			new PreviewFixture({ address: 4, group: "", manufacturer: "", model: "", attributes: [], colorWheel: [], movementAxis: [] })
		];
		component.universe.fixtures = fixtures;
		fixture.detectChanges();
		let previewElements = fixture.debugElement.queryAll(By.css("app-dashboard-fixture-preview"));
		expect(previewElements.length).toBe(fixtures.length);
		component.universe.fixtures.push(new PreviewFixture({
			address: 5, group: "", manufacturer: "", model: "", attributes: [], colorWheel: [], movementAxis: []
		}));
		fixture.detectChanges();
		previewElements = fixture.debugElement.queryAll(By.css("app-dashboard-fixture-preview"));
		expect(previewElements.length).toBe(fixtures.length);
	});
});
