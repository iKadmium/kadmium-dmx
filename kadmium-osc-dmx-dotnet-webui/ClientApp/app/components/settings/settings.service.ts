import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Settings, SettingsData } from "./settings";
import { Controller, URLs } from "../../shared/url";

@Injectable()
export class SettingsService
{
    private settingsUrl = URLs.getAPIUrl(Controller.Settings);

    constructor(private http: Http) { }

    public get(): Promise<Settings>
    {
        return this.http.get(this.settingsUrl)
            .toPromise()
            .then(response =>
            {
                let data = (response.json() as SettingsData);
                return Settings.deserialize(data);
            });
    }

    public save(data: Settings): Promise<void>
    {
        return this.http.post(this.settingsUrl, data.serialize())
            .toPromise()
            .then(response =>
            {
            });
    }
}