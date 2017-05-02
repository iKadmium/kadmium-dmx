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
