import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Group } from "./group";

@Injectable()
export class GroupsService
{
    private groupsUrl = "/api/Group";

    constructor(private http: Http) { }

    public get(id: string): Promise<Group>
    {
        return this.http.get(this.groupsUrl + "/" + id)
            .toPromise()
            .then(response =>
            {
                let data = (response.json() as Group);
                return data;
            });
    }

    public getNames(): Promise<string[]>
    {
        return this.http.get(this.groupsUrl)
            .toPromise()
            .then(response =>
            {
                let data = (response.json() as string[]);
                return data;
            });
    }
}