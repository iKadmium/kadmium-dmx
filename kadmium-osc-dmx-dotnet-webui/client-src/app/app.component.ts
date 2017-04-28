import { Component, ViewChild, OnInit } from '@angular/core';
import { MessageBarComponent } from "./message-bar/message-bar.component";
import { NotificationsService } from "./notifications.service";
import { Title } from "@angular/platform-browser";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit
{
    @ViewChild("messageBar") messageBar: MessageBarComponent;

    constructor(private titleService: Title, private notificationService: NotificationsService)
    {

    }

    ngOnInit(): void
    {
        this.notificationService.component = this.messageBar;
    }

    ngOnDestroy(): void
    {
        document.body.appendChild(document.createElement("app"));
    }
}
