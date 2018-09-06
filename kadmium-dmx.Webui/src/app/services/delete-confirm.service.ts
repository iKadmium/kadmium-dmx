import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DeleteConfirmDialogComponent } from '../delete-confirm-dialog/delete-confirm-dialog.component';

@Injectable({
	providedIn: 'root'
})
export class DeleteConfirmService
{
	constructor(private dialog: MatDialog) { }

	public async confirm(name: string): Promise<boolean>
	{
		const result = await this.dialog
			.open(DeleteConfirmDialogComponent, { data: name })
			.afterClosed()
			.toPromise();
		return result as boolean;

	}
}
