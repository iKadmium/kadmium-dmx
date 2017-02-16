import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { FixtureDefinitionSkeleton, FixtureDefinition, FixtureDefinitionData } from "./fixture-definition";

@Injectable()
export class FixtureDefinitionsService
{
    private fixtureDefinitionsUrl = "/api/FixtureDefinition";

    constructor(private http: Http) { }

    public getSkeletons(): Promise<FixtureDefinitionSkeleton[]>
    {
        return this.http.get(this.fixtureDefinitionsUrl)
            .toPromise()
            .then(response =>
            {
                let data = (response.json() as FixtureDefinitionSkeleton[]);
                return data;
            });
    }

    public get(manufacturer: string, model: string): Promise<FixtureDefinition>
    {
        return this.http.get(this.fixtureDefinitionsUrl + "/" + manufacturer + "/" + model)
            .toPromise()
            .then(response =>
            {
                let data = (response.json() as FixtureDefinitionData);
                return FixtureDefinition.load(data);
            });
    }

    public put(manufacturer: string, model: string, definition: FixtureDefinition): Promise<void>
    {
        return this.http.put(this.fixtureDefinitionsUrl + "/" + manufacturer + "/" + model, definition)
            .toPromise()
            .then(response => { });
    }

    public delete(fixture: FixtureDefinitionSkeleton): Promise<void>
    {
        return this.http.delete(this.fixtureDefinitionsUrl + "/" + fixture.manufacturer + "/" + fixture.model)
            .toPromise()
            .then(response => { });
    }
}