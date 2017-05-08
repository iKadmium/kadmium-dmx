import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
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

@Injectable()
export class MockEnttecProTransmitterService
{
    private enabled: boolean;
    private ports: string[];

    constructor()
    {
        this.enabled = true;
        this.ports = ["COM1"];
    }

    public getEnabled(): Promise<boolean>
    {
        let promise = new Promise<boolean>(
            (resolve, reject) =>
            {
                resolve(this.enabled);
            }
        );
        return promise;
    }

    public setEnabled(value: boolean): Promise<void>
    {
        let promise = new Promise<void>(
            (resolve, reject) =>
            {
                this.enabled = value;
                resolve();
            }
        );
        return promise;
    }

    public getPorts(): Promise<string[]>
    {
        let promise = new Promise<string[]>(
            (resolve, reject) =>
            {
                resolve(this.ports);
            }
        );
        return promise;
    }
}