import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupsComponent } from './groups.component';
import { MockComponent, MockDirective } from '../../../node_modules/ng-mocks';
import { FormsModule } from '../../../node_modules/@angular/forms';
import { SidenavToggleComponent } from '../sidenav-toggle/sidenav-toggle.component';
import { MatIcon, MatToolbar, MatFormField, MatCardContent, MatCard, MatSnackBar } from '../../../node_modules/@angular/material';
import { BusyCardComponent } from '../busy-card/busy-card.component';
import { UniqueValueValidatorDirective } from '../unique-value-validator.directive';
import { APIClient } from 'api';
import { from } from '../../../node_modules/rxjs';
import { NoopAnimationsModule } from '../../../node_modules/@angular/platform-browser/animations';

describe('GroupsComponent', () =>
{
	let component: GroupsComponent;
	let fixture: ComponentFixture<GroupsComponent>;

	beforeEach(async(() =>
	{
		TestBed.configureTestingModule({
			declarations: [
				GroupsComponent,
				MockComponent(SidenavToggleComponent),
				MockComponent(MatIcon),
				MockComponent(MatToolbar),
				MockComponent(BusyCardComponent),
				MockComponent(MatFormField),
				MockComponent(MatCardContent),
				MockComponent(MatCard),

				MockDirective(UniqueValueValidatorDirective)
			],
			imports: [
				FormsModule,
				NoopAnimationsModule
			]
		});

		TestBed.overrideComponent(GroupsComponent, {
			set: {
				providers: [
					{ provide: APIClient, useValue: jasmine.createSpyObj<APIClient>({ getGroups: from([[]]) }) },
					{ provide: MatSnackBar, useValue: jasmine.createSpyObj<MatSnackBar>({ open: null }) }
				]
			}
		})
			.compileComponents();
	}));

	beforeEach(() =>
	{
		fixture = TestBed.createComponent(GroupsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () =>
	{
		expect(component).toBeTruthy();
	});
});
