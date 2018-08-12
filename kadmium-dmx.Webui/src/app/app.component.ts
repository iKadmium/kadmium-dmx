import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { Title } from "@angular/platform-browser";
import { MatSidenav } from '@angular/material';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { AnimationLibrary } from './animation-library';
import { SidenavService } from "./sidenav.service";
import { URLs } from "./url";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [SidenavService]
})
export class AppComponent implements OnInit, AfterViewInit
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
