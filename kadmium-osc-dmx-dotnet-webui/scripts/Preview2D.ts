namespace Preview2D
{
    interface Channel
    {
        [address: number]: number;
    }

    interface Fixture
    {
        address: number;
        color: string;
        channels: Channel[];
    }

    let socket: WebSocket;
    function onLoad() : void
    {
        socket = new WebSocket(document.URL.replace("http://", "ws://") + "/Socket");
        socket.addEventListener("message", websocket_onMessage);        
    }

    function websocket_onMessage(message: MessageEvent)
    {
        let data = JSON.parse(message.data) as Fixture[];
        for (let fixture of data)
        {
            for (let channel of fixture.channels)
            {
                for (let channelNumber in channel)
                {
                    let channelValue = channel[channelNumber];
                    $("#channel-" + channelNumber).text(channelValue);
                }
            }
        }
    }
    window.addEventListener("load", onLoad);
}