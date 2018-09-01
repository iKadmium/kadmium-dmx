import { Injectable } from '@angular/core';
import { URLs, SocketController } from "./url";
import { Observable } from 'rxjs';
import { resolve } from 'path';
import { WebSocketSubject, WebSocketSubjectConfig } from 'rxjs/webSocket';

@Injectable({
    providedIn: 'root'
})
export class UniverseStreamService
{
    private socketUrl = URLs.getSocketURL(SocketController.Universe);
    private subject: WebSocketSubject<Uint8Array>;

    constructor()
    {
    }

    public set(universeID: number, channel: number, value: number): void
    {
        let data = {
            universeID: parseInt(universeID + ""),
            channel: parseInt(channel + ""),
            value: parseInt(value + "")
        };
        this.subject.next(data as any);
    }

    public open(universeID: number): Observable<Uint8Array>
    {
        let config: WebSocketSubjectConfig<Uint8Array> = {
            binaryType: "arraybuffer",
            url: `${this.socketUrl}/${universeID}`,
            deserializer: (e: MessageEvent) => new Uint8Array(e.data)
        };
        this.subject = new WebSocketSubject<Uint8Array>(config);
        return this.subject.asObservable();
    }
}