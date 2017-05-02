import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { URLs, Controller } from "./url";
import { FixtureDefinition } from "./fixture-definition";

@Injectable()
export class PreviewService
{
    private previewUrl = URLs.getAPIUrl(Controller.Preview);

    constructor(private http: Http)
    { }

    public get(): Promise<PreviewData>
    {
        return this.http.get(this.previewUrl)
            .toPromise()
            .then(response =>
            {
                let rawData = response.json();
                if (rawData.groups != null)
                {
                    let data = rawData as PreviewData;
                    return data;
                }
                else
                {
                    throw "No Venue Loaded";
                }
            });
    }
}

export interface PreviewData
{
    groups: string[];
    universes: PreviewUniverseData[];
}

export interface PreviewUniverseData
{
    name: string;
    universeID: number;
    fixtures: PreviewFixtureData[];
}

export interface PreviewFixtureData
{
    address: number;
    definition: FixtureDefinition;
    group: string;
}