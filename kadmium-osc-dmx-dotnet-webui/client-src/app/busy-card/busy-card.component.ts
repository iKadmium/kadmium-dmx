import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-busy-card',
	templateUrl: './busy-card.component.html',
	styleUrls: ['./busy-card.component.css']
})
export class BusyCardComponent implements OnInit
{
	@Input() loading: boolean;
	@Input() saving: boolean;

	constructor() { }

	ngOnInit()
	{
	}

}
