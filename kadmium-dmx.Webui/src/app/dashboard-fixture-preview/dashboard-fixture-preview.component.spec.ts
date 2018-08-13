import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardFixturePreviewComponent } from './dashboard-fixture-preview.component';


describe('Preview2DFixtureComponent', () =>
{
	let component: DashboardFixturePreviewComponent;
	let fixture: ComponentFixture<DashboardFixturePreviewComponent>;

	beforeEach(async(() =>
	{
		TestBed.configureTestingModule({
			declarations: [DashboardFixturePreviewComponent]
		})
			.compileComponents();
	}));

	beforeEach(() =>
	{
		fixture = TestBed.createComponent(DashboardFixturePreviewComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () =>
	{
		expect(component).toBeTruthy();
	});
});
