import { Injectable } from '@angular/core';
import { URLs, SocketController } from "./url";
import { RPCSocket } from "./rpcsocket";
import { StatusCode } from "./status-code.enum";

@Injectable()
export class DashboardService
{
    private socketUrl = URLs.getSocketURL(SocketController.Dashboard);
    private rpc: RPCSocket;

    constructor()
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
    code: string;
    message: string;
    controller: string;
}

export class MockDashboardService
{
    constructor()
    { }

    public subscribe(listener: Object): void
    {

    }
}