import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavToggleComponent } from './sidenav-toggle.component';
import { MatIcon } from '../../../node_modules/@angular/material';
import { MockComponent } from '../../../node_modules/ng-mocks';
import { SidenavService } from 'app/sidenav.service';

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
