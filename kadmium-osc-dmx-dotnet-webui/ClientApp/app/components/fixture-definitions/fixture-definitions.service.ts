import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { FixtureDefinitionSkeleton, FixtureDefinition } from "./fixture-definition";

@Injectable()
export class FixtureDefinitionsService
{
    private groupsUrl = "/api/FixtureDefinition";

    constructor(private http: Http) { }

    public get(): Promise<FixtureDefinitionSkeleton[]>
    {
        return this.http.get(this.groupsUrl)
            .toPromise()
            .then(response =>
            {
                let data = (response.json() as FixtureDefinitionSkeleton[]);
                return data;
            });
    }
}