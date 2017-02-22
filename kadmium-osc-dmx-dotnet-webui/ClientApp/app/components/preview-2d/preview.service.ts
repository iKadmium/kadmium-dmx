import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { PreviewData, UniverseUpdateData } from "./preview";
import { URL } from "../../shared/url";

@Injectable()
export class PreviewService
{
    private previewUrl = "/api/Preview";
    private socketUrl = URL.getSocketURL("Preview");
    private socket: WebSocket;

    constructor(private http: Http)
    {
        this.socket = new WebSocket(this.socketUrl);
    }

    public get(): Promise<PreviewData>
    {
        return this.http.get(this.previewUrl)
            .toPromise()
            .then(response =>
            {
                let rawData = response.json();
                if (rawData.groups != null)
                {
                    let data = rawData as PreviewData;
                    return data;
                }
                else
                {
                    throw "No Venue Loaded";
                }
            });
    }

    public subscribe(listener: (data: UniverseUpdateData) => void): void
    {
        this.socket.addEventListener("message", (ev: MessageEvent) =>
        {
            let data = JSON.parse(ev.data) as UniverseUpdateData;
            listener(data);
        });
    }
}