import { Component, OnInit } from '@angular/core';
import { NotificationsService } from "../notifications.service";
import { StatusCode } from "../status-code.enum";

@Component({
    selector: 'app-nav-menu',
    templateUrl: './nav-menu.component.html',
    styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit
{
    constructor(private notificationsService: NotificationsService) { }

    ngOnInit()
    {
    }

}
