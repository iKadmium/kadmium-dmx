﻿using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Sockets;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json.Linq;
using kadmium_sacn_core;

namespace kadmium_osc_dmx_dotnet_core.Transmitters
{
    public class SACNTransmitter : Transmitter
    {
        static string SOURCE_NAME = "Kadmium-OSC-DMX";
        private SACNSender SACNClient { get; set; }
        public IPAddress UnicastAddress { get; set; }
        public bool Multicast { get { return UnicastAddress != null; } }
        public int Port { get; set; }
        public event EventHandler<TransmitterEventArgs> OnTransmit;

        public new string DisplayName
        {
            get
            {
                return "SACN Transmitter [" + Name + "]";
            }
        }
        
        public override void TransmitInternal(byte[] dmx, int universeID)
        {
            SACNClient?.Send((short)universeID, dmx);
            OnTransmit?.Invoke(this, new TransmitterEventArgs(universeID, dmx));
        }

        public SACNTransmitter(Guid uuid, string name, int port, int delay) : base(name, delay)
        {
            Port = port;
            try
            {
                SACNClient = new SACNSender(uuid, SOURCE_NAME, port);
                Status.Update(StatusCode.Running, "Multicast Sending", this);
            }
            catch (Exception e)
            {
                Status.Update(StatusCode.Error, e.Message, this);
            }
        }

        public new static SACNTransmitter Load(JObject element)
        {
            string id = element["name"].Value<string>();
            int port = 5568;//int.Parse(element.Attribute("port").Value);
            int delay = element["delay"].Value<int>();
            SACNTransmitter transmitter = new SACNTransmitter(Guid.NewGuid(), id, port, delay);
            return transmitter;
        }

        public override void Close()
        {
            SACNClient.Close();
        }

        public override JObject Serialize()
        {
            JObject obj = new JObject(
                new JProperty("name", Name),
                new JProperty("description", SACNClient.SourceName),
                new JProperty("delay", Delay)
            );

            return obj;
        }
    }

    public class TransmitterEventArgs : EventArgs
    {
        public byte[] DMX { get; }
        public int UniverseID { get; }

        public TransmitterEventArgs(int universeID, byte[] dmx)
        {
            UniverseID = universeID;
            DMX = dmx;
        }
    }
}
