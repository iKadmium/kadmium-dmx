import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '../../../../node_modules/@angular/forms';
import { MatDialogRef } from '../../../../node_modules/@angular/material';

@Component({
	selector: 'app-venue-name-dialog',
	templateUrl: './venue-name-dialog.component.html',
	styleUrls: ['./venue-name-dialog.component.scss']
})
export class VenueNameDialogComponent implements OnInit
{
	public form: FormGroup;

	constructor(private matDialog: MatDialogRef<VenueNameDialogComponent>)
	{
		this.form = new FormGroup({
			name: new FormControl('', Validators.required)
		});
	}

	ngOnInit()
	{
	}

	public save(): void
	{
		this.matDialog.close(this.form.value.name);
	}

	public cancel(): void
	{
		this.matDialog.close();
	}

}
