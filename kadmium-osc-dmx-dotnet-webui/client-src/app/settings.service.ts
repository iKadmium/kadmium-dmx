import { Http } from "@angular/http";

import { Injectable } from '@angular/core';
import { Controller, URLs } from "./url";
import { Settings, SettingsData } from "./settings";

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
