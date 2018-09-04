import { AfterViewInit, Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { Title } from "@angular/platform-browser";
import { SidenavService } from "./services/sidenav.service";

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
	providers: [SidenavService]
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy
{
	@ViewChild("sidenav") sidenav: MatSidenav;
	constructor(public titleService: Title, private sidenavService: SidenavService)
	{
	}

	ngOnInit(): void
	{
	}

	ngAfterViewInit(): void
	{
		this.sidenavService.register(this.sidenav);
	}

	ngOnDestroy(): void
	{
		document.body.appendChild(document.createElement("app"));
	}

	public get isNarrow(): boolean
	{
		return window.innerWidth < 768;
	}

	public toggleSidenavIfNarrow(): void
	{
		if (this.isNarrow)
		{
			this.sidenavService.toggle();
		}
	}


}
