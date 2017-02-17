import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { VenuePreset } from "./venue";

@Injectable()
export class VenuePresetService
{
    private venuePresetUrl = "/api/VenuePreset";

    constructor(private http: Http) { }

    public get(id: string): Promise<VenuePreset>
    {
        return this.http.get(this.venuePresetUrl + "/" + id)
            .toPromise()
            .then(response =>
            {
                let data = (response.json() as VenuePreset);
                return data;
            });
    }

    public getNames(): Promise<string[]>
    {
        return this.http.get(this.venuePresetUrl)
            .toPromise()
            .then(response =>
            {
                let data = (response.json() as string[]);
                return data;
            });
    }

    public activate(id: string): Promise<void>
    {
        return this.http.get(this.venuePresetUrl + "/activate/" + id)
            .toPromise()
            .then(response => { });
    }

    public put(id: string, venuePreset: VenuePreset): Promise<void>
    {
        return this.http.put(this.venuePresetUrl + "/" + id, venuePreset)
            .toPromise()
            .then(() => { });
    }

    public delete(id: string): Promise<void>
    {
        return this.http.delete(this.venuePresetUrl + "/" + id)
            .toPromise()
            .then(() => { });
    }
}