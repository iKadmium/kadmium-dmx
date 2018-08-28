using System;
using System.Linq;
using kadmium_dmx_core;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using kadmium_dmx_core.Fixtures;
using kadmium_dmx_core.Solvers;
using Swashbuckle.AspNetCore.Annotations;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace kadmium_dmx_webapi.Controllers
{
    [Route("api/[controller]")]
    public class UniverseController : Controller
    {
        IMasterController MasterController { get; }

        public UniverseController(IMasterController masterController)
        {
            MasterController = masterController;
        }

        [HttpGet("getActive/{universeID}")]
        [SwaggerOperation(OperationId = "GetActiveUniverse")]
        public ActiveUniverse GetActive(int universeID)
        {
            var universe = MasterController.Venue.Universes.Single(x => x.UniverseID == universeID);
            return GetActiveUniverse(universe);
        }

        public static ActiveUniverse GetActiveUniverse(Universe universe)
        {
            return new ActiveUniverse
            {
                UniverseID = universe.UniverseID,
                Name = universe.Name,
                Fixtures = from fixture in universe.Fixtures
                           orderby fixture.Address
                           select new ActiveFixture
                           {
                               Manufacturer = fixture.FixtureDefinitionSkeleton.Manufacturer,
                               Model = fixture.FixtureDefinitionSkeleton.Model,
                               Address = fixture.Address,
                               Group = fixture.Group,
                               ColorWheel = fixture.ColorWheel,
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

        private static int GetDisplayMin(Fixture fixture, FixtureAttribute attribute)
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

        private static int GetDisplayMax(Fixture fixture, FixtureAttribute attribute)
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
