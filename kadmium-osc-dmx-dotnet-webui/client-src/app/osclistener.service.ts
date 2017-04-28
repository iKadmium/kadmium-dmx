import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { URLs, SocketController, Controller } from "./url";
import { RPCSocket } from "./rpcsocket";


@Injectable()
export class OSCListenerService
{
    private socketUrl = URLs.getSocketURL(SocketController.OSC);
    private url = URLs.getAPIUrl(Controller.OSCListener);
    private rpc: RPCSocket;

    constructor(private http: Http)
    {
        this.rpc = new RPCSocket(this.socketUrl);
    }

    public subscribe(thisRef: Object): void
    {
        this.rpc.subscribe(thisRef);
    }

    public getEnabled(): Promise<boolean>
    {
        return this.http.get(this.url + "/Enabled")
            .toPromise()
            .then(response => response.json() as boolean);
    }

    public setEnabled(value: boolean): Promise<void>
    {
        return this.http.get(this.url + "/Enabled/" + value)
            .toPromise()
            .then(response => { });
    }
}

export interface OSCListenerData
{
    address: string;
    recognised: boolean;
    time: Date;
    value: number;
}