using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using kadmium_sacn_core;

namespace kadmium_dmx_core.Transmitters
{
    public class SACNTransmitter : Transmitter
    {
        public static string SOURCE_NAME = "Kadmium-OSC-DMX";
        public static int SACN_PORT = 5568;

        private SACNSender SACNClient { get; set; }
        public int Port { get; set; }
        public IEnumerable<string> UnicastTargets { get; set; }
        public bool Multicast { get; set; }

        public new string DisplayName
        {
            get
            {
                return "SACN Transmitter [" + Name + "]";
            }
        }

        public override async Task TransmitInternal(byte[] dmx, int universeID)
        {
            List<Task> tasks = new List<Task>();
            if (Multicast)
            {
                tasks.Add(SACNClient.Send((short)universeID, dmx));
            }
            foreach (string target in UnicastTargets)
            {
                tasks.Add(SACNClient?.Send(target, (short)universeID, dmx));
            }

            await Task.WhenAll(tasks);
        }

        public SACNTransmitter(Guid uuid, string name, int port, int delay, bool multicast, IEnumerable<string> unicast) : base(name, delay)
        {
            Port = port;
            UnicastTargets = unicast;
            Multicast = multicast;
            try
            {
                SACNClient = new SACNSender(uuid, SOURCE_NAME, port);
                Enabled = true;
            }
            catch (Exception e)
            {
                Status.Update(StatusCode.Error, e.Message, this);
            }
        }

        public static SACNTransmitter Load(SacnTransmitterSettings settings)
        {
            string id = "sACN Transmitter";
            int port = SACN_PORT;
            int delay = settings.Delay;
            bool multicast = settings.Multicast;
            IEnumerable<string> unicast = settings.Unicast;
            SACNTransmitter transmitter = new SACNTransmitter(Guid.NewGuid(), id, port, delay, multicast, unicast);
            return transmitter;
        }

        public override void Dispose()
        {
            SACNClient.Close();
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
