import { Injectable } from '@angular/core';
import { URLs, SocketController } from "./url";
import { Observable } from 'rxjs';
import { WebSocketSubject } from 'rxjs/webSocket';
import { StatusCode } from './enums/status-code.enum';

@Injectable({
    providedIn: 'root'
})
export class StatusStreamService
{
    private socketUrl = URLs.getSocketURL(SocketController.Status);
    private webSocketSubject: WebSocketSubject<StatusData>

    constructor()
    {
    }

    public open(): Observable<StatusData>
    {
        this.webSocketSubject = new WebSocketSubject<StatusData>(this.socketUrl);
        this.webSocketSubject.next("updateAll" as any);
        return this.webSocketSubject.asObservable();
    }
}

export interface StatusData
{
    code: StatusCode;
    message: string;
    controller: string;
}