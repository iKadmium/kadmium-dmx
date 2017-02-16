using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using Newtonsoft.Json.Linq;
using Newtonsoft.Json.Schema;
using Newtonsoft.Json;
using System.Threading.Tasks;

namespace kadmium_osc_dmx_dotnet_core
{
    public static class FileAccess
    {
        static string DataLocation = Path.Combine(AppContext.BaseDirectory, "data");

        private static string FixturesLocation = Path.Combine(DataLocation, "fixtures");
        private static string GroupsLocation = Path.Combine(DataLocation, "groups.json");
        private static string VenuesLocation = Path.Combine(DataLocation, "venues");
        private static string FixtureCollectionLocation = Path.Combine(DataLocation, "fixtureCollections");
        private static string SettingsLocation = Path.Combine(DataLocation, "settings.json");

        private static string JsonSchemaSchema = Path.Combine(DataLocation, "jsonschema.schema.json");
        public static string FixtureDefinitionSchema = Path.Combine(FixturesLocation, "fixture.schema.json");
        private static string GroupsSchema = Path.Combine(DataLocation, "groups.schema.json");
        public static string VenuesSchema = Path.Combine(VenuesLocation, "venue.schema.json");
        private static string FixtureCollectionsSchema = Path.Combine(FixtureCollectionLocation, "fixtureCollection.schema.json");
        private static string SettingsSchema = Path.Combine(DataLocation, "settings.schema.json");

        private static FileInfo GroupsFile = new FileInfo(GroupsLocation);

        private static FileInfo VenuesFile = new FileInfo(GroupsLocation);
        private static FileInfo SettingsFile = new FileInfo(SettingsLocation);

        private static async Task ValidatedSave(JToken obj, FileInfo file, string schemaPath)
        {
            string schemaString = File.ReadAllText(schemaPath);
            if (Validate(obj, file.FullName, schemaPath))
            {
                Directory.CreateDirectory(Path.GetDirectoryName(file.FullName));
                using (var writer = file.OpenWrite())
                {
                    var bytes = System.Text.Encoding.UTF8.GetBytes(obj.ToString());
                    await writer.WriteAsync(bytes, 0, bytes.Length);
                }
            }
        }

        private static async Task<JToken> ValidatedLoad(string path, string schemaPath)
        {
            return await Task.Factory.StartNew(() =>
            {
                string jsonString = File.ReadAllText(path);
                JToken obj = JToken.Parse(jsonString);
                Validate(obj, path, schemaPath);
                return obj;
            });
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

        public static async Task RenameTransmitter(string id, string newID)
        {
            var venues = from venueName in GetVenueNames()
                         select LoadVenue(venueName);

            foreach (Task<JObject> venueTask in venues)
            {
                JObject venue = await venueTask;
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
                    await SaveVenue(venue);
                }
            }
        }

        public static async Task RenameGroup(string id, string newID)
        {
            var venues = from venueName in GetVenueNames()
                         select LoadVenue(venueName);

            foreach (Task<JObject> venueTask in venues)
            {
                JObject venue = await venueTask;
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
                    await SaveVenue(venue);
                }
            }
        }

