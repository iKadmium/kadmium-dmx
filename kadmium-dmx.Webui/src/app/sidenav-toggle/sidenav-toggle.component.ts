import { Component, OnInit } from '@angular/core';
import { SidenavService } from "../sidenav.service";

@Component({
	selector: 'app-sidenav-toggle',
	templateUrl: './sidenav-toggle.component.html',
	styleUrls: ['./sidenav-toggle.component.scss'],
	providers: [SidenavService]
})
export class SidenavToggleComponent implements OnInit
{

	constructor(private sidenavService: SidenavService) { }

	ngOnInit()
	{
	}

	public toggleSidenav(): void
	{
		this.sidenavService.toggle();
	}

}
