import { Injectable } from '@angular/core';
import { URLs, Controller } from "./url";
import { Http } from "@angular/http";
import { FixtureDefinitionSkeleton, FixtureDefinition, FixtureDefinitionData } from "./fixture-definition";

@Injectable()
export class FixtureDefinitionService
{

    private fixtureDefinitionsUrl = URLs.getAPIUrl(Controller.FixtureDefinition);

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

    public get(id: number): Promise<FixtureDefinition>
    {
        return this.http.get(this.fixtureDefinitionsUrl + "/" + id)
            .toPromise()
            .then(response =>
            {
                let data = (response.json() as FixtureDefinitionData);
                return FixtureDefinition.load(data);
            });
    }

    public put(definition: FixtureDefinition): Promise<void>
    {
        return this.http.put(this.fixtureDefinitionsUrl + "/" + definition.id, definition)
            .toPromise()
            .then(response => { });
    }

    public post(definition: FixtureDefinition): Promise<number>
    {
        return this.http.post(this.fixtureDefinitionsUrl, definition)
            .toPromise()
            .then(response => parseInt(response.text()));
    }

    public delete(fixture: FixtureDefinitionSkeleton): Promise<void>
    {
        return this.http.delete(this.fixtureDefinitionsUrl + "/" + fixture.id)
            .toPromise()
            .then(response => { });
    }

}
