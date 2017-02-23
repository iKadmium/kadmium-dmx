import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Venue } from "./venue";
import { URLs } from "../../shared/url";

@Injectable()
export class VenueService
{
    private venueUrl = URLs.getAPIUrl("Venue");

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

    public put(id: string, venue: Venue): Promise<void>
    {
        return this.http.put(this.venueUrl + "/" + id, venue)
            .toPromise()
            .then(() => { });
    }

    public delete(id: string): Promise<void>
    {
        return this.http.delete(this.venueUrl + "/" + id)
            .toPromise()
            .then(() => { });
    }
}