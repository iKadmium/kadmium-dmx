import { Injectable } from '@angular/core';
import { URLs, SocketController } from "./url";

@Injectable({
    providedIn: 'root'
})
export class FixtureStreamService
{
    private socketUrl = URLs.getSocketURL(SocketController.Fixture);
    private socket: WebSocket;
    private listener: (message: any) => void;

    constructor()
    {

    }

    public subscribe(universeID: number, fixtureAddress: number, listener: (data: AttributeUpdateData[]) => void): void
    {
        this.socket = new WebSocket(`${this.socketUrl}/${universeID}/${fixtureAddress}`);
        if (this.listener != null)
        {
            this.unsubscribe();
        }
        this.listener = (message) =>
        {
            let updates = JSON.parse(message.data) as AttributeUpdateData[];
            listener(updates);
        };
        this.socket.addEventListener("message", this.listener);
    }

    public unsubscribe(): void
    {
        if (this.socket != null)
        {
            this.socket.removeEventListener("message", this.listener);
            this.socket.close();
        }
    }

    public set(universeID: number, fixtureAddress: number, attributeName: string, attributeValue: number): void
    {
        let message: AttributeUpdateMessage = {
            universeID: universeID,
            fixtureAddress: fixtureAddress,
            attributeName: attributeName,
            attributeValue: attributeValue
        };
        this.socket.send(JSON.stringify(message));
    }
}

export interface AttributeUpdateMessage
{
    universeID: number,
    fixtureAddress: number;
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