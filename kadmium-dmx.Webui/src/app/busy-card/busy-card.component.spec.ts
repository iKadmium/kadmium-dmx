import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusyCardComponent } from './busy-card.component';
import { MockComponent } from '../../../node_modules/ng-mocks';
import { MatSpinner } from '../../../node_modules/@angular/material';

describe('BusyCardComponent', () =>
{
	let component: BusyCardComponent;
	let fixture: ComponentFixture<BusyCardComponent>;

	let loading: boolean;
	let saving: boolean;

	beforeEach(async(() =>
	{
		loading = false;
		saving = false;

		TestBed.configureTestingModule({
			declarations: [
				BusyCardComponent,
				MockComponent(MatSpinner)
			]
		});

		TestBed.compileComponents();
	}));

	beforeEach(() =>
	{
		fixture = TestBed.createComponent(BusyCardComponent);
		component = fixture.componentInstance;
	});

	it('should create', () =>
	{
		fixture.detectChanges();
		expect(component).toBeTruthy();
	});

	it('should show the spinner if loading', () =>
	{
		loading = true;
		fixture.detectChanges();
		let spinner = (fixture.nativeElement as HTMLElement).querySelector("mat-spinner");
		expect(spinner).toBeTruthy();

	})
});
