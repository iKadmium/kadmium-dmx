import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { MatCard, MatCardContent, MatFormField, MatIcon, MatToolbar } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
import { APIClient } from 'api';
import { SidenavToggleComponent } from 'app/sidenav-toggle/sidenav-toggle/sidenav-toggle.component';
import { MockComponent } from 'ng-mocks';
import { from } from 'rxjs';
import { BusyCardComponent } from '../../busy-card/component/busy-card.component';
import { DeleteConfirmService } from '../../services/delete-confirm.service';
import { MessageService } from '../../services/message.service';
import { VenuesComponent } from './venues.component';

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
				{
					provide: APIClient, useValue: jasmine.createSpyObj<APIClient>({
						getVenues: from([[]]),
						deleteVenue: from([])
					})
				},
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

	describe('delete', () =>
	{
		beforeEach(() =>
		{
			fixture.detectChanges();
			component.venues = ["Venue", "Another Venue"];
		});

		it('should open a confirmation dialog', () =>
		{
			const venueName = component.venues[0];
			const deleteConfirmServiceMock = TestBed.get(DeleteConfirmService) as jasmine.SpyObj<DeleteConfirmService>;
			component.deleteConfirm(0);
			expect(deleteConfirmServiceMock.confirm).toHaveBeenCalledWith(venueName);
		});

		it('should call delete if deletion is confirmed', fakeAsync(() =>
		{
			const venueName = component.venues[0];
			const deleteConfirmServiceMock = TestBed.get(DeleteConfirmService) as jasmine.SpyObj<DeleteConfirmService>;
			const apiClientMock = TestBed.get(APIClient) as jasmine.SpyObj<APIClient>;
			deleteConfirmServiceMock.confirm.and.returnValue(Promise.resolve(true));
			component.deleteConfirm(0);
			tick();
			expect(apiClientMock.deleteVenue).toHaveBeenCalledWith(jasmine.objectContaining({ name: venueName }));
		}));

		it('should not call delete if deletion is cancelled', fakeAsync(() =>
		{
			const deleteConfirmServiceMock = TestBed.get(DeleteConfirmService) as jasmine.SpyObj<DeleteConfirmService>;
			const apiClientMock = TestBed.get(APIClient) as jasmine.SpyObj<APIClient>;
			deleteConfirmServiceMock.confirm.and.returnValue(Promise.resolve(false));
			component.deleteConfirm(0);
			tick();
			expect(apiClientMock.deleteVenue).not.toHaveBeenCalled();
		}));
	});
});
