using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using Newtonsoft.Json.Linq;
using Newtonsoft.Json.Schema;
using Newtonsoft.Json;
using System.Threading.Tasks;
using System.Runtime.InteropServices;
using Newtonsoft.Json.Serialization;

namespace kadmium_osc_dmx_dotnet_core
{
    public static class FileAccess
    {
        private static string HomeFolder => Environment.GetEnvironmentVariable(RuntimeInformation.IsOSPlatform(OSPlatform.Windows) ? "LocalAppData" : "Home");
        private static string DataLocation => Path.Combine(HomeFolder, "kadmium-osc-dmx");

        private static string DatabaseFilename => "DMX.db";
        public static string ProductionDatabasePath => Path.Combine(DataLocation, DatabaseFilename);
        public static string DebugDatabasePath => Path.Combine(AppContext.BaseDirectory, DatabaseFilename);
        public static string TestingDatabasePath => Path.Combine(AppContext.BaseDirectory, "test-" + DatabaseFilename);

        private static string SettingsLocation = Path.Combine(DataLocation, "settings.json");

        private static string JsonSchemaSchema = Path.Combine(DataLocation, "jsonschema.schema.json");
        private static string SettingsSchema = Path.Combine(AppContext.BaseDirectory, "settings.schema.json");

        private static FileInfo SettingsFile = new FileInfo(SettingsLocation);

        private static async Task ValidatedSave(JToken obj, FileInfo file, string schemaPath)
        {
            string schemaString = File.ReadAllText(schemaPath);
            if (Validate(obj, file.FullName, schemaPath))
            {
                Directory.CreateDirectory(Path.GetDirectoryName(file.FullName));
                using (var writer = file.Create())
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
        
        public static async Task<Settings> LoadSettings()
        {
            if(!File.Exists(SettingsLocation))
            {
                var settings = new Settings();
                SaveSettings(settings);
                return settings;
            }
            else
            {
                JObject obj = await ValidatedLoad(SettingsLocation, SettingsSchema) as JObject;
                var settings = obj.ToObject<Settings>();
                return settings;
            }
        }

        public static void SaveSettings(Settings settings)
        {
            var serializer = new JsonSerializer()
            {
                ContractResolver = new CamelCasePropertyNamesContractResolver()
            };
            var settingsJson = JObject.FromObject(settings, serializer);
            ValidatedSave(settingsJson, SettingsFile, SettingsSchema).Wait();
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

        public static void CreateDataDirectory()
        {
            Directory.CreateDirectory(DataLocation);
        }
    }
}
