using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Net;
using System.Net.Sockets;
using kadmium_sacn;
using System.Threading;

namespace kadmium_sacn
{
    public class SACNServer
    {
        UdpClient Socket { get; set; }
        Int16 UniverseID { get; set; }
        private bool DataAvailableFlagged { get; set; }
        public event EventHandler<PacketReceivedEventArgs> OnReceive;

        public SACNServer(Int16 universeID)
        {
            UniverseID = universeID;
            Socket = new UdpClient(SACNCommon.SACN_PORT);
            Socket.JoinMulticastGroup(SACNCommon.GetMulticastAddress(UniverseID));

            Task.Run(() =>
            {
                while(true)
                {
                    while(Socket.Available == 0)
                    {
                        Thread.Sleep(10);
                    }
                    while(Socket.Available > 0)
                    {
                        IPEndPoint endPoint = null;
                        SACNPacket packet = SACNPacket.Parse(Socket.Receive(ref endPoint));
                        if(OnReceive != null)
                        {
                            OnReceive(this, new PacketReceivedEventArgs(packet, endPoint));
                        }
                        
                    }
                    
                }
            });
        }
        
        public class PacketReceivedEventArgs : EventArgs
        {
            public SACNPacket Packet { get; set; }
            public IPEndPoint Sender { get; set; }
            public PacketReceivedEventArgs(SACNPacket packet, IPEndPoint sender)
            {
                Packet = packet;
                Sender = sender;
            }
        }
    }
}
