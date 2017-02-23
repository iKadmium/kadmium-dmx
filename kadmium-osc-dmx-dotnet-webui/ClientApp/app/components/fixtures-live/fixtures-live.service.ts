import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { URLs } from "../../shared/url";

@Injectable()
export class FixturesLiveService
{
    private url = URLs.getAPIUrl("FixturesLive");

    constructor(private http: Http)
    {

    }

    public get(): Promise<UniverseData[]>
    {
        return this.http.get(this.url)
            .toPromise()
            .then(value => 
            {
                let data = value.json() as InitMessage;
                return data.universes;
            });
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

interface AttributeUpdateData
{
    name: string;
    value: number;
}

interface FixtureUpdateData
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

interface AttributeData
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

interface InitMessage
{
    universes: UniverseData[];
}