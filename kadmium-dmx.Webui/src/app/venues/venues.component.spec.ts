import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VenuesComponent } from './venues.component';
import { BusyCardComponent } from '../busy-card/busy-card.component';
import { MockComponent } from 'ng-mocks';
import { MatFormField, MatIcon, MatToolbar, MatCard, MatCardContent, MatDialog } from '@angular/material';
import { SidenavToggleComponent } from '../sidenav-toggle/sidenav-toggle.component';
import { RouterTestingModule } from '@angular/router/testing';
import { from } from 'rxjs';
import { APIClient } from 'api';
import { MessageService } from 'app/message.service';

describe('VenuesComponent', () =>
{
	let component: VenuesComponent;
	let fixture: ComponentFixture<VenuesComponent>;

	beforeEach(async(() =>
	{
		TestBed.configureTestingModule({
			declarations: [
				VenuesComponent,
				MockComponent(BusyCardComponent),
				MockComponent(MatFormField),
				MockComponent(MatIcon),
				MockComponent(MatToolbar),
				MockComponent(MatCard),
				MockComponent(MatCardContent),
				MockComponent(SidenavToggleComponent)
			],
			imports: [
				RouterTestingModule
			]
		});

		TestBed.overrideComponent(VenuesComponent, {
			set: {
				providers: [
					{ provide: APIClient, useValue: jasmine.createSpyObj<APIClient>({ getVenues: from([[]]) }) },
					{ provide: MessageService, useValue: jasmine.createSpyObj<MessageService>({ error: null }) },
					{ provide: MatDialog, useValue: jasmine.createSpyObj<MatDialog>({ open: null }) }
				]
			}
		})

		TestBed.compileComponents();
	}));

	beforeEach(() =>
	{
		fixture = TestBed.createComponent(VenuesComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () =>
	{
		expect(component).toBeTruthy();
	});
});
