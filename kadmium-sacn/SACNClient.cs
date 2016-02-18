using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Sockets;
using System.Text;
using System.Threading.Tasks;

namespace kadmium_sacn
{
    public class SACNClient
    {
        public Guid UUID { get; set; }
        private UdpClient Socket { get; set; }
        public IPAddress UnicastAddress { get; set; }
        public bool Multicast { get { return UnicastAddress == null; } }

        byte sequenceID = 0;

        public string SourceName { get; set; }

        public SACNClient(Guid uuid, string sourceName)
        {
            SourceName = sourceName;
            UUID = uuid;
            Socket = new UdpClient();
        }

        public void Send(Int16 universeID, byte[] data)
        {
            SACNPacket packet = new SACNPacket(universeID, SourceName, UUID, sequenceID++, data);
            byte[] packetBytes = packet.ToArray();
            SACNPacket parsed = SACNPacket.Parse(packetBytes);
            Socket.Send(packetBytes, packetBytes.Length, GetEndPoint(universeID));
        }

        private IPEndPoint GetEndPoint(Int16 universeID)
        {
            if(Multicast)
            {
                return new IPEndPoint(SACNCommon.GetMulticastAddress(universeID), SACNCommon.SACN_PORT);
            }
            else
            {
                return new IPEndPoint(UnicastAddress, SACNCommon.SACN_PORT);
            }
        }
        
        

        public void Close()
        {
            Socket.Close();
        }
    }
}
