import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardFixtureColorComponent } from './dashboard-fixture-color.component';
import { ColorPickerComponent, ColorPickerDirective } from 'ngx-color-picker';
import { MockComponent, MockDirective } from 'ng-mocks';

describe('DashboardFixtureColorComponent', () =>
{
	let component: DashboardFixtureColorComponent;
	let fixture: ComponentFixture<DashboardFixtureColorComponent>;

	beforeEach(async(() =>
	{
		TestBed.configureTestingModule({
			declarations: [
				DashboardFixtureColorComponent,
				MockComponent(ColorPickerComponent),
				MockDirective(ColorPickerDirective)
			]
		}).compileComponents();
	}));

	beforeEach(() =>
	{
		fixture = TestBed.createComponent(DashboardFixtureColorComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () =>
	{
		expect(component).toBeTruthy();
	});
});
