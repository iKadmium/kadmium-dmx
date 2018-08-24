import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavToggleComponent } from './sidenav-toggle.component';
import { MatIcon } from '@angular/material';
import { MockComponent } from 'ng-mocks';
import { SidenavService } from '../sidenav.service';

describe('SidenavToggleComponent', () =>
{
	let component: SidenavToggleComponent;
	let fixture: ComponentFixture<SidenavToggleComponent>;

	beforeEach(async(() =>
	{
		TestBed.configureTestingModule({
			declarations: [
				SidenavToggleComponent,
				MockComponent(MatIcon)
			],
			providers: [
				{ provide: SidenavService, useValue: jasmine.createSpyObj<SidenavService>({ toggle: null }) }
			]
		});

		TestBed.compileComponents();
	}));

	beforeEach(() =>
	{
		fixture = TestBed.createComponent(SidenavToggleComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () =>
	{
		expect(component).toBeTruthy();
	});

	it('should toggle the sidenav when clicked', () =>
	{
		let button = (fixture.debugElement.nativeElement as HTMLElement).querySelector("button") as HTMLButtonElement;
		let serviceMock = TestBed.get(SidenavService) as jasmine.SpyObj<SidenavService>;
		button.click();
		expect(serviceMock.toggle).toHaveBeenCalledTimes(1);
	});
});
