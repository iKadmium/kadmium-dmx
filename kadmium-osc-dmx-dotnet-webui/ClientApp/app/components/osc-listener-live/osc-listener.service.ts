import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { URLs } from "../../shared/url";
import { RPCSocket } from "../../shared/rpc";

@Injectable()
export class OSCListenerService
{
    private socketUrl = URLs.getSocketURL("OSC");
    private url = URLs.getAPIUrl("OSCListener");
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