import { TestBed, inject, fakeAsync } from '@angular/core/testing';

import { DeleteConfirmService } from './delete-confirm.service';
import { MatDialog, MatDialogRef } from '@angular/material';
import { DeleteConfirmDialogComponent } from 'app/delete-confirm-dialog/delete-confirm-dialog.component';
import { from } from 'rxjs';

describe('DeleteConfirmService', () =>
{
	let dialogObservable: jasmine.SpyObj<MatDialogRef<DeleteConfirmDialogComponent>>;

	beforeEach(() =>
	{
		dialogObservable = jasmine.createSpyObj<MatDialogRef<DeleteConfirmDialogComponent>>({ afterClosed: from([]) });

		TestBed.configureTestingModule({
			providers: [
				DeleteConfirmService,
				{ provide: MatDialog, useValue: jasmine.createSpyObj<MatDialog>({ open: dialogObservable }) },
			]
		});
	});

	it('should be created', inject([DeleteConfirmService], (service: DeleteConfirmService) =>
	{
		expect(service).toBeTruthy();
	}));

	describe('confirm', () =>
	{
		it('should open a dialog', inject([DeleteConfirmService], (service: DeleteConfirmService) =>
		{
			const matDialogMock = TestBed.get(MatDialog) as jasmine.SpyObj<MatDialog>;
			service.confirm("Thing");
			expect(matDialogMock.open).toHaveBeenCalledTimes(1);
		}));

		it('should return true if the dialog returns true', done =>
			inject([DeleteConfirmService], async (service: DeleteConfirmService) =>
			{
				dialogObservable.afterClosed.and.returnValue(from([true]));
				const response = await service.confirm("Thing");
				expect(response).toEqual(true);
				done();
			})()
		);

		it('should return false if the dialog returns false', done =>
			inject([DeleteConfirmService], async (service: DeleteConfirmService) =>
			{
				dialogObservable.afterClosed.and.returnValue(from([false]));
				const response = await service.confirm("Thing");
				expect(response).toEqual(false);
				done();
			})()
		);

	});
});
