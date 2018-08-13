import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusyCardComponent } from './busy-card.component';
import { MockComponent } from '../../../node_modules/ng-mocks';
import { MatSpinner } from '../../../node_modules/@angular/material';

describe('BusyCardComponent', () =>
{
	let component: BusyCardComponent;
	let fixture: ComponentFixture<BusyCardComponent>;

	beforeEach(async(() =>
	{
		TestBed.configureTestingModule({
			declarations: [
				BusyCardComponent,
				MockComponent(MatSpinner)
			]
		})
			.compileComponents();
	}));

	beforeEach(() =>
	{
		fixture = TestBed.createComponent(BusyCardComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () =>
	{
		expect(component).toBeTruthy();
	});
});
