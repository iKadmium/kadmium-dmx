import { inject, TestBed } from '@angular/core/testing';
import { MatSnackBar } from '@angular/material';
import { MessageService } from './message.service';


describe('MessageService', () =>
{
	beforeEach(() =>
	{
		TestBed.configureTestingModule({
			providers: [
				MessageService,
				{ provide: MatSnackBar, useValue: jasmine.createSpyObj<MatSnackBar>({ open: null }) }
			]
		});
	});

	it('should be created', inject([MessageService], (service: MessageService) =>
	{
		expect(service).toBeTruthy();
	}));

	it('should show a snackbar and a console log on errors', inject([MessageService], (service: MessageService) =>
	{
		const serviceMock = TestBed.get(MatSnackBar) as jasmine.SpyObj<MatSnackBar>;
		const error = new Error("Error");
		const spy = spyOn(console, "error");

		service.error(error);
		expect(serviceMock.open).toHaveBeenCalledWith(error.message, "Close", jasmine.any(Object));
		expect(spy).toHaveBeenCalledWith(error);
	}));

	it('should show a snackbar and a console log on info', inject([MessageService], (service: MessageService) =>
	{
		const serviceMock = TestBed.get(MatSnackBar) as jasmine.SpyObj<MatSnackBar>;
		const message = "Message";
		const spy = spyOn(console, "log");

		service.info(message);
		expect(serviceMock.open).toHaveBeenCalledWith(message, "Close", jasmine.any(Object));
		expect(spy).toHaveBeenCalledWith(message);
	}));
});
