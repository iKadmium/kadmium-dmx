import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { URLs } from "../../shared/url";

@Injectable()
export class SolversLiveService
{
    private solversLiveURL = URLs.getAPIUrl("SolversLive");
    private socketUrl = URLs.getSocketURL("Fixtures");
    private socket: WebSocket;

    constructor(private http: Http)
    {
        this.socket = new WebSocket(this.socketUrl);
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

    public subscribe(listener: (data: UniverseUpdateMessage) => void): void
    {
        this.socket.addEventListener("message", (ev: MessageEvent) =>
        {
            let data = JSON.parse(ev.data) as UniverseUpdateMessage;
            listener(data);
        });
    }

    public set(universeID: number, fixtureChannel: number, attributeName: string, attributeValue: number): void
    {
        let message: AttributeUpdateMessage = {
            messageType: "attributeUpdate",
            universeID: universeID,
            fixtureChannel: fixtureChannel,
            attributeName: attributeName,
            attributeValue: attributeValue
        };
        this.socket.send(JSON.stringify(message));
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

interface WebSocketMessage
{
    messageType: string;
}

interface AttributeUpdateMessage extends WebSocketMessage
{
    messageType: "attributeUpdate";
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

interface UniverseUpdateMessage extends WebSocketMessage
{
    messageType: "universeUpdate";
    universeID: number;
    fixtures: FixtureUpdateData[];
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
    type: string;
    channel: number;
    attributes: AttributeData[];
}

export interface UniverseData
{
    universeID: number;
    name: string;
    fixtures: FixtureData[];
}

interface InitData
{
    universes: UniverseData[];
}