import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Venue } from "./venue";

@Injectable()
export class VenueService
{
    private venueUrl = "/api/Venue";

    constructor(private http: Http) { }

    public get(id: string): Promise<Venue>
    {
        return this.http.get(this.venueUrl + "/" + id)
            .toPromise()
            .then(response =>
            {
                let data = (response.json() as Venue);
                return data;
            });
    }

    public getNames(): Promise<string[]>
    {
        return this.http.get(this.venueUrl)
            .toPromise()
            .then(response =>
            {
                let data = (response.json() as string[]);
                return data;
            });
    }

    public activate(id: string): Promise<void>
    {
        return this.http.get(this.venueUrl + "/activate/" + id)
            .toPromise()
            .then(response => { });
    }
}