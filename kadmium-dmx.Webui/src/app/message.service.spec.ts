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

	it('should show a snackbar on errors', inject([MessageService], (service: MessageService) =>
	{
		let serviceMock = TestBed.get(MatSnackBar) as jasmine.SpyObj<MatSnackBar>;
		let error = new Error("Error");

		service.error(error);
		expect(serviceMock.open).toHaveBeenCalledWith(error.message, "Close", jasmine.any(Object));
	}));

	it('should show a snackbar on info', inject([MessageService], (service: MessageService) =>
	{
		let serviceMock = TestBed.get(MatSnackBar) as jasmine.SpyObj<MatSnackBar>;
		let message = "Message";

		service.info(message);
		expect(serviceMock.open).toHaveBeenCalledWith(message, "Close", jasmine.any(Object));
	}));
});
