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
    type: string;
    address: number;
    attributes: AttributeData[];
}

export interface UniverseData
{
    universeID: number;
    fixtures: FixtureData[];
}