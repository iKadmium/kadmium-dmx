using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using Newtonsoft.Json.Linq;
using Newtonsoft.Json.Schema;
using Newtonsoft.Json;

namespace kadmium_osc_dmx_dotnet_core
{
    public static class FileAccess
    {
        static string DataLocation = Path.Combine(AppContext.BaseDirectory, "data");

        static string FixturesLocation = Path.Combine(DataLocation, "fixtures");
        static string GroupsLocation = Path.Combine(DataLocation, "groups.json");
        static string UniversesLocation = Path.Combine(DataLocation, "universes.json");
        static string VenuesLocation = Path.Combine(DataLocation, "venues");
        static string FixtureCollectionLocation = Path.Combine(DataLocation, "fixtureCollections");
        static string SettingsLocation = Path.Combine(DataLocation, "settings.json");

        static string JsonSchemaSchema = Path.Combine(DataLocation, "jsonschema.schema.json");
        static string FixturesSchema = Path.Combine(FixturesLocation, "fixture.schema.json");
        static string GroupsSchema = Path.Combine(DataLocation, "groups.schema.json");
        static string UniversesSchema = Path.Combine(DataLocation, "universes.schema.json");
        static string VenuesSchema = Path.Combine(VenuesLocation, "venue.schema.json");
        static string FixtureCollectionsSchema = Path.Combine(FixtureCollectionLocation, "fixtureCollection.schema.json");
        static string SettingsSchema = Path.Combine(DataLocation, "settings.schema.json");

        private static void ValidatedSave(JToken obj, string path, string schemaPath)
        {
            string schemaString = File.ReadAllText(schemaPath);
            if (Validate(obj, path, schemaPath))
            {
                File.WriteAllText(path, obj.ToString());
            }
        }

        private static JToken ValidatedLoad(string path, string schemaPath)
        {
            string jsonString = File.ReadAllText(path);
            JToken obj = JToken.Parse(jsonString);
            Validate(obj, path, schemaPath);
            return obj;
        }

        private static bool Validate(JToken obj, string path, string schemaPath)
        {
            JSchemaUrlResolver resolver = new JSchemaUrlResolver();

            IList<ValidationError> errors;
            bool valid = true;

            using (StreamReader file = File.OpenText(schemaPath))
            using (JsonTextReader reader = new JsonTextReader(file))
            {
                JSchema schema = JSchema.Load(reader, new JSchemaReaderSettings { Resolver = resolver, BaseUri = new Uri(schemaPath) });
                try
                {
                    valid = obj.IsValid(schema, out errors);
                }
                catch (JSchemaException e)
                {
                    errors = new List<ValidationError>();
                    if (e.Message.Contains("free-quota limit"))
                    {
                        valid = true;
                    }
                    else
                    {
                        valid = false;
                    }
                }

                if (valid)
                {
                    return true;
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
        }

        public static void RenameTransmitter(string id, string newID)
        {
            var venues = from venueName in GetVenueNames()
                         select LoadVenue(venueName);

            foreach (JObject venue in venues)
            {
                bool dirty = false;
                foreach (JObject universe in venue["universes"].Values<JObject>())
                {
                    foreach (JObject transmitter in universe["transmitters"].Values<JObject>())
                    {
                        if (transmitter["name"].Value<string>() == id)
                        {
                            transmitter["name"] = newID;
                            dirty = true;
                        }
                    }
                }
                if (dirty)
                {
                    SaveVenue(venue);
                }
            }
        }

        public static void RenameGroup(string id, string newID)
        {
            var venues = from venueName in GetVenueNames()
                         select LoadVenue(venueName);

            foreach (JObject venue in venues)
            {
                bool dirty = false;
                foreach (JObject universe in venue["universes"].Values<JObject>())
                {
                    foreach (JObject fixture in universe["fixtures"].Values<JObject>())
                    {
                        if (fixture["group"].Value<string>() == id)
                        {
                            fixture["group"] = newID;
                            dirty = true;
                        }
                    }
                }
                if (dirty)
                {
                    SaveVenue(venue);
                }
            }
        }

        internal static IEnumerable<Group> LoadGroups()
        {
            try
            {
                JArray groupsObject = ValidatedLoad(GroupsLocation, GroupsSchema).Value<JArray>();
                var groups = from groupObject in groupsObject
                             select Group.Load(groupObject as JObject);
                return groups;
            }
            catch (Exception)
            {
                return new[] { new Group("Default Group", 1) };
            }

        }

        public static void SaveGroups()
        {
            JArray groups = new JArray(
                from grp in MasterController.Instance.Groups.Values
                orderby grp.Order
                select grp.Serialize()
            );

            ValidatedSave(groups, GroupsLocation, GroupsSchema);
        }

        public static JObject GetGroupsSchema()
        {
            JObject schema = ValidatedLoad(GroupsSchema, JsonSchemaSchema) as JObject;
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

        public static JObject LoadSettings()
        {
            try
            {
                JObject obj = ValidatedLoad(SettingsLocation, SettingsSchema) as JObject;
                return obj;
            }
            catch (Exception)
            {
                JObject obj = new JObject(
                    new JProperty("webPort", 5000),
                    new JProperty("oscPort", 9001),
                    new JProperty("sacnTransmitter",
                        new JObject(
                            new JProperty("delay", 0),
                            new JProperty("multicast", true),
                            new JProperty("unicast", new JArray())
                        )
                    )
                );
                return obj;
            }

        }

        public static void SaveSettings(JObject settings)
        {
            string path = SettingsLocation;
            ValidatedSave(settings, SettingsLocation, SettingsSchema);
        }
    }
}
