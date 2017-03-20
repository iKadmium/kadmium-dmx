using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Newtonsoft.Json.Linq;
using kadmium_sacn_core;

namespace kadmium_osc_dmx_dotnet_core.Transmitters
{
    public class SACNTransmitter : Transmitter
    {
        public static string SOURCE_NAME = "Kadmium-OSC-DMX";
        public static int SACN_PORT = 5568;

        private SACNSender SACNClient { get; set; }
        public int Port { get; set; }
        public event EventHandler<TransmitterEventArgs> OnTransmit;
        public IEnumerable<string> UnicastTargets { get; set; }
        public bool Multicast { get; set; }

        public new string DisplayName
        {
            get
            {
                return "SACN Transmitter [" + Name + "]";
            }
        }

        public override void TransmitInternal(byte[] dmx, int universeID)
        {
            List<Task> tasks = new List<Task>();
            if (Multicast)
            {
                tasks.Add(Task.Run(() => SACNClient?.Send((short)universeID, dmx)));
            }
            foreach (string target in UnicastTargets)
            {
                tasks.Add(Task.Run(() => SACNClient?.Send(target, (short)universeID, dmx)));
            }

            Task.WaitAll(tasks.ToArray(), 50);
            OnTransmit?.Invoke(this, new TransmitterEventArgs(universeID, dmx));
            if (this.Status.StatusCode != StatusCode.Success)
            {
                this.Status.Update(StatusCode.Success, "Sending", this);
            }
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
            int port = 5568;
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

        public override JObject Serialize()
        {
            JObject obj = new JObject(
                new JProperty("delay", Delay),
                new JProperty("multicast", Multicast),
                new JProperty("unicast",
                    new JArray(from unicastTarget in UnicastTargets
                               select new JValue(unicastTarget))
                )
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
