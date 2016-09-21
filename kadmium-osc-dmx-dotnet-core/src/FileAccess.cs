using kadmium_osc_dmx_dotnet_core.Fixtures;
using kadmium_osc_dmx_dotnet_core.Listeners;
using kadmium_osc_dmx_dotnet_core.Transmitters;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json.Linq;
using Newtonsoft.Json.Schema;

namespace kadmium_osc_dmx_dotnet_core
{
    static class FileAccess
    {
        static string DataLocation = Path.Combine(Directory.GetCurrentDirectory(), "bin", "debug", "netcoreapp1.0", "kadmium-osc-dmx-dotnet-core", "data");
        static string FixturesLocation = Path.Combine(DataLocation, "fixtures");
        static string GroupsLocation = Path.Combine(DataLocation, "groups.json");
        static string TransmittersLocation = Path.Combine(DataLocation, "transmitters.json");
        static string ListenersLocation = Path.Combine(DataLocation, "listeners.json");
        static string VenuesLocation = Path.Combine(DataLocation, "venues");

        static string FixturesSchema = Path.Combine(FixturesLocation, "fixture.schema.json");
        static string GroupsSchema = Path.Combine(DataLocation, "groups.schema.json");
        static string TransmittersSchema = Path.Combine(DataLocation, "transmitters.schema.json");

        static string ListenersSchema = Path.Combine(DataLocation, "listeners.schema.json");
        static string VenuesSchema = Path.Combine(VenuesLocation, "venue.schema.json");

        private static JToken ValidatedLoad(string path, string schemaPath)
        {
            string jsonString = File.ReadAllText(path);
            string schemaString = File.ReadAllText(schemaPath);
            JToken obj = JToken.Parse(jsonString);
            JSchema schema = JSchema.Parse(schemaString);
            IList<ValidationError> errors;
            bool valid = obj.IsValid(schema, out errors);
            if (valid)
            {
                return obj;
            }
            else
            {
                foreach (var error in errors)
                {
                    Console.Error.WriteLine(error.ToString());
                }
                throw new InvalidDataException("Could not validate " + path);
            }
        }

        internal static IEnumerable<Group> LoadGroups()
        {
            JArray groupsObject = ValidatedLoad(GroupsLocation, GroupsSchema).Value<JArray>();
            var groups = from groupName in groupsObject
                         select new Group(groupName.Value<string>());
            return groups;
        }

        internal static IEnumerable<Transmitter> LoadTransmitters()
        {
            JArray transmittersObject = ValidatedLoad(TransmittersLocation, TransmittersSchema).Value<JArray>();
            var transmitters = from transmitterObject in transmittersObject.Children<JObject>()
                         select Transmitter.Load(transmitterObject);
            return transmitters;
        }

        internal static IEnumerable<Listener> LoadListeners()
        {
            JArray listenersObject = ValidatedLoad(ListenersLocation, ListenersSchema).Value<JArray>();
            var listeners = from listenerElement in listenersObject
                            select Listener.Load(listenerElement.Value<JObject>());
            return listeners;
        }

        internal static IEnumerable<Universe> LoadVenue(string venue)
        {
            string path = Path.Combine(VenuesLocation, venue);
            JObject venueRoot = ValidatedLoad(path, VenuesSchema).Value<JObject>();
            var universes = from universeElement in venueRoot["universes"].Children<JObject>()
                            select Universe.Load(path, universeElement);
            return universes;
        }

        internal static JObject LoadFixtureModel(string model)
        {
            throw new NotImplementedException();
        }
    }
}
