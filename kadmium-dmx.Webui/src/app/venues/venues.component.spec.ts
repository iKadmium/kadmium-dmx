import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCard, MatCardContent, MatDialog, MatFormField, MatIcon, MatToolbar } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
import { APIClient } from 'api';
import { MessageService } from '../services/message.service';
import { MockComponent } from 'ng-mocks';
import { from } from 'rxjs';
import { BusyCardComponent } from '../busy-card/busy-card.component';
import { SidenavToggleComponent } from '../sidenav-toggle/sidenav-toggle.component';
import { VenuesComponent } from './venues.component';
import { DeleteConfirmService } from 'app/services/delete-confirm.service';

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
			],
			providers: [
				{ provide: APIClient, useValue: jasmine.createSpyObj<APIClient>({ getVenues: from([[]]) }) },
				{ provide: MessageService, useValue: jasmine.createSpyObj<MessageService>({ error: null }) },
				{ provide: DeleteConfirmService, useValue: jasmine.createSpyObj<DeleteConfirmService>({ confirm: Promise.resolve(true) }) }
			]
		});

		TestBed.compileComponents();
	}));

	beforeEach(() =>
	{
		fixture = TestBed.createComponent(VenuesComponent);
		component = fixture.componentInstance;
	});

	it('should create', (done) =>
	{
		fixture.detectChanges();
		fixture.whenStable().then(() =>
		{
			expect(component).toBeTruthy();
			expect(component.loading).toBeFalsy();
			done();
		});
	});

	describe('constructor', () =>
	{
		it('should request venues', () =>
		{
			const apiClientMock = TestBed.get(APIClient) as jasmine.SpyObj<APIClient>;
			fixture.detectChanges();
			expect(apiClientMock.getVenues).toHaveBeenCalledTimes(1);
		});

		it('should report an error if requesting venues throws one', () =>
		{
			const error = new Error("Error");
			const apiClientMock = TestBed.get(APIClient) as jasmine.SpyObj<APIClient>;
			const messageServiceMock = TestBed.get(MessageService) as jasmine.SpyObj<MessageService>;
			apiClientMock.getVenues.and.throwError(error.message);
			fixture.detectChanges();
			expect(messageServiceMock.error).toHaveBeenCalledWith(error);
		});
	});
});
