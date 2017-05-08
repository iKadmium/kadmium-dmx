import { Injectable } from '@angular/core';
import { URLs, SocketController } from "./url";
import { RPCSocket, RPCData } from "./rpcsocket";
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

    public init(): void
    {
        let data: RPCData = {
            method: "UpdateAll",
            args: {}
        };
        this.rpc.send(data);
    }
}

export interface StatusData
{
    code: string;
    message: string;
    controller: string;
}

@Injectable()
export class MockDashboardService extends DashboardService
{
    constructor()
    {
        super();
    }

    public subscribe(listener: Object): void
    {
    }

    public init(): void
    {

    }
}