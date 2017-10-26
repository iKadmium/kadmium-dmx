import { Injectable } from '@angular/core';
import { URLs, SocketController } from "./url";

@Injectable()
export class UniverseStreamService
{
    private socketUrl = URLs.getSocketURL(SocketController.Universe);
    private socket: WebSocket;

    constructor()
    {
        //this.socket = new WebSocket(this.socketUrl);
    }

    public set(universeID: number, channel: number, value: number): void
    {
        let data = {
            universeID: parseInt(universeID + ""),
            channel: parseInt(channel + ""),
            value: parseInt(value + "")
        };
        this.socket.send(data);
    }

    public subscribe(universeID: number, listener: (data: Uint8Array) => void): void
    {
        this.socket = new WebSocket(this.socketUrl + "/" + universeID);
        this.socket.binaryType = "arraybuffer";
        this.socket.addEventListener("message", (message) => 
        {
            if (message.data instanceof ArrayBuffer)
            {
                let arr = new Uint8Array(message.data);
                listener(arr);
            }
            else if (message.data instanceof Blob)
            {
                let bob = "lol";
                let evil = "lol";
            }
        });
    }

    public unsubscribe(thisRef: Object): void
    {
        this.socket.removeEventListener("message");
    }
}

export interface UniverseUpdateData
{
    universeID: number,
    values: number[]
}

export class MockSACNTransmitterService
{
    private enabled: boolean;
    private values: number[];

    constructor()
    {
        this.enabled = true;
        this.values = [].fill(0, 0, 512);
    }

    public subscribe(thisRef: Object): void
    {

    }

}