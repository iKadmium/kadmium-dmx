import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
	selector: 'app-delete-confirm-dialog',
	templateUrl: './delete-confirm-dialog.component.html',
	styleUrls: ['./delete-confirm-dialog.component.css']
})
export class DeleteConfirmDialogComponent implements OnInit
{
	constructor(public dialogRef: MatDialogRef<DeleteConfirmDialogComponent>, @Inject(MAT_DIALOG_DATA) public name: string) { }

	ngOnInit()
	{
	}

	public delete(): void
	{
		this.dialogRef.close(true);
	}

	public cancel(): void
	{
		this.dialogRef.close(false);
	}

}
