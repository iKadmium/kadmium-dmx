import { TestBed, inject } from '@angular/core/testing';
import { MessageService } from 'app/message.service';
import { MatSnackBar, MatSnackBarConfig } from '../../node_modules/@angular/material';


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
		let serviceMock = TestBed.get(MatSnackBar) as jasmine.SpyObj<MatSnackBar>;
		let error = new Error("Error");
		let spy = spyOn(console, "error");

		service.error(error);
		expect(serviceMock.open).toHaveBeenCalledWith(error.message, "Close", jasmine.any(Object));
		expect(spy).toHaveBeenCalledWith(error);
	}));

	it('should show a snackbar and a console log on info', inject([MessageService], (service: MessageService) =>
	{
		let serviceMock = TestBed.get(MatSnackBar) as jasmine.SpyObj<MatSnackBar>;
		let message = "Message";
		let spy = spyOn(console, "info");

		service.info(message);
		expect(serviceMock.open).toHaveBeenCalledWith(message, "Close", jasmine.any(Object));
		expect(spy).toHaveBeenCalledWith(message);
	}));
});
