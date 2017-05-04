import { Injectable } from '@angular/core';
import { URLs, Controller } from "./url";
import { Http } from "@angular/http";
import { FixtureDefinitionSkeleton, FixtureDefinition, FixtureDefinitionData, FixtureType } from "./fixture-definition";

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

export class MockFixtureDefinitionService 
{
    private skeletons: FixtureDefinitionSkeleton[];
    private definitions: FixtureDefinition[];

    constructor()
    {
        this.skeletons = [
            { id: 1, manufacturer: "Manufacturer", model: "Model" }
        ];
        this.definitions = [
            {
                id: 1,
                lux: 3000,
                colorWheel: [],
                manufacturer: "Manufacturer",
                model: "Model",
                type: FixtureType.LED,
                movements: [],
                beamAngle: 30,
                channels: [
                    {
                        address: 1,
                        max: 255,
                        min: 0,
                        name: "White"
                    }
                ]
            }
        ];
    }

    public getSkeletons(): Promise<FixtureDefinitionSkeleton[]>
    {
        return new Promise<FixtureDefinitionSkeleton[]>(
            (resolve, reject) =>
            {
                resolve(this.skeletons);
            }
        );
    }

    public get(id: number): Promise<FixtureDefinition>
    {
        return new Promise<FixtureDefinition>(
            (resolve, reject) =>
            {
                resolve(this.definitions.find(x => x.id == id));
            }
        );
    }

    public put(definition: FixtureDefinition): Promise<void>
    {
        return new Promise<void>(
            (resolve, reject) =>
            {
                let index = this.definitions.findIndex(x => x.id == definition.id);
                this.definitions.splice(index, 1);
                this.definitions.push(definition);
                resolve();
            }
        );
    }

    public post(definition: FixtureDefinition): Promise<number>
    {
        return new Promise<number>(
            (resolve, reject) =>
            {
                this.definitions.push(definition);
                definition.id = this.definitions.length;
                resolve(definition.id);
            }
        );

    }

    public delete(definition: FixtureDefinitionSkeleton): Promise<void>
    {
        return new Promise<void>(
            (resolve, reject) =>
            {
                let index = this.definitions.findIndex(x => x.id == definition.id);
                this.definitions.splice(index, 1);
                resolve();
            }
        );
    }
}