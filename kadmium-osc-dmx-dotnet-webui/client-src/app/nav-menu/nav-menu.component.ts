import { Component, OnInit } from '@angular/core';
import { StatusCode } from "../status-code.enum";
import { Status } from "app/status";
import { SafeHtml, DomSanitizer } from "@angular/platform-browser";
import { Response, ResponseOptions } from "@angular/http";

@Component({
    selector: 'app-nav-menu',
    templateUrl: './nav-menu.component.html',
    styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit
{
    public collapsed: boolean;

    constructor() { }

    ngOnInit(): void
    {
        this.collapsed = true;
    }
}
