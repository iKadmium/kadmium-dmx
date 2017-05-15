import { Injectable } from '@angular/core';
import { Controller, URLs, SocketController } from "./url";
import { RPCSocket, RPCData } from "./rpcsocket";
import { Http } from "@angular/http";
import 'rxjs/add/operator/toPromise';

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

    public set(universeID: number, channel: number, value: number): void
    {
        let data: RPCData = {
            method: "UpdateDMX",
            args: {
                universeID: parseInt(universeID + ""),
                channel: parseInt(channel + ""),
                value: parseInt(value + "")
            }
        };
        this.rpc.send(data);
    }

    public async subscribe(thisRef: Object): Promise<void>
    {
        return new Promise<void>(async (resolve, reject) =>
        {
            try
            {
                await this.rpc.connect();
                this.rpc.subscribe(thisRef);
                resolve();
            }
            catch (error)
            {
                reject(error);
            }
        });

    }
}

export interface UniverseUpdateData
{
    universeID: number,
    values: number[]
}

export class MockSACNTransmitterService
{
    private enabled: boolean;
    private values: number[];

    constructor()
    {
        this.enabled = true;
        this.values = [].fill(0, 0, 512);
    }

    public getEnabled(): Promise<boolean>
    {
        let promise = new Promise<boolean>(
            (resolve, reject) =>
            {
                resolve(this.enabled);
            }
        );
        return promise;
    }

    public setEnabled(value: boolean): Promise<void>
    {
        let promise = new Promise<void>(
            (resolve, reject) =>
            {
                this.enabled = value;
                resolve();
            }
        );
        return promise;
    }

    public set(universeID: number, channel: number, value: number): void
    {
        this.values[channel] = value;
    }

    public subscribe(thisRef: Object): void
    {

    }

}