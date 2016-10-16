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
        static string DataLocation = Path.Combine(AppContext.BaseDirectory, "data");
        static string FixturesLocation = Path.Combine(DataLocation, "fixtures");
        static string GroupsLocation = Path.Combine(DataLocation, "groups.json");
        static string UniversesLocation = Path.Combine(DataLocation, "universes.json");
        static string TransmittersLocation = Path.Combine(DataLocation, "transmitters.json");
        static string ListenersLocation = Path.Combine(DataLocation, "listeners.json");
        static string VenuesLocation = Path.Combine(DataLocation, "venues");
        static string FixtureCollectionLocation = Path.Combine(DataLocation, "fixtureCollections");

        static string JsonSchemaSchema = Path.Combine(DataLocation, "jsonschema.schema.json");
        static string FixturesSchema = Path.Combine(FixturesLocation, "fixture.schema.json");
        static string GroupsSchema = Path.Combine(DataLocation, "groups.schema.json");
        static string UniversesSchema = Path.Combine(DataLocation, "universes.schema.json");
        static string TransmittersSchema = Path.Combine(DataLocation, "transmitters.schema.json");
        static string ListenersSchema = Path.Combine(DataLocation, "listeners.schema.json");
        static string VenuesSchema = Path.Combine(VenuesLocation, "venue.schema.json");
        static string FixtureCollectionsSchema = Path.Combine(FixtureCollectionLocation, "fixtureCollection.schema.json");
        
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
            var groups = from groupObject in groupsObject
                         select Group.Load(groupObject as JObject);
            return groups;
        }

        public static void SaveGroups()
        {
            JArray groups = new JArray(
                from grp in MasterController.Instance.Groups.Values
                select grp.Serialize()
            );

            ValidatedSave(groups, GroupsLocation, GroupsSchema);
        }

        public static JObject GetGroupsSchema()
        {
            JObject schema = ValidatedLoad(GroupsSchema, JsonSchemaSchema) as JObject;
            return schema;
        }

        internal static IEnumerable<Transmitter> LoadTransmitters()
        {
            JArray transmittersObject = ValidatedLoad(TransmittersLocation, TransmittersSchema).Value<JArray>();
            var transmitters = from transmitterObject in transmittersObject.Children<JObject>()
                         select Transmitter.Load(transmitterObject);
            return transmitters;
        }

        public static void SaveTransmitters()
        {
            JArray transmitters = new JArray(
                from transmitter in MasterController.Instance.Transmitters
                select transmitter.Serialize()
            );

            ValidatedSave(transmitters, TransmittersLocation, TransmittersSchema);
        }
        
        public static JObject GetTransmitterSchema()
        {
            JObject schema = ValidatedLoad(TransmittersSchema, JsonSchemaSchema) as JObject;
            return schema;
        }

        internal static IEnumerable<Listener> LoadListeners()
        {
            JArray listenersObject = ValidatedLoad(ListenersLocation, ListenersSchema).Value<JArray>();
            var listeners = from listenerElement in listenersObject
                            select Listener.Load(listenerElement.Value<JObject>());
            return listeners;
        }

        public static void SaveListeners()
        {
            JArray listeners = new JArray(
                from listener in MasterController.Instance.Listeners
                select listener.Serialize()
            );

            ValidatedSave(listeners, ListenersLocation, ListenersSchema);
        }

        public static JObject GetListenerSchema()
        {
            JObject schema = ValidatedLoad(ListenersSchema, JsonSchemaSchema) as JObject;
            return schema;
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

        public static JObject GetFixtureDefinitionSchema()
        {
            JObject schema = ValidatedLoad(FixturesSchema, JsonSchemaSchema) as JObject;
            return schema;
        }

        public static IEnumerable<string> GetFixtureNames()
        {
            var files = from filename in Directory.EnumerateFiles(FixturesLocation)
                        where !filename.Contains(".schema")
                        select Path.GetFileNameWithoutExtension(filename);
            return files;
        }
        
        public static IEnumerable<string> GetFixtureCollectionNames()
        {
            var files = from filename in Directory.EnumerateFiles(FixtureCollectionLocation)
                        where !filename.Contains(".schema")
                        select Path.GetFileNameWithoutExtension(filename);
            return files;
        }

        public static bool HasFixtureCollection(string id)
        {
            string path = Path.Combine(FixtureCollectionLocation, id + ".json");
            return File.Exists(path);
        }

        public static void DeleteFixtureCollection(string id)
        {
            string path = Path.Combine(FixtureCollectionLocation, id + ".json");
            File.Delete(path);
        }

        public static void SaveFixtureCollection(JObject chunk)
        {
            string name = chunk["name"].Value<string>();
            string path = Path.Combine(FixtureCollectionLocation, name + ".json");
            ValidatedSave(chunk, path, FixtureCollectionsSchema);
        }

        public static JObject LoadFixtureCollection(string id)
        {
            string path = Path.Combine(FixtureCollectionLocation, id + ".json");
            JObject obj = ValidatedLoad(path, FixtureCollectionsSchema) as JObject;
            return obj;
        }

        public static JObject GetFixtureCollectionSchema()
        {
            JObject obj = ValidatedLoad(FixtureCollectionsSchema, JsonSchemaSchema) as JObject;
            return obj;
        }

        public static IEnumerable<string> GetVenueNames()
        {
            var files = from filename in Directory.EnumerateFiles(VenuesLocation)
                        where !filename.Contains(".schema")
                        select Path.GetFileNameWithoutExtension(filename);
            return files;
        }

        public static bool HasVenue(string id)
        {
            string path = Path.Combine(VenuesLocation, id + ".json");
            return File.Exists(path);
        }

        public static void DeleteVenue(string id)
        {
            string path = Path.Combine(VenuesLocation, id + ".json");
            File.Delete(path);
        }

        public static void SaveVenue(JObject venue)
        {
            string name = venue["name"].Value<string>();
            string path = Path.Combine(VenuesLocation, name + ".json");
            ValidatedSave(venue, path, VenuesSchema);
        }

        public static JObject LoadVenue(string id)
        {
            string path = Path.Combine(VenuesLocation, id + ".json");
            JObject obj = ValidatedLoad(path, VenuesSchema) as JObject;
            return obj;
        }

        public static JObject GetVenuesSchema()
        {
            JObject obj = ValidatedLoad(VenuesSchema, JsonSchemaSchema) as JObject;
            return obj;
        }
    }
}
