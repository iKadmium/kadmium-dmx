export class RPCSocket
{
    private clients: Object[];
    private socket: WebSocket;
    private address: string;

    constructor(address: string)
    {
        this.address = address;
        this.clients = [];
    }

    public connect(): Promise<void>
    {
        return new Promise<void>((resolve, reject) =>
        {
            this.socket = new WebSocket(this.address);
            this.socket.addEventListener("open", () =>
            {
                if (this.socket.readyState == this.socket.OPEN)
                {
                    resolve();
                }
            });

            this.socket.addEventListener("error", (ev: Event) =>
            {
                reject("Websocket could not connect");
            });
        });
    }

    public async send(data: RPCData): Promise<void>
    {
        return new Promise<void>((resolve, reject) =>
        {
            try
            {
                let cutoffTime = Date.now() + 5000;

                while (this.socket.readyState != WebSocket.OPEN && (Date.now() < cutoffTime))
                { }

                this.socket.send(JSON.stringify(data));
                resolve();


            }
            catch (error)
            {
                reject(error);
            }
        });


    }

    public subscribe(thisRef: Object): void
    {
        this.clients.push(thisRef);
        this.socket.addEventListener("message", (ev: MessageEvent) =>
        {
            let data = JSON.parse(ev.data) as RPCData;
            if (data != null)
            {
                let method = thisRef[data.method] as Function;
                if (method != null)
                {
                    method.apply(thisRef, [data.args]);
                }
                else
                {
                    console.error(`Call to non-existent RPC ${data.method} on ${thisRef}`);
                }
            }
            else
            {
                console.error(`Malformed RPC call - ${ev.data}`);
            }

        });
    }

}

export interface RPCData
{
    method: string;
    args: RPCArgs;
}

export interface RPCArgs
{
    [key: string]: any;
}