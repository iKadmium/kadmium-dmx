import { Injectable } from '@angular/core';
import { URLs, SocketController } from "./url";
import { StatusCode } from "./status-code.enum";

@Injectable()
export class StatusStreamService
{
    private socketUrl = URLs.getSocketURL(SocketController.Status);
    private socket: WebSocket;

    constructor()
    {

    }

    public subscribe(listener: (data: StatusData) => void): void
    {
        this.socket = new WebSocket(this.socketUrl);
        this.socket.addEventListener("message", (message) => 
        {
            listener(JSON.parse(message.data) as StatusData);
        });
        this.socket.addEventListener("open", (event) => 
        {
            this.socket.send("updateAll");
        });
    }

    public unsubscribe(thisRef: Object): void
    {
        this.socket.removeEventListener("message");
    }
}

export interface StatusData
{
    code: string;
    message: string;
    controller: string;
}

@Injectable()
export class MockDashboardService extends StatusStreamService
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

    public init(): Promise<void>
    {
        return new Promise<void>((resolve, reject) => 
        {
            resolve();
        });
    }
}