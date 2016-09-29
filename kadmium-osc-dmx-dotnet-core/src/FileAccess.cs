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
    public static class FileAccess
    {
        static string DataLocation = Path.Combine(Directory.GetCurrentDirectory(), "bin", "debug", "netcoreapp1.0", "kadmium-osc-dmx-dotnet-core", "data");
        static string FixturesLocation = Path.Combine(DataLocation, "fixtures");
        static string GroupsLocation = Path.Combine(DataLocation, "groups.json");
        static string TransmittersLocation = Path.Combine(DataLocation, "transmitters.json");
        static string ListenersLocation = Path.Combine(DataLocation, "listeners.json");
        static string VenuesLocation = Path.Combine(DataLocation, "venues");
        static string VenueChunksLocation = Path.Combine(VenuesLocation, "chunks");

        static string FixturesSchema = Path.Combine(FixturesLocation, "fixture.schema.json");
        static string GroupsSchema = Path.Combine(DataLocation, "groups.schema.json");
        static string TransmittersSchema = Path.Combine(DataLocation, "transmitters.schema.json");
        static string ListenersSchema = Path.Combine(DataLocation, "listeners.schema.json");
        static string VenuesSchema = Path.Combine(VenuesLocation, "venue.schema.json");
        static string VenueChunksSchema = Path.Combine(VenueChunksLocation, "venuechunk.schema.json");
        
        private static void ValidatedSave(JToken obj, string path, string schemaPath)
        {
            string schemaString = File.ReadAllText(schemaPath);
            JSchema schema = JSchema.Parse(schemaString);
            IList<ValidationError> errors;
            bool valid = obj.IsValid(schema, out errors);
            if (valid)
            {
                File.WriteAllText(path, obj.ToString());
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

        public static bool HasFixtureDefinition(string model)
        {
            string path = Path.Combine(FixturesLocation, model + ".json");
            return File.Exists(path);
        }

        public static JObject LoadFixtureDefinition(string model)
        {
            string path = Path.Combine(FixturesLocation, model + ".json");
            JObject definitionRoot = ValidatedLoad(path, FixturesSchema).Value<JObject>();
            return definitionRoot;
        }

        public static void DeleteFixtureDefinition(string model)
        {
            string path = Path.Combine(FixturesLocation, model + ".json");
            File.Delete(path);
        }

        public static void SaveFixtureDefinition(JObject definition)
        {
            string model = definition["name"].Value<string>();
            string path = Path.Combine(FixturesLocation, model + ".json");
            ValidatedSave(definition, path, FixturesSchema);
        }

        public static IEnumerable<string> GetFixtureNames()
        {
            var files = from filename in Directory.EnumerateFiles(FixturesLocation)
                        where !filename.Contains(".schema")
                        select Path.GetFileNameWithoutExtension(filename);
            return files;
        }

        public static void SaveGroups()
        {
            JArray groups = new JArray(
                from groupName in MasterController.Instance.Groups.Keys
                select groupName
            );

            ValidatedSave(groups, GroupsLocation, GroupsSchema);
        }

        public static void SaveListeners()
        {
            JArray listeners = new JArray(
                from listener in MasterController.Instance.Listeners
                select listener.Serialize()
            );

            ValidatedSave(listeners, ListenersLocation, ListenersSchema);
        }

        public static void SaveTransmitters()
        {
            JArray transmitters = new JArray(
                from transmitter in MasterController.Instance.Transmitters
                select transmitter.Serialize()
            );

            ValidatedSave(transmitters, TransmittersLocation, TransmittersSchema);
        }

        public static IEnumerable<string> GetVenueChunkNames()
        {
            var files = from filename in Directory.EnumerateFiles(VenueChunksLocation)
                        where !filename.Contains(".schema")
                        select Path.GetFileNameWithoutExtension(filename);
            return files;
        }

        public static bool HasVenueChunk(string id)
        {
            string path = Path.Combine(VenueChunksLocation, id + ".json");
            return File.Exists(path);
        }

        public static void DeleteVenueChunk(string id)
        {
            string path = Path.Combine(VenueChunksLocation, id + ".json");
            File.Delete(path);
        }

        public static void SaveVenueChunk(JObject chunk)
        {
            string name = chunk["name"].Value<string>();
            string path = Path.Combine(VenueChunksLocation, name + ".json");
            ValidatedSave(chunk, path, VenueChunksSchema);
        }

        public static JObject LoadVenueChunk(string id)
        {
            string path = Path.Combine(VenueChunksLocation, id + ".json");
            JObject obj = ValidatedLoad(path, VenueChunksSchema) as JObject;
            return obj;
        }
    }
}
