namespace Preview2D
{
    interface Channel
    {
        [address: number]: number;
    }

    interface Movement
    {
        name: string;
        value: number;
    }
    
    interface Fixture
    {
        address: number;
        color: string;
        channels: Channel[];
        movements: Movement[];
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
            let canvas = $("#canvas-" + fixture.address)[0] as HTMLCanvasElement;
            let ctx = canvas.getContext("2d");
            ctx.fillStyle = fixture.color;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.strokeStyle = invertColor(fixture.color);
            for (let channel of fixture.channels)
            {
                for (let channelNumber in channel)
                {
                    let channelValue = channel[channelNumber];
                    $("#channel-" + channelNumber).text(channelValue);
                }
            }
            for (let movement of fixture.movements)
            {
                if (movement.name == "Pan")
                {
                    let x = canvas.width * movement.value;
                    ctx.beginPath();
                    ctx.moveTo(x, 0);
                    ctx.lineTo(x, canvas.height);
                    ctx.closePath();
                    ctx.stroke();
                }
                else if (movement.name == "Tilt")
                {
                    let y = canvas.height * movement.value;
                    ctx.beginPath();
                    ctx.moveTo(0, y);
                    ctx.lineTo(canvas.width, y);
                    ctx.closePath();
                    ctx.stroke();
                }
            }
        }
    }

    function invertColor(color: string): string
    {
        let red = parseInt("0x" + color.substr(1, 2));
        let green = parseInt("0x" + color.substr(3, 2));
        let blue = parseInt("0x" + color.substr(5, 2));

        red = 255 - red;
        green = 255 - green;
        blue = 255 - blue;

        return "rgb(" + red + ", " + green + ", " + blue + ")";
    }
    window.addEventListener("load", onLoad);
}