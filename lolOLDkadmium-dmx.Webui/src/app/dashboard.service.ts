import { Injectable } from '@angular/core';
import { URLs, SocketController } from "./url";
import { StatusCode } from "./status-code.enum";

@Injectable()
export class StatusStreamService
{
    private socketUrl = URLs.getSocketURL(SocketController.Status);
    private socket: WebSocket;
    private messageListener: (message: any) => void;
    private openListener: (event: any) => void;


    constructor()
    {

    }

    public subscribe(listener: (data: StatusData) => void): void
    {
        this.socket = new WebSocket(this.socketUrl);
        if (this.messageListener != null)
        {
            this.unsubscribe();
        }
        this.messageListener = (message) =>
        {
            listener(JSON.parse(message.data) as StatusData);
        };
        this.openListener = (event) => 
        {
            this.socket.send("updateAll");
        };
        this.socket.addEventListener("message", this.messageListener);
        this.socket.addEventListener("open", this.openListener);
    }

    public unsubscribe(): void
    {
        if (this.socket != null)
        {
            this.socket.removeEventListener("message", this.messageListener);
            this.socket.removeEventListener("open", this.openListener);
            this.socket.close();
        }
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