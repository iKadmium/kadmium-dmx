import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { VenuePreset, VenuePresetSkeleton } from "./venue";

@Injectable()
export class VenuePresetService
{
    private venuePresetUrl = "/api/VenuePreset";

    constructor(private http: Http) { }

    public get(id: number): Promise<VenuePreset>
    {
        return this.http.get(this.venuePresetUrl + "/" + id)
            .toPromise()
            .then(response =>
            {
                let data = (response.json() as VenuePreset);
                return data;
            });
    }

    public getSkeletons(): Promise<VenuePresetSkeleton[]>
    {
        return this.http.get(this.venuePresetUrl)
            .toPromise()
            .then(response =>
            {
                let data = (response.json() as VenuePresetSkeleton[]);
                return data;
            });
    }
    
    public put(id: number, venuePreset: VenuePreset): Promise<void>
    {
        return this.http.put(this.venuePresetUrl + "/" + id, venuePreset)
            .toPromise()
            .then(() => { });
    }

    public post(venuePreset: VenuePreset): Promise<void> {
        return this.http.post(this.venuePresetUrl, venuePreset)
            .toPromise()
            .then(() => { });
    }

    public delete(id: number): Promise<void>
    {
        return this.http.delete(this.venuePresetUrl + "/" + id)
            .toPromise()
            .then(() => { });
    }
}