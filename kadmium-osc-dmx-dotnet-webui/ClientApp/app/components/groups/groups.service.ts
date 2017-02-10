import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Group } from "./group";

@Injectable()
export class GroupsService
{
    private groupsUrl = "/api/Group";

    constructor(private http: Http) { }

    public get(): Promise<Group[]>
    {
        return this.http.get(this.groupsUrl)
            .toPromise()
            .then(response =>
            {
                let data = (response.json() as string[]);
                return data.map((value: string) => new Group(value));
            });
    }

    public put(groups: Group[]): Promise<void>
    {
        return this.http.put(this.groupsUrl, groups.map((value: Group) => value.name))
            .toPromise()
            .then(response => { });
    }
}