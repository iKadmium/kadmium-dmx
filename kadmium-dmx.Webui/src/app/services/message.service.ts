import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Injectable({
	providedIn: 'root'
})
export class MessageService
{
	constructor(private snackbar: MatSnackBar) { }

	public error(error: Error): void
	{
		console.error(error);
		this.snackbar.open(error.message, "Close", { duration: 3000 });
	}

	public info(message: string): void
	{
		console.log(message);
		this.snackbar.open(message, "Close", { duration: 3000 });
	}
}
