﻿using kadmium_osc_dmx_dotnet_core.Transmitters;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using Newtonsoft.Json.Linq;

namespace kadmium_osc_dmx_dotnet_core.Transmitters
{
    public abstract class Transmitter
    {
        
        protected Transmitter(string name, bool enabled)
        {
            Name = name;
            Status = new Status();
            Enabled = enabled;
        }

        
        public bool Enabled { get; set; }
        public int Delay { get; set; }
        public string Name { get; set; }
        public Status Status { get; set; }
        public virtual string DisplayName {
            get
            {
                return Name;
            }
        }

        public abstract void TransmitInternal(byte[] dmx);
        public async void Transmit(byte[] dmx)
        {
            if (Enabled)
            {
                if (Delay < 0)
                {
                    await Task.Delay(Delay);
                }
                TransmitInternal(dmx);
            }
        }

        internal static Transmitter Load(JObject element)
        {
            switch (element["type"].Value<string>())
            {
                case "EntTec":
                    return EnttecProTransmitter.Load(element);
                case "sACN":
                    return SACNTransmitter.Load(element); 
            }
            throw new ArgumentException("No such listener known as " + element["type"].Value<string>());
        }

        public abstract void Close();
        public abstract JObject Serialize();
    }
}