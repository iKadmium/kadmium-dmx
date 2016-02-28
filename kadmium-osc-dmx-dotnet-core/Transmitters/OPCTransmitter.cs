using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Sockets;
using System.Net.WebSockets;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using System.Xml.Linq;

namespace kadmium_osc_dmx_dotnet_core.Transmitters
{
    class OPCTransmitter : Transmitter
    {
        ClientWebSocket webSocket;
        CancellationToken connectionCancelToken;
        CancellationToken sendCancellationToken;
        ArraySegment<byte> buffer;
        public byte Channel { get; set; }

        public OPCTransmitter(string name, string address, int port, byte channel, bool enabled = true) : base(name, address, Adapters.AdapterType.OPC, enabled)
        {
            Channel = channel;
            connectionCancelToken = new CancellationToken();
            webSocket = new ClientWebSocket();
            Uri uri = new Uri("ws://" + address + ":" + port);
            webSocket.ConnectAsync(uri, connectionCancelToken);
            buffer = ClientWebSocket.CreateClientBuffer(1024, 1024);
        }

        public override void Close()
        {
            CancellationToken closedCancellationToken = new CancellationToken();
            webSocket.CloseAsync(WebSocketCloseStatus.NormalClosure, "Closed", closedCancellationToken);
        }

        public override void TransmitInternal(byte[] dmx)
        {
            if(webSocket.State == WebSocketState.Open)
            {
                sendCancellationToken = new CancellationToken();
                webSocket.SendAsync(buffer, WebSocketMessageType.Binary, false, sendCancellationToken);
            }
            
        }

        public static OPCTransmitter LoadInternal(XElement element)
        {
            byte channel = byte.Parse(element.Attribute("channel").Value);
            string address = element.Attribute("address").Value;
            string id = element.Attribute("id").Value;
            bool enabled = bool.Parse(element.Attribute("enabled").Value);
            int port = int.Parse(element.Attribute("port").Value);
            OPCTransmitter transmitter = new OPCTransmitter(id, address, port, channel, enabled);
            return transmitter;
        }
    }
}
