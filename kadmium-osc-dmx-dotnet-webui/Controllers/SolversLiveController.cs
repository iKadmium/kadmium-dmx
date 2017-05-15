using Microsoft.AspNetCore.Mvc;
using kadmium_osc_dmx_dotnet_core;
using System.Linq;
using kadmium_osc_dmx_dotnet_core.Fixtures;
using kadmium_osc_dmx_dotnet_core.Solvers;
using System.Collections.Generic;

// For more information on enabling MVC for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace kadmium_osc_dmx_dotnet_webui.Controllers
{
    [Route("api/[controller]")]
    public class SolversLiveController : Controller
    {
        [HttpGet]
        [Route("[action]")]
        public bool Enabled()
        {
            return MasterController.Instance.UpdatesEnabled;
        }

        [HttpGet]
        [Route("[action]/{value}")]
        public void Enabled(bool value)
        {
            MasterController.Instance.UpdatesEnabled = value;
        }

        [HttpGet]
        public SolversLiveResponse Get()
        {
            SolversLiveResponse response = new SolversLiveResponse
            {
                Universes = from universe in MasterController.Instance.Venue?.Universes ?? Enumerable.Empty<Universe>()
                            select new SolversLiveUniverse
                            {
                                UniverseID = universe.UniverseNumber,
                                Name = universe.Name,
                                Fixtures = from fixture in universe.Fixtures
                                           orderby fixture.StartChannel
                                           select new SolversLiveFixture
                                           {
                                               Id = fixture.Id,
                                               Manufacturer = fixture.FixtureDefinition.Manufacturer,
                                               Model = fixture.FixtureDefinition.Model,
                                               Address = fixture.StartChannel,
                                               Attributes = from attribute in fixture.Settables.Values
                                                            //where !attribute.Controlled && attribute is FixtureSolverAttribute
                                                            select new SolversLiveAttribute
                                                            {
                                                                Name = attribute.Name,
                                                                Value = attribute.Value,
                                                                DmxMin = (attribute as DMXChannel)?.Min ?? 0,
                                                                DmxMax = (attribute as DMXChannel)?.Max ?? 0,
                                                                Controlled = (attribute as DMXChannel)?.Controlled ?? false,
                                                                Dmx = attribute is DMXChannel
                                                            }
                                           }
                            }
            };
            return response;
        }
    }

    public class SolversLiveResponse
    {
        public IEnumerable<SolversLiveUniverse> Universes { get; set; }
    }

    public class SolversLiveUniverse
    {
        public int UniverseID { get; set; }
        public string Name { get; set; }
        public IEnumerable<SolversLiveFixture> Fixtures { get; set; }
    }

    public class SolversLiveFixture
    {
        public int Id { get; set; }
        public string Manufacturer { get; set; }
        public string Model { get; set; }
        public int Address { get; set; }
        public IEnumerable<SolversLiveAttribute> Attributes { get; set; }
    }

    public class SolversLiveAttribute
    {
        public string Name { get; set; }
        public float Value { get; set; }
        public int DmxMin { get; set; }
        public int DmxMax { get; set; }
        public bool Controlled { get; set; }
        public bool Dmx { get; set; }
    }

}