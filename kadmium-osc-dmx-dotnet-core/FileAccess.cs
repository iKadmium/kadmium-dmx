using kadmium_osc_dmx_dotnet_core.Fixtures;
using kadmium_osc_dmx_dotnet_core.Listeners;
using kadmium_osc_dmx_dotnet_core.Transmitters;
using Mvp.Xml.XInclude;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml;
using System.Xml.Linq;
using System.Xml.Schema;

namespace kadmium_osc_dmx_dotnet_core
{
    static class FileAccess
    {
        static string DataLocation = @"D:\User\Documents\GitHubVisualStudio\kadmium-osc-dmx-dotnet\data";
        static string FixturesLocation = Path.Combine(DataLocation, "fixtures");
        static string GroupsLocation = Path.Combine(DataLocation, "groups.xml");
        static string TransmittersLocation = Path.Combine(DataLocation, "transmitters.xml");
        static string VenuesLocation = Path.Combine(DataLocation, "venues");
        
        public static IEnumerable<Group> LoadGroups()
        {
            XElement groupsElement = ValidatedLoad(GroupsLocation);
            var groups = from groupElement in groupsElement.Elements("group")
                         select Group.Load(groupElement);
            return groups;
        }

        internal static XElement LoadFixtureModel(string model)
        {
            XElement fixtureElement = ValidatedLoad(Path.Combine(FixturesLocation, model + ".xml"));
            return fixtureElement;
        }

        public static IEnumerable<Transmitter> LoadTransmitters()
        {
            XElement transmittersElement = ValidatedLoad(TransmittersLocation);
            var transmitters = from transmitterElement in transmittersElement.Elements()
                         select Transmitter.Load(transmitterElement);
            return transmitters;
        }

        internal static XElement ValidatedLoad(string path)
        {
            XmlReaderSettings config = new XmlReaderSettings();
            config.ValidationType = ValidationType.Schema;
            config.ValidationFlags |= XmlSchemaValidationFlags.ReportValidationWarnings;
            config.ValidationFlags |= XmlSchemaValidationFlags.ProcessInlineSchema;
            config.ValidationFlags |= XmlSchemaValidationFlags.ProcessSchemaLocation;
            config.ValidationEventHandler += new ValidationEventHandler(ValidationCallBack);

            var xsds = from xsdFile in Directory.EnumerateFiles(@"D:\User\Documents\GitHubVisualStudio\kadmium-osc-dmx-dotnet\data", "*.xsd", SearchOption.AllDirectories)
                       select xsdFile;

            foreach (string xsdFile in Directory.EnumerateFiles(@"D:\User\Documents\GitHubVisualStudio\kadmium-osc-dmx-dotnet\data", "*.xsd", SearchOption.AllDirectories))
            {
                XmlSchema schema = XmlSchema.Read(XmlReader.Create(xsdFile), null);
                if(!AlreadyIncluded(config.Schemas, xsdFile))
                {
                    config.Schemas.Add(schema);
                    config.Schemas.Compile();
                }
                
            }
            
            XmlReader reader = XIncludingReader.Create(path, config);
            XDocument document = XDocument.Load(reader);
            XElement root = StripNamespaces(document.Root);
            return root;
        }

        private static XElement StripNamespaces(XElement rootElement)
        {
            foreach (var element in rootElement.DescendantsAndSelf())
            {
                // update element name if a namespace is available
                if (element.Name.Namespace != XNamespace.None)
                {
                    element.Name = XNamespace.None.GetName(element.Name.LocalName);
                }

                // check if the element contains attributes with defined namespaces (ignore xml and empty namespaces)
                bool hasDefinedNamespaces = element.Attributes().Any(attribute => attribute.IsNamespaceDeclaration ||
                        (attribute.Name.Namespace != XNamespace.None && attribute.Name.Namespace != XNamespace.Xml));

                if (hasDefinedNamespaces)
                {
                    // ignore attributes with a namespace declaration
                    // strip namespace from attributes with defined namespaces, ignore xml / empty namespaces
                    // xml namespace is ignored to retain the space preserve attribute
                    var attributes = element.Attributes()
                                            .Where(attribute => !attribute.IsNamespaceDeclaration)
                                            .Select(attribute =>
                                                (attribute.Name.Namespace != XNamespace.None && attribute.Name.Namespace != XNamespace.Xml) ?
                                                    new XAttribute(XNamespace.None.GetName(attribute.Name.LocalName), attribute.Value) :
                                                    attribute
                                            );

                    // replace with attributes result
                    element.ReplaceAttributes(attributes);
                }
            }
            return rootElement;
        }

