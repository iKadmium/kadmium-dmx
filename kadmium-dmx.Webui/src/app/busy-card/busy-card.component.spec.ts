import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusyCardComponent } from './busy-card.component';
import { MockComponent } from 'ng-mocks';
import { MatSpinner } from '@angular/material';

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
		component.loading = true;
		component.saving = false;
		fixture.detectChanges();
		let spinners = (fixture.nativeElement as HTMLElement).querySelectorAll("mat-spinner");
		expect(spinners.length).toBeGreaterThan(0);
	})

	it('should show the spinner if saving', () =>
	{
		component.loading = false;
		component.saving = true;
		fixture.detectChanges();
		let spinners = (fixture.nativeElement as HTMLElement).querySelectorAll("mat-spinner");
		expect(spinners.length).toBeGreaterThan(0);
	})

	it('should not show the spinner if not loading or saving', () =>
	{
		component.loading = false;
		component.saving = false;
		fixture.detectChanges();
		let spinners = (fixture.nativeElement as HTMLElement).querySelectorAll("mat-spinner");
		expect(spinners.length).toBe(0);
	})
});
