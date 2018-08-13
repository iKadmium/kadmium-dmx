import { Injectable } from '@angular/core';
import { URLs, SocketController } from "./url";

@Injectable({
    providedIn: 'root'
})
export class UniverseStreamService
{
    private socketUrl = URLs.getSocketURL(SocketController.Universe);
    private socket: WebSocket;
    private listener: (message: any) => void;

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
        this.socket.send(JSON.stringify(data));
    }

    public subscribe(universeID: number, listener: (data: Uint8Array) => void): void
    {
        this.socket = new WebSocket(this.socketUrl + "/" + universeID);
        this.socket.binaryType = "arraybuffer";
        if (this.listener != null)
        {
            this.unsubscribe();
        }
        this.listener = (message) =>
        {
            if (message.data instanceof ArrayBuffer)
            {
                let arr = new Uint8Array(message.data);
                listener(arr);
            }
        };
        this.socket.addEventListener("message", this.listener);
    }

    public unsubscribe(): void
    {
        if (this.socket != null)
        {
            this.socket.removeEventListener("message", this.listener);
            this.socket.close();
        }
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