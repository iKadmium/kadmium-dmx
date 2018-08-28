import { Injectable } from '@angular/core';
import { URLs, SocketController } from "./url";
import { Observable } from 'rxjs';
import { resolve } from 'dns';
import { WebSocketSubject } from '../../node_modules/rxjs/webSocket';

@Injectable({
    providedIn: 'root'
})
export class FixtureStreamService
{
    private socketUrl = URLs.getSocketURL(SocketController.Fixture);
    private subject: WebSocketSubject<AttributeUpdateData[]>;

    constructor()
    {

    }

    public open(universeID: number, fixtureAddress: number): Observable<AttributeUpdateData[]>
    {
        this.subject = new WebSocketSubject<AttributeUpdateData[]>(`${this.socketUrl}/${universeID}/${fixtureAddress}`);
        return this.subject;
    }

    public set(universeID: number, fixtureAddress: number, attributeName: string, attributeValue: number): void
    {
        let message: AttributeUpdateMessage = {
            universeID: universeID,
            fixtureAddress: fixtureAddress,
            attributeName: attributeName,
            attributeValue: attributeValue
        };
        this.subject.next(message as any);
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