import { Injectable } from '@angular/core';
import { URLs, Controller } from "./url";
import { Http } from "@angular/http";
import { Venue, VenueSkeleton } from "./venue";

@Injectable()
export class VenueService
{
    private venueUrl = URLs.getAPIUrl(Controller.Venue);

    constructor(private http: Http) { }

    public get(id: number): Promise<Venue>
    {
        return this.http.get(this.venueUrl + "/" + id)
            .toPromise()
            .then(response =>
            {
                let data = (response.json() as Venue);
                return data;
            });
    }

    public getSkeletons(): Promise<VenueSkeleton[]>
    {
        return this.http.get(this.venueUrl)
            .toPromise()
            .then(response =>
            {
                let data = (response.json() as VenueSkeleton[]);
                return data;
            });
    }

    public activate(id: number): Promise<void>
    {
        return this.http.get(this.venueUrl + "/activate/" + id)
            .toPromise()
            .then(response => { });
    }

    public put(id: number, venue: Venue): Promise<void>
    {
        return this.http.put(this.venueUrl + "/" + id, venue)
            .toPromise()
            .then(() => { });
    }

    public post(venue: Venue): Promise<number>
    {
        return this.http.post(this.venueUrl, venue)
            .toPromise()
            .then(request => parseInt(request.text()));
    }

    public delete(id: number): Promise<void>
    {
        return this.http.delete(this.venueUrl + "/" + id)
            .toPromise()
            .then(() => { });
    }

    public getActive(): Promise<Venue>
    {
        return this.http.get(this.venueUrl + "/GetActive")
            .toPromise()
            .then(value => value.json() as Venue);
    }

}
