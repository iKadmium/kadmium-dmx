using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using kadmium_dmx_data.Types.Settings;
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

        public override async Task TransmitInternal(byte[] dmx, int universeID)
        {
            List<Task> tasks = new List<Task>();
            if (Multicast)
            {
                tasks.Add(SACNClient.Send((ushort)universeID, dmx));
            }
            foreach (string target in UnicastTargets)
            {
                tasks.Add(SACNClient?.Send(target, (ushort)universeID, dmx));
            }

            await Task.WhenAll(tasks);
        }

        public SACNTransmitter(ISacnTransmitterSettings settings) : base( settings.Delay)
        {
            Port = SACN_PORT;
            UnicastTargets = settings.Unicast;
            Multicast = settings.Multicast;
            try
            {
                SACNClient = new SACNSender(settings.UUID, SOURCE_NAME, Port);
                Enabled = true;
            }
            catch (Exception e)
            {
                Status.Update(StatusCode.Error, e.Message, this);
            }
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
