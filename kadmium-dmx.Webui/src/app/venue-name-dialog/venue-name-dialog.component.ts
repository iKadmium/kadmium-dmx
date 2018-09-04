import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-venue-name-dialog',
	templateUrl: './venue-name-dialog.component.html',
	styleUrls: ['./venue-name-dialog.component.scss']
})
export class VenueNameDialogComponent implements OnInit
{
	public name = "";
	constructor() { }

	ngOnInit()
	{
	}

}
