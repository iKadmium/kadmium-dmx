import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { URLs } from "../../shared/url";

@Injectable()
export class SACNTransmitterService
{
    private url = URLs.getAPIUrl("SACNTransmitter");

    constructor(private http: Http)
    {
    }


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

    public set(universeID: number, channel: number, value: number): Promise<void>
    {
        return this.http.get(this.url + `/Set/${universeID}/${channel}/${value}`)
            .toPromise()
            .then(response => { });
    }
}