import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { URLs } from "../../shared/url";
import { FixtureDefinition } from "../fixture-definitions/fixture-definition";

@Injectable()
export class PreviewService
{
    private previewUrl = URLs.getAPIUrl("Preview");

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