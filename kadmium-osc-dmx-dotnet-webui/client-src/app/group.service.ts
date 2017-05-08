import { Injectable } from '@angular/core';
import { Group } from "./group";
import { Http } from "@angular/http";
import { URLs, Controller } from "./url";

@Injectable()
export class GroupService
{
    private groupsUrl = URLs.getAPIUrl(Controller.Group);

    constructor(private http: Http) { }

    public get(): Promise<Group[]>
    {
        return this.http.get(this.groupsUrl)
            .toPromise()
            .then(response =>
            {
                let data = (response.json() as Group[]);
                return data;
            });
    }

    public put(groups: Group[]): Promise<void>
    {
        return this.http.put(this.groupsUrl, groups)
            .toPromise()
            .then(response => { });
    }

    public set(group: string, attribute: string, value: number): Promise<void>
    {
        return this.http.get(this.groupsUrl + `/Set/${group}/${attribute}/${value}`)
            .toPromise()
            .then(response => { });
    }
}

@Injectable()
export class MockGroupService extends GroupService
{
    private groups: Group[];

    constructor()
    {
        super(null);
        this.groups = [
            new Group("Mock Group 1"),
            new Group("Mock Group 2"),
            new Group("Mock Group 3")
        ]
    }

    public get(): Promise<Group[]>
    {
        return new Promise<Group[]>(
            (resolve, reject) =>
            {
                resolve(this.groups);
            }
        )
    }

    public put(groups: Group[]): Promise<void>
    {
        return new Promise<void>(
            (resolve, reject) =>
            {
                this.groups = groups;
                resolve();
            }
        )
    }

    public set(group: string, attribute: string, value: number): Promise<void>
    {
        return new Promise<void>(
            (resolve, reject) =>
            {
                resolve();
            }
        )
    }
}
