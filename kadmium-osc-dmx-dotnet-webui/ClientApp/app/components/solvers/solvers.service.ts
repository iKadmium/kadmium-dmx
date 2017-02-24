import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { URLs } from "../../shared/url";

@Injectable()
export class SolversService
{
    private url = URLs.getAPIUrl("Solvers");

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
        return this.http.put(this.url + "/Enabled", value)
            .toPromise()
            .then(response => { });
    }
}