using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Net;
using System.Net.Sockets;
using kadmium_sacn;
using System.Threading;

namespace kadmium_sacn
{
    public class SACNListener
    {
        UdpClient Socket { get; set; }
        Int16 UniverseID { get; set; }
        private bool DataAvailableFlagged { get; set; }
        public event EventHandler<PacketReceivedEventArgs> OnReceive;
        public Thread ListenerThread { get; set; }
        public int Port { get; set; }

        public SACNListener(Int16 universeID, int port)
        {
            Port = port;
            UniverseID = universeID;
            Socket = new UdpClient(port);
            Socket.JoinMulticastGroup(SACNCommon.GetMulticastAddress(UniverseID));
            
            ThreadStart start = new ThreadStart(ListenForPackets);

            ListenerThread = new Thread(start);
            ListenerThread.Start();
        }

        public SACNListener(Int16 universeID) : this(universeID, SACNCommon.SACN_PORT) { }

        void ListenForPackets()
        {
            while (true)
            {
                while (Socket.Available == 0)
                {
                    Thread.Sleep(10);
                }
                while (Socket.Available > 0)
                {
                    IPEndPoint endPoint = null;
                    SACNPacket packet = SACNPacket.Parse(Socket.Receive(ref endPoint));
                    if (OnReceive != null)
                    {
                        OnReceive(this, new PacketReceivedEventArgs(packet, endPoint));
                    }
                }
            }
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
