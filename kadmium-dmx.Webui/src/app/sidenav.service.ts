import { Injectable } from '@angular/core';
import { MatSidenav } from "@angular/material/sidenav";

@Injectable()
export class SidenavService
{
	private static sidenav: MatSidenav;
	constructor() { }

	public register(sidenav: MatSidenav): void
	{
		SidenavService.sidenav = sidenav;
	}

	public toggle(): void
	{
		if (SidenavService.sidenav != null)
		{
			SidenavService.sidenav.toggle();
		}
	}
}