        static bool AlreadyIncluded(XmlSchemaSet set, string path)
        {
            foreach (XmlSchema schema in set.Schemas())
            {
                
                if(new Uri(schema.SourceUri) == new Uri(path))
                {
                    return true;
                }
            }
            return false;
        }

        static string GetAllSchemas(XmlSchemaSet set)
        {
            StringBuilder builder = new StringBuilder();
            foreach(XmlSchema schema in set.Schemas())
            {
                builder.Append(GetSchemaItems(schema));
            }
            return builder.ToString();
        }

        static string GetSchemaItems(XmlSchema schema)
        {
            StringBuilder builder = new StringBuilder();
            XmlSchemaObjectCollection col = schema.Items;
            foreach (XmlSchemaObject thing in col)
            {
                if (thing.GetType() == typeof(XmlSchemaComplexType))
                {
                    XmlSchemaComplexType comp = thing as XmlSchemaComplexType;
                    builder.Append(comp.SourceUri + ":" + comp.LineNumber + " -> ComplexType ");
                    builder.AppendLine(comp.Name);
                }
                else if (thing.GetType() == typeof(XmlSchemaSimpleType))
                {
                    XmlSchemaSimpleType simp = thing as XmlSchemaSimpleType;
                    builder.Append(simp.SourceUri + ":" + simp.LineNumber + " -> SimpleType ");
                    builder.AppendLine(simp.Name);
                }
                else if(thing.GetType() == typeof(XmlSchemaElement))
                {
                    XmlSchemaElement element = thing as XmlSchemaElement;
                    builder.Append(element.SourceUri + ":" + element.LineNumber + " -> Element ");
                    builder.AppendLine(element.Name);
                }
                else
                {
                    builder.AppendLine(thing.ToString());
                }
            }
            return builder.ToString();
        }

        private static void ValidationCallBack(object sender, ValidationEventArgs e)
        {
            if (e.Severity == XmlSeverityType.Warning)
            {
                Console.WriteLine(
                    "\tWarning: Matching schema not found.  No validation occurred. {0}",
                    e.Message);
            }
            else
            {
                Console.WriteLine("\tValidation error: {0}", e.Message);
            }
        }

        internal static IEnumerable<Universe> LoadVenue(string venue)
        {
            string path = Path.Combine(VenuesLocation, venue);
            XElement venueRoot = ValidatedLoad(path);
            var universes = from universeElement in venueRoot.Element("universes").Elements("universe")
                            select Universe.Load(path, universeElement);
            return universes;
        }

        internal static IEnumerable<Fixture> LoadFixtureSet(string originalDocPath, string fixtureSetPath)
        {
            XElement fixtureSetRoot = ValidatedLoad(Path.Combine(Path.GetPathRoot(originalDocPath), fixtureSetPath));
            
            var fixtures = from fixtureElement in fixtureSetRoot.Descendants("fixture")
                           select Fixture.Load(fixtureElement);
            return fixtures;
        }

        internal static IEnumerable<Listener> LoadListeners()
        {
            XElement listenersElement = ValidatedLoad(Path.Combine(DataLocation, "listeners.xml"));
            var listeners = from listenerElement in listenersElement.Elements()
                            select Listener.Load(listenerElement);
            return listeners;
        }
    }
}
