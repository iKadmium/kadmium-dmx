import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { Controller, URLs, SocketController } from "../../shared/url";
import { RPCSocket, RPCData } from "../../shared/rpc";

@Injectable()
export class SolversLiveService
{
    private solversLiveURL = URLs.getAPIUrl(Controller.SolversLive);
    private socketUrl = URLs.getSocketURL(SocketController.SACN);
    private socket: RPCSocket;

    constructor(private http: Http)
    {
        this.socket = new RPCSocket(this.socketUrl);
    }

    public get(): Promise<UniverseData[]>
    {
        return this.http.get(this.solversLiveURL)
            .toPromise()
            .then(value => 
            {
                let data = value.json() as InitData;
                return data.universes;
            });
    }

    public subscribe(listener: Object): void
    {
        this.socket.subscribe(listener);
    }

    public set(fixtureID: number, attributeName: string, attributeValue: number): void
    {
        let message: RPCData = {
            method: "UpdateAttribute",
            args: {
                fixtureID: fixtureID,
                attributeName: attributeName,
                attributeValue: attributeValue
            }
        };
        this.socket.send(message);
    }

    public getEnabled(): Promise<boolean>
    {
        return this.http.get(this.solversLiveURL + "/Enabled")
            .toPromise()
            .then(response => response.json() as boolean);
    }

    public setEnabled(value: boolean): Promise<void>
    {
        return this.http.get(this.solversLiveURL + "/Enabled/" + value)
            .toPromise()
            .then(response => { });
    }

}

export interface AttributeUpdateMessage
{
    universeID: number;
    fixtureChannel: number;
    attributeName: string;
    attributeValue: number;
}

export interface AttributeUpdateData
{
    name: string;
    value: number;
}

export interface FixtureUpdateData
{
    channel: number;
    attributes: AttributeUpdateData[];
}

export interface AttributeData
{
    name: string;
    value: number;
    dmx: boolean;
    dmxMin: number;
    dmxMax: number;
    controlled: boolean;
}

export interface FixtureData
{
    id: number;
    type: string;
    address: number;
    attributes: AttributeData[];
}

export interface UniverseData
{
    universeID: number;
    fixtures: FixtureData[];
}

interface InitData
{
    universes: UniverseData[];
}