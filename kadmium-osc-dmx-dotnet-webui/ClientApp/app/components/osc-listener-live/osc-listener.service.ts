import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { URLs } from "../../shared/url";

@Injectable()
export class OSCListenerService {
    private socketUrl = URLs.getSocketURL("OSC");
    private url = URLs.getAPIUrl("OSCListener");
    private socket: WebSocket;

    constructor(private http: Http) {
        this.socket = new WebSocket(this.socketUrl);
    }

    public subscribe(listener: (data: OSCListenerData) => void): void {
        this.socket.addEventListener("message", (ev: MessageEvent) => {
            let data = JSON.parse(ev.data) as OSCListenerData;
            listener(data);
        });
    }

    public getEnabled(): Promise<boolean> {
        return this.http.get(this.url + "/Enabled")
            .toPromise()
            .then(response => response.json() as boolean);
    }

    public setEnabled(value: boolean): Promise<void> {
        return this.http.get(this.url + "/Enabled/" + value)
            .toPromise()
            .then(response => { });
    }
}

interface OSCListenerData {
    address: string;
    recognised: boolean;
    time: Date;
    value: number;
}