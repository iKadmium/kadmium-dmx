import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { URL } from "../../shared/url";

@Injectable()
export class OSCListenerService
{
    private socketUrl = URL.getSocketURL("OSC");
    private socket: WebSocket;

    constructor()
    {
        this.socket = new WebSocket(this.socketUrl);
    }

    public subscribe(listener: (data: OSCListenerData) => void): void
    {
        this.socket.addEventListener("message", (ev: MessageEvent) =>
        {
            let data = JSON.parse(ev.data) as OSCListenerData;
            listener(data);
        });
    }
}

interface OSCListenerData
{
    address: string;
    recognised: boolean;
    time: Date;
    value: number;
}