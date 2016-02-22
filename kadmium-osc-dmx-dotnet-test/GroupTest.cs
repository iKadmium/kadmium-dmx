using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using kadmium_osc_dmx_dotnet_core;
using kadmium_osc_dmx_dotnet_core.Fixtures;
using System.Collections.Generic;
using kadmium_osc_dmx_dotnet_core.Solvers;

namespace kadmium_osc_dmx_dotnet_test
{
    [TestClass]
    public class GroupTest
    {
        [TestMethod]
        public void TestGroupSetForDMXChannel()
        {
            float initialValue = 0.0f;
            float finalValue = 0.5f;
            float margin = 0.01f;

            Group group = new Group("MyGroup");
            Fixture[] fixtures = new[] { FixtureTest.GetRGBFixture(), FixtureTest.GetRGBFixture(), FixtureTest.GetRGBFixture() };
            group.Fixtures.AddRange(fixtures);

            List<string> channelNames = new List<string>();
            foreach (Fixture fixture in fixtures)
            {
                foreach(DMXChannel channel in fixture.Adapter.Channels.Values)
                {
                    channel.Value = initialValue;
                    if(!channelNames.Contains(channel.Name))
                    {
                        channelNames.Add(channel.Name);
                    }
                }
            }

            //set them
            foreach (string name in channelNames)
            {
                group.Set(name, finalValue);
            }

            //check them
            foreach (Fixture fixture in fixtures)
            {
                foreach (DMXChannel channel in fixture.Adapter.Channels.Values)
                {
                    Assert.AreEqual(channel.Value, finalValue, margin);
                }
            }
        }

        [TestMethod]
        public void TestGroupSetForGroupSolver()
        {
            float initialValue = 0.0f;
            float finalValue = 0.5f;
            float margin = 0.01f;
            Strobe strobe = new Strobe(50.0);
            double coverage = 0.1;

            Group group = new Group("MyGroup");
            ApeshitSolver solver = new ApeshitSolver(group, strobe, coverage);
            group.Solvers.Add(solver);
            
            List<string> attributeNames = new List<string>();
            foreach (kadmium_osc_dmx_dotnet_core.Solvers.Attribute attribute in solver.Attributes.Values)
            {
                attributeNames.Add(attribute.Name);
                attribute.Value = initialValue;
            }

            //set them
            foreach (string name in attributeNames)
            {
                group.Set(name, finalValue);
            }

            //check them
            foreach (kadmium_osc_dmx_dotnet_core.Solvers.Attribute attribute in solver.Attributes.Values)
            {
                Assert.AreEqual(attribute.Value, finalValue, margin);
            }
        }

    }
}
