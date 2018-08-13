import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardFixtureAttributesComponent } from './dashboard-fixture-attributes.component';
import { FormsModule } from '../../../node_modules/@angular/forms';
import { MatIcon, MatSlider, MatListItem, MatList, MatDivider } from '../../../node_modules/@angular/material';

import { MockComponent } from "ng-mocks";

describe('DashboardFixtureAttributesComponent', () =>
{
	let component: DashboardFixtureAttributesComponent;
	let fixture: ComponentFixture<DashboardFixtureAttributesComponent>;

	beforeEach(async(() =>
	{
		TestBed.configureTestingModule({
			declarations: [
				DashboardFixtureAttributesComponent,
				MockComponent(MatIcon),
				MockComponent(MatDivider),
				MockComponent(MatSlider),
				MockComponent(MatListItem),
				MockComponent(MatList)
			],
			imports: [FormsModule]
		});

		TestBed.compileComponents();
	}));

	beforeEach(() =>
	{
		fixture = TestBed.createComponent(DashboardFixtureAttributesComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () =>
	{
		expect(component).toBeTruthy();
	});
});
