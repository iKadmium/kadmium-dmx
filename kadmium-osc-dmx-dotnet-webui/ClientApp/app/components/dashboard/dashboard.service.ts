import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { URLs } from "../../shared/url";
import { StatusCode } from "../status/status";

@Injectable()
export class DashboardService
{
    private socketUrl = URLs.getSocketURL("Dashboard");
    private socket: WebSocket;

    constructor(private http: Http)
    {
        this.socket = new WebSocket(this.socketUrl);
    }

    public subscribe(listener: (data: StatusData) => void): void
    {
        this.socket.addEventListener("message", (ev: MessageEvent) =>
        {
            let data = JSON.parse(ev.data) as StatusData;
            listener(data);
        });
    }
}

interface StatusData
{
    code: StatusCode;
    message: string;
    controller: string;
}