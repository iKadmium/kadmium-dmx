import { Component, ViewChild, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";
import { MatSidenav } from '@angular/material';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit
{
    constructor(public titleService: Title)
    {
    }

    ngOnInit(): void
    {
    }

    ngOnDestroy(): void
    {
        document.body.appendChild(document.createElement("app"));
    }

    public get isNarrow(): boolean
    {
        return window.innerWidth < 768;
    }

    public toggle(sidenav: MatSidenav): void
    {
        if (this.isNarrow)
        {
            sidenav.toggle();
        }
    }
}
