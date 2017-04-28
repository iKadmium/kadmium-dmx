import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { URLs, Controller } from "./url";

@Injectable()
export class EnttecProTransmitterService
{
    private url = URLs.getAPIUrl(Controller.EnttecProTransmitter);

    constructor(private http: Http) { }

    public getEnabled(): Promise<boolean>
    {
        return this.http.get(this.url + "/Enabled")
            .toPromise()
            .then(response => response.json() as boolean);
    }

    public setEnabled(value: boolean): Promise<void>
    {
        return this.http.get(this.url + "/Enabled/" + value)
            .toPromise()
            .then(response => { });
    }

    public getPorts(): Promise<string[]>
    {
        return this.http.get(this.url + "/GetPorts")
            .toPromise()
            .then(response =>
            {
                return response.json() as string[];
            });
    }
}