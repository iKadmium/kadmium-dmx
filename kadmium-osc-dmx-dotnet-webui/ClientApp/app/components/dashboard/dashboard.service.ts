import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { URLs } from "../../shared/url";
import { StatusCode } from "../status/status";
import { RPCSocket } from "../../shared/rpc";

@Injectable()
export class DashboardService
{
    private socketUrl = URLs.getSocketURL("Dashboard");
    private rpc: RPCSocket;

    constructor(private http: Http)
    {
        this.rpc = new RPCSocket(this.socketUrl);
    }

    public subscribe(listener: Object): void
    {
        this.rpc.subscribe(listener);
    }
}

export interface StatusData
{
    code: StatusCode;
    message: string;
    controller: string;
}