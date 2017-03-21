using kadmium_osc_dmx_dotnet_core.Fixtures;
using Xunit;

namespace kadmium_osc_dmx_dotnet_test
{
    public class DMXChannelTests
    {
        [Theory]
        [InlineData(0.0f, 0)]
        [InlineData(1.0f, 255)]
        [InlineData(0.5f, 127)]
        public void TestByteConversion(float value, byte expected)
        {
            DMXChannel channel = new DMXChannel("Name", 1)
            {
                Value = value
            };
            Assert.Equal(expected, channel.ByteValue);
        }

        [Theory]
        [InlineData(100, 200, 0.0f, 100)]
        [InlineData(100, 200, 1.0f, 200)]
        [InlineData(100, 200, 0.25f, 125)]
        [InlineData(200, 100, 0.0f, 200)]
        [InlineData(200, 0, 1.0f, 0)]
        [InlineData(200, 0, 0.5f, 100)]
        public void TestMinMaxConversion(byte min, byte max, float value, byte expected)
        {
            DMXChannel channel = new DMXChannel("Name", 1, min, max)
            {
                Value = value
            };
            Assert.Equal(expected, channel.ByteValue);
        }
    }
}
