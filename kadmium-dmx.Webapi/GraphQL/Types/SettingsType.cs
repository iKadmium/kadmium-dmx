using GraphQL.Types;
using kadmium_dmx_data.Types.Settings;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace kadmium_dmx_webapi.GraphQL.Types
{
    public class SettingsType: ObjectGraphType<Settings>
    {
        public SettingsType()
        {
            Name = "Settings";
            Field(x => x.OscPort)
                .Name("oscPort")
                .Description("The OSC Port on which the app should listen for commands");
            Field(x => x.SacnTransmitter, type: typeof(SACNTransmitterSettingsType))
                .Name("sacnTransmitter")
                .Description("Settings for sACN transmission");
            Field(x => x.StrobeEffectFrequency)
                .Name("strobeFrequency")
                .Description("How frequently the strobe effect should flash");
        }
    }
}
