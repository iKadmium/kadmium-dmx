import { Component, ViewChild, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";

import { MessageBarService } from "../status/message-bar/message-bar.service";

import { MessageBarComponent } from "../status/message-bar/message-bar.component";

@Component({
    selector: 'app',
    template: require('./app.component.html'),
    styles: [require('./app.component.css')],
    providers: [MessageBarService]
})
export class AppComponent implements OnInit
{
    @ViewChild("messageBar") messageBar: MessageBarComponent;

    constructor(private titleService: Title, private messageBarService: MessageBarService)
    {

    }

    ngOnInit(): void
    {
        this.messageBarService.component = this.messageBar;
    }
}
