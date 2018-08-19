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
			]
		});

		TestBed.overrideComponent(SidenavToggleComponent, {
			set: {
				providers: [
					{ provide: SidenavService, useValue: jasmine.createSpyObj<SidenavService>({ toggle: null }) }
				]
			}
		})

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
});