        internal static async Task<IEnumerable<Group>> LoadGroups()
        {
            try
            {
                JArray groupsObject = (await ValidatedLoad(GroupsLocation, GroupsSchema)).Value<JArray>();
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

            lock (GroupsFile)
            {
                ValidatedSave(groups, GroupsFile, GroupsSchema).Wait();
            }
        }

        public static async Task<JObject> GetGroupsSchema()
        {
            JObject schema = await ValidatedLoad(GroupsSchema, JsonSchemaSchema) as JObject;
            return schema;
        }

        public static string GetFixtureDefinitionPath(string manufacturer, string model)
        {
            return Path.Combine(FixturesLocation, manufacturer, model + ".json");
        }

        public static bool HasFixtureDefinition(string manufacturer, string model)
        {
            return File.Exists(GetFixtureDefinitionPath(manufacturer, model));
        }

        public static async Task<JObject> LoadFixtureDefinition(string manufacturer, string model)
        {
            string path = GetFixtureDefinitionPath(manufacturer, model);
            JObject definitionRoot = (await ValidatedLoad(path, FixtureDefinitionSchema)).Value<JObject>();
            return definitionRoot;
        }

        public async static Task DeleteFixtureDefinition(string manufacturer, string model)
        {
            List<Task> tasks = new List<Task>();
            foreach (string venueName in FileAccess.GetVenueNames())
            {
                JObject venueJson = await FileAccess.LoadVenue(venueName);
                Venue venue = await Venue.Load(venueJson);
                bool dirty = false;
                foreach (Universe universe in venue.Universes.Values)
                {
                    var matches = universe.Fixtures.Where(x => x.Definition.Manufacturer == manufacturer && x.Definition.Name == model).ToList();
                    if (matches.Count > 0)
                    {
                        matches.ForEach(x => universe.Fixtures.Remove(x));
                    }
                }
                if (dirty)
                {
                    tasks.Add(FileAccess.SaveVenue(venue.Serialize()));
                }
            }
            foreach (string fixtureCollectionName in FileAccess.GetFixtureCollectionNames())
            {
                JObject fixtureCollectionJson = await FileAccess.LoadFixtureCollection(fixtureCollectionName);
                FixtureCollection collection = FixtureCollection.Load(fixtureCollectionJson);
                var matches = collection.FixtureEntries.Where(x => x.Manufacturer == manufacturer && x.Type == model).ToList();
                if (matches.Count > 0)
                {
                    matches.ForEach(x => collection.FixtureEntries.Remove(x));
                    tasks.Add(FileAccess.SaveFixtureCollection(collection.Serialize()));
                }
            }
            await Task.WhenAll(tasks);
            File.Delete(GetFixtureDefinitionPath(manufacturer, model));
        }

        public static async Task SaveFixtureDefinition(JObject definition)
        {
            string model = definition["name"].Value<string>();
            string manufacturer = definition["manufacturer"].Value<string>();
            string path = GetFixtureDefinitionPath(manufacturer, model);
            FileInfo file = new FileInfo(path);
            await ValidatedSave(definition, file, FixtureDefinitionSchema);
        }

        public static async Task RenameFixtureDefinition(string originalManufacturer, string originalModel, string manufacturer, string model)
        {
            List<Task> tasks = new List<Task>();
            foreach (string venueName in FileAccess.GetVenueNames())
            {
                JObject venueJson = await FileAccess.LoadVenue(venueName);
                Venue venue = await Venue.Load(venueJson);
                bool dirty = false;
                foreach (Universe universe in venue.Universes.Values)
                {
                    var matches = universe.Fixtures.Where(x => x.Definition.Manufacturer == originalManufacturer && x.Definition.Name == originalModel).ToList();
                    foreach (var match in matches)
                    {
                        match.Definition.Manufacturer = manufacturer;
                        match.Definition.Name = model;
                        dirty = true;
                    }
                }
                if (dirty)
                {
                    tasks.Add(FileAccess.SaveVenue(venue.Serialize()));
                }
            }
            foreach (string fixtureCollectionName in FileAccess.GetFixtureCollectionNames())
            {
                JObject fixtureCollectionJson = await FileAccess.LoadFixtureCollection(fixtureCollectionName);
                FixtureCollection collection = FixtureCollection.Load(fixtureCollectionJson);
                var matches = collection.FixtureEntries.Where(x => x.Manufacturer == manufacturer && x.Type == model).ToList();
                if (matches.Count > 0)
                {
                    foreach (var match in matches)
                    {
                        match.Manufacturer = manufacturer;
                        match.Type = model;
                    }
                    tasks.Add(FileAccess.SaveFixtureCollection(collection.Serialize()));
                }
            }
            await Task.WhenAll(tasks);
            string oldPath = FileAccess.GetFixtureDefinitionPath(originalManufacturer, originalModel);
            string newPath = FileAccess.GetFixtureDefinitionPath(manufacturer, model);
            File.Move(oldPath, newPath);
        }

        public static async Task<JObject> GetFixtureDefinitionSchema()
        {
            JObject schema = await ValidatedLoad(FixtureDefinitionSchema, JsonSchemaSchema) as JObject;
            return schema;
        }

        public static IEnumerable<string> GetFixtureManufacturers()
        {
            var directories = from directory in Directory.EnumerateDirectories(FixturesLocation)
                              select Path.GetFileNameWithoutExtension(directory);
            return directories;
        }

        public static IEnumerable<string> GetFixtureNames(string manufacturer)
        {
            var manufacturerDirectory = Path.Combine(FixturesLocation, manufacturer);
            var files = from filename in Directory.EnumerateFiles(manufacturerDirectory)
                        where !filename.Contains(".schema")
                        select Path.GetFileNameWithoutExtension(filename);
            return files;
        }

        public static IEnumerable<Tuple<string, string>> GetAllFixtures()
        {
            List<Tuple<string, string>> returnVal = new List<Tuple<string, string>>();

            foreach (string manufacturer in GetFixtureManufacturers())
            {
                foreach (string fixtureName in GetFixtureNames(manufacturer))
                {
                    Tuple<string, string> tuple = Tuple.Create(manufacturer, fixtureName);
                    returnVal.Add(tuple);
                }
            }

            return returnVal;
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

        public static async Task SaveFixtureCollection(JObject chunk)
        {
            string name = chunk["name"].Value<string>();
            string path = Path.Combine(FixtureCollectionLocation, name + ".json");
            FileInfo file = new FileInfo(path);
            await ValidatedSave(chunk, file, FixtureCollectionsSchema);
        }

        public static async Task<JObject> LoadFixtureCollection(string id)
        {
            string path = Path.Combine(FixtureCollectionLocation, id + ".json");
            JObject obj = await ValidatedLoad(path, FixtureCollectionsSchema) as JObject;
            return obj;
        }

        public static async Task<JObject> GetFixtureCollectionSchema()
        {
            JObject obj = await ValidatedLoad(FixtureCollectionsSchema, JsonSchemaSchema) as JObject;
            return obj;
        }

        public static IEnumerable<string> GetVenueNames()
        {
            var files = from filename in Directory.EnumerateFiles(VenuesLocation)
                        where !filename.Contains(".schema")
                        select Path.GetFileNameWithoutExtension(filename);
            return files;
        }

        public static string GetVenueLocation(string id)
        {
            return Path.Combine(VenuesLocation, id + ".json");
        }

        public static bool HasVenue(string id)
        {
            return File.Exists(GetVenueLocation(id));
        }

        public static void DeleteVenue(string id)
        {
            string path = Path.Combine(VenuesLocation, id + ".json");
            File.Delete(GetVenueLocation(id));
        }

        public static async Task SaveVenue(JObject venue)
        {
            string name = venue["name"].Value<string>();
            string path = GetVenueLocation(name);
            FileInfo file = new FileInfo(path);
            await ValidatedSave(venue, file, VenuesSchema);
        }

        public static async Task<JObject> LoadVenue(string id)
        {
            JObject obj = await ValidatedLoad(GetVenueLocation(id), VenuesSchema) as JObject;
            return obj;
        }

        public static async Task<JObject> GetVenuesSchema()
        {
            JObject obj = await ValidatedLoad(VenuesSchema, JsonSchemaSchema) as JObject;
            return obj;
        }

        public static async Task<JObject> LoadSettings()
        {
            try
            {
                JObject obj = await ValidatedLoad(SettingsLocation, SettingsSchema) as JObject;
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
            lock (SettingsFile)
            {
                ValidatedSave(settings, SettingsFile, SettingsSchema).Wait();
            }
        }

        public static string GetRelativePath(string source, string destination)
        {
            var path = new Uri(source).MakeRelativeUri(new Uri(destination)).ToString();
            if (Path.GetDirectoryName(source) == Path.GetDirectoryName(destination))
            {
                path = "./" + path;
            }
            return path;
        }
    }
}
