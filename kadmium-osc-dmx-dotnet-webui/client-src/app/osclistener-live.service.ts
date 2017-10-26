import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { URLs, SocketController } from "./url";


@Injectable()
export class OSCListenerLiveService
{
    private socketUrl = URLs.getSocketURL(SocketController.OSC);
    private socket: WebSocket;

    constructor()
    {
        this.socket = new WebSocket(this.socketUrl);
    }

    public subscribe(listener: (data: OSCListenerData) => void): void
    {
        this.socket.addEventListener("message", (message) => 
        {
            let msg = JSON.parse(message.data) as OSCListenerData;
            listener(msg);
        });
    }

    public unsubscribe(thisRef: Object): void
    {
        this.socket.removeEventListener("message");
    }
}

export interface OSCListenerData
{
    address: string;
    recognised: boolean;
    time: Date;
    value: number;
}

export class MockOSCListenerService
{
    private enabled: boolean;

    constructor()
    {
        this.enabled = true;
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

    public subscribe(thisRef: Object): void
    {

    }
}