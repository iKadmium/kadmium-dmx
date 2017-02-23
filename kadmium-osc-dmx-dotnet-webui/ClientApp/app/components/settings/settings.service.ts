import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Settings, SettingsData } from "./settings";
import { URLs } from "../../shared/url";

@Injectable()
export class SettingsService
{
    private settingsUrl = URLs.getAPIUrl("Settings");

    constructor(private http: Http) { }

    public get(): Promise<Settings>
    {
        return this.http.get(this.settingsUrl)
            .toPromise()
            .then(response =>
            {
                let data = (response.json() as SettingsData);
                return Settings.deserialize(data);
            })
            .catch(this.handleError);
    }

    public save(data: Settings): Promise<void>
    {
        return this.http.post(this.settingsUrl, data.serialize())
            .toPromise()
            .then(response =>
            {
            })
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> 
    {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}