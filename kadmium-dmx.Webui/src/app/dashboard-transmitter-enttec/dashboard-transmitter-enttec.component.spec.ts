import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardTransmitterEnttecComponent } from './dashboard-transmitter-enttec.component';
import { MockComponent } from '../../../node_modules/ng-mocks';
import { MatCard, MatCardTitle, MatCardContent, MatCardSubtitle, MatCardActions, MatSlideToggle, MatSnackBar } from '../../../node_modules/@angular/material';
import { BusyCardComponent } from '../busy-card/busy-card.component';
import { APIClient } from 'api';
import { from } from '../../../node_modules/rxjs';
import { NoopAnimationsModule } from '../../../node_modules/@angular/platform-browser/animations';

describe('DashboardTransmitterEnttecComponent', () =>
{
	let component: DashboardTransmitterEnttecComponent;
	let fixture: ComponentFixture<DashboardTransmitterEnttecComponent>;

	beforeEach(async(() =>
	{
		TestBed.configureTestingModule({
			declarations: [
				DashboardTransmitterEnttecComponent,
				MockComponent(BusyCardComponent),
				MockComponent(MatCard),
				MockComponent(MatCardTitle),
				MockComponent(MatCardSubtitle),
				MockComponent(MatCardContent),
				MockComponent(MatCardActions),
				MockComponent(MatSlideToggle),
			],
			providers: [
				{ provide: APIClient, useValue: jasmine.createSpyObj<APIClient>({ enabledEnttecProTransmitter: from([]) }) }
			],
			imports: [
				NoopAnimationsModule
			]
		})
			.compileComponents();
	}));

	beforeEach(() =>
	{
		fixture = TestBed.createComponent(DashboardTransmitterEnttecComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () =>
	{
		expect(component).toBeTruthy();
	});
});
