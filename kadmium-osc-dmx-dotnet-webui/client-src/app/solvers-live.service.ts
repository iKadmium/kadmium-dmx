import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { URLs, SocketController, Controller } from "./url";
import { RPCSocket, RPCData } from "./rpcsocket";

@Injectable()
export class SolversLiveService
{
    private solversLiveURL = URLs.getAPIUrl(Controller.SolversLive);
    private socketUrl = URLs.getSocketURL(SocketController.Solvers);
    private socket: RPCSocket;

    constructor(private http: Http)
    {
        this.socket = new RPCSocket(this.socketUrl);
    }

    public async subscribe(listener: Object): Promise<void>
    {
        return new Promise<void>(async (resolve, reject) =>
        {
            try
            {
                await this.socket.connect();
                this.socket.subscribe(listener);
            }
            catch (error)
            {
                reject(error);
            }
        });

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
    fixtureID: number;
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

export class MockSolversLiveService
{
    private enabled: boolean;
    private universeData: UniverseData;

    constructor()
    {
        this.enabled = true;
        this.universeData = {
            universeID: 1,
            fixtures: [{
                address: 1,
                id: 1,
                type: "",
                attributes: [{
                    controlled: false,
                    dmx: true,
                    dmxMin: 0,
                    dmxMax: 255,
                    name: "White",
                    value: 0
                }]
            }]
        };
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

    public get(): Promise<UniverseData[]>
    {
        return new Promise<UniverseData[]>(
            (resolve, reject) =>
            {
                resolve([this.universeData]);
            }
        );
    }

    public subscribe(listener: Object): void
    {

    }

    public set(fixtureID: number, attributeName: string, attributeValue: number): void
    {
        let fixture = this.universeData.fixtures.find(x => x.id == fixtureID);
        let attribute = fixture.attributes.find(x => x.name == attributeName);
        attribute.value = attributeValue;
    }
}