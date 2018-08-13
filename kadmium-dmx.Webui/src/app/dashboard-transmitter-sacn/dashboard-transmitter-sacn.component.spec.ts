import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardTransmitterSacnComponent } from './dashboard-transmitter-sacn.component';
import { MockComponent } from '../../../node_modules/ng-mocks';
import { BusyCardComponent } from '../busy-card/busy-card.component';
import { MatCard, MatCardTitle, MatCardSubtitle, MatCardContent, MatCardActions, MatSlideToggle } from '../../../node_modules/@angular/material';
import { APIClient } from 'api';
import { from } from '../../../node_modules/rxjs';
import { NoopAnimationsModule } from '../../../node_modules/@angular/platform-browser/animations';

describe('DashboardTransmitterSacnComponent', () =>
{
	let component: DashboardTransmitterSacnComponent;
	let fixture: ComponentFixture<DashboardTransmitterSacnComponent>;

	beforeEach(async(() =>
	{
		TestBed.configureTestingModule({
			declarations: [
				DashboardTransmitterSacnComponent,
				MockComponent(BusyCardComponent),
				MockComponent(MatCard),
				MockComponent(MatCardTitle),
				MockComponent(MatCardSubtitle),
				MockComponent(MatCardContent),
				MockComponent(MatCardActions),
				MockComponent(MatSlideToggle),
			],
			providers: [
				{ provide: APIClient, useValue: jasmine.createSpyObj<APIClient>({ enabledSACNTransmitter: from([]) }) }
			],
			imports: [
				NoopAnimationsModule
			]
		})
			.compileComponents();
	}));

	beforeEach(() =>
	{
		fixture = TestBed.createComponent(DashboardTransmitterSacnComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () =>
	{
		expect(component).toBeTruthy();
	});
});
