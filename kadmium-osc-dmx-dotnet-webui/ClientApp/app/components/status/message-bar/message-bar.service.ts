import { Injectable } from '@angular/core';
import { MessageBarComponent } from "./message-bar.component";
import { StatusCode } from "../status";

@Injectable()
export class MessageBarService
{
    public component: MessageBarComponent;
    constructor()
    {
        this.component = null;
    }

    public add(statusCode: StatusCode, message: string): void
    {
        this.component.add(statusCode, message);
    }
}