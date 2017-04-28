export class RPCSocket
{
    private clients: Object[];
    private socket: WebSocket;

    constructor(address: string)
    {
        this.socket = new WebSocket(address);
        this.clients = [];
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
    args: Object;
}