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

    public async subscribe(listener: Object): Promise<void>
    {
        return new Promise<void>(async (resolve, reject) =>
        {
            try
            {
                await this.rpc.connect();
                this.rpc.subscribe(listener);
                resolve();
            }
            catch (error)
            {
                reject(error);
            }
        });
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

    public subscribe(listener: Object): Promise<void>
    {
        return new Promise<void>((resolve, reject) =>
        {
            resolve();
        });
    }

    public init(): void
    {

    }
}