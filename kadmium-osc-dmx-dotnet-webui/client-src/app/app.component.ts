import { Component, ViewChild, OnInit } from '@angular/core';
import { NotificationsService } from "./notifications.service";
import { Title } from "@angular/platform-browser";

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
}
