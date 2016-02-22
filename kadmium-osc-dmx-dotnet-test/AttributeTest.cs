using Microsoft.VisualStudio.TestTools.UnitTesting;
using kadmium_osc_dmx_dotnet_core.Solvers;
using System;

namespace kadmium_osc_dmx_dotnet_test
{
    [TestClass]
    public class AttributeTest
    {
        [TestMethod]
        public void TestAttributeValue()
        {
            kadmium_osc_dmx_dotnet_core.Solvers.Attribute attribute = new kadmium_osc_dmx_dotnet_core.Solvers.Attribute("Test");
            try
            {
                attribute.Value = 2.0f;
                Assert.Fail("2.0 was accepted");
                attribute.Value = -1.0f;
                Assert.Fail("-1.0 was accepted");
            }
            catch (ArgumentException)
            {
                
            }
        }
    }
}
