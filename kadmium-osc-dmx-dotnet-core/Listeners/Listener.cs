﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Linq;

namespace kadmium_osc_dmx_dotnet_core.Listeners
{
    public abstract class Listener
    {
        public Listener(string name)
        {
            Name = name;
            Status = new Status();
        }

        public string Name { get; set; }
        public Status Status { get; set; }
        public string DisplayName { get { return Name; } }

        internal static Listener Load(XElement listenerElement)
        {
            switch(listenerElement.Name.LocalName)
            {
                case "oscListener":
                    return OSCListener.Load(listenerElement);
            }
            throw new ArgumentException("No such listener known as " + listenerElement.Name.LocalName);
        }

        public abstract void Close();
    }
}
