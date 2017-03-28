import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Controller, URLs, SocketController } from "../../shared/url";
import { RPCSocket } from "../../shared/rpc";

@Injectable()
export class SACNTransmitterService
{
    private url = URLs.getAPIUrl(Controller.SACNTransmitter);
    private socketUrl = URLs.getSocketURL(SocketController.SACN);
    private rpc: RPCSocket;

    constructor(private http: Http)
    {
        this.rpc = new RPCSocket(this.socketUrl);
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

    public set(universeID: number, channel: number, value: number): Promise<void>
    {
        return this.http.get(this.url + `/Set/${universeID}/${channel}/${value}`)
            .toPromise()
            .then(response => { });
    }

    public subscribe(thisRef: Object): void
    {
        this.rpc.subscribe(thisRef);
    }
}

export interface UniverseUpdateData
{
    universeID: number,
    values: number[]
}