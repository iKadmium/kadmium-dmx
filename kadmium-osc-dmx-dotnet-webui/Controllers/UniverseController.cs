using System;
using System.Linq;
using kadmium_osc_dmx_dotnet_core;
using Microsoft.AspNetCore.Mvc;
using Swashbuckle.AspNetCore.SwaggerGen;
using System.Collections.Generic;
using kadmium_osc_dmx_dotnet_core.Fixtures;
using kadmium_osc_dmx_dotnet_core.Solvers;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace kadmium_osc_dmx_dotnet_webui.Controllers
{
    [Route("api/[controller]")]
    public class UniverseController : Controller
    {
        // POST api/values
        [HttpPost]
        [SwaggerOperation("postUniverse")]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        [SwaggerOperation("putUniverse")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        [SwaggerOperation("deleteUniverse")]
        public void Delete(int id)
        {
        }

        [HttpGet("getActive/{universeID}")]
        [SwaggerOperation("getActiveUniverseByID")]
        public ActiveUniverse GetActive(int universeID)
        {
            var universe = MasterController.Instance.Venue.Universes.Single(x => x.UniverseNumber == universeID);
            return GetActiveUniverse(universe);
        }

        public static ActiveUniverse GetActiveUniverse(Universe universe)
        {
            return new ActiveUniverse
            {
                UniverseID = universe.UniverseNumber,
                Name = universe.Name,
                Fixtures = from fixture in universe.Fixtures
                           orderby fixture.StartChannel
                           select new ActiveFixture
                           {
                               Id = fixture.Id,
                               Manufacturer = fixture.FixtureDefinition.Manufacturer,
                               Model = fixture.FixtureDefinition.Model,
                               Address = fixture.StartChannel,
                               Group = fixture.Group.Name,
                               ColorWheel = fixture.FixtureDefinition.ColorWheel,
                               Attributes = from attribute in fixture.Settables.Values
                                            select new ActiveAttribute
                                            {
                                                Name = attribute.Name,
                                                Value = attribute.Value,
                                                DisplayMin = GetDisplayMin(fixture, attribute),
                                                DisplayMax = GetDisplayMax(fixture, attribute),
                                                Controlled = (attribute as DMXChannel)?.Controlled ?? false,
                                                Dmx = attribute is DMXChannel,
                                                DmxAddress = (attribute as DMXChannel)?.Address ?? 0
                                            }
                           }
            };
        }

        private static int GetDisplayMin(Fixture fixture, kadmium_osc_dmx_dotnet_core.Solvers.Attribute attribute)
        {
            if (attribute is DMXChannel channel)
            {
                return channel.Min;
            }
            else if (fixture.MovementAxis.Keys.Any(axisName => axisName == attribute.Name))
            {
                //find out if it's restricted
                if (fixture.Solvers.Any(solver => solver is MovementRestrictionSolver))
                {
                    var solver = fixture.Solvers.Single(x => x is MovementRestrictionSolver) as MovementRestrictionSolver;
                    if (solver.Axis.ContainsKey(attribute.Name))
                    {
                        return solver.Axis[attribute.Name].RestrictedMin;
                    }
                    else
                    {
                        return fixture.MovementAxis[attribute.Name].Min;
                    }
                }
                else
                {
                    return fixture.MovementAxis[attribute.Name].Min;
                }
            }
            else
            {
                return 0;
            }
        }

        private static int GetDisplayMax(Fixture fixture, kadmium_osc_dmx_dotnet_core.Solvers.Attribute attribute)
        {
            if (attribute is DMXChannel channel)
            {
                return channel.Max;
            }
            else if (fixture.MovementAxis.Keys.Any(axisName => axisName == attribute.Name))
            {
                //find out if it's restricted
                if (fixture.Solvers.Any(solver => solver is MovementRestrictionSolver))
                {
                    var solver = fixture.Solvers.Single(x => x is MovementRestrictionSolver) as MovementRestrictionSolver;
                    if (solver.Axis.ContainsKey(attribute.Name))
                    {
                        return solver.Axis[attribute.Name].RestrictedMax;
                    }
                    else
                    {
                        return fixture.MovementAxis[attribute.Name].Max;
                    }
                }
                else
                {
                    return fixture.MovementAxis[attribute.Name].Max;
                }
            }
            else if (attribute.Name == "Hue")
            {
                return 360;
            }
            else
            {
                return 1;
            }
        }

    }

    public class ActiveUniverse
    {
        public int UniverseID { get; set; }
        public string Name { get; set; }
        public IEnumerable<ActiveFixture> Fixtures { get; set; }
    }

    public class ActiveFixture
    {
        public int Id { get; set; }
        public string Manufacturer { get; set; }
        public string Model { get; set; }
        public int Address { get; set; }
        public string Group { get; set; }
        public IEnumerable<ColorWheelEntry> ColorWheel { get; set; }
        public IEnumerable<MovementAxis> MovementAxis { get; set; }
        public IEnumerable<ActiveAttribute> Attributes { get; set; }
    }

    public class ActiveAttribute
    {
        public string Name { get; set; }
        public float Value { get; set; }
        public int DisplayMin { get; set; }
        public int DisplayMax { get; set; }
        public bool Controlled { get; set; }
        public bool Dmx { get; set; }
        public int DmxAddress { get; set; }
    }
}
