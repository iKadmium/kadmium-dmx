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
                resolve();
            });

            this.socket.addEventListener("error", (ev: Event) =>
            {
                let fred = ev;
                reject("Websocket could not connect");
            });
        });
    }

    public send(data: RPCData): void
    {
        this.socket.send(JSON.stringify(data));
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