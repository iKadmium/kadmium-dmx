import { Component } from '@angular/core';

import { Status, StatusCode } from "../status";

@Component({
    selector: 'message-bar',
    template: require('./message-bar.component.html')
})
export class MessageBarComponent
{
    private messages: Status[];

    constructor()
    {
        this.messages = [];
    }

    private remove(status: Status)
    {
        let index = this.messages.indexOf(status);
        this.messages.splice(index, 1);
    }

    public add(statusCode: StatusCode, message: string): void
    {
        this.messages.push(new Status(statusCode, message));
    }
}