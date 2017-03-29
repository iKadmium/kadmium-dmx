using kadmium_osc_dmx_dotnet_core.Transmitters;
using kadmium_sacn_core;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Sockets;
using System.Text;
using System.Threading.Tasks;
using Xunit;

namespace kadmium_osc_dmx_dotnet_test
{
    public class SACNTransmitterTests
    {
        [Fact]
        public async Task TestMulticast()
        {
            short universeID = 1;
            short universeSize = 512;

            SACNTransmitter transmitter = GetMulticastTransmitter();

            UdpClient client = new UdpClient(SACNTransmitter.SACN_PORT);
            client.JoinMulticastGroup(SACNCommon.GetMulticastAddress(universeID));
            byte[] dmx = new byte[universeSize];
            Random random = new Random();
            random.NextBytes(dmx);

            var receiveTask = client.ReceiveAsync();
            await transmitter.Transmit(dmx, universeID);

            var result = await receiveTask;
            SACNPacket packet = SACNPacket.Parse(result.Buffer);

            Assert.Equal(dmx, packet.Data);
        }

        [Fact]
        public async Task TestUnicast()
        {
            short universeID = 1;
            short universeSize = 512;

            SACNTransmitter transmitter = GetUnicastTransmitter(new [] { "localhost"});

            UdpClient client = new UdpClient(SACNTransmitter.SACN_PORT);
            byte[] dmx = new byte[universeSize];
            Random random = new Random();
            random.NextBytes(dmx);

            var receiveTask = client.ReceiveAsync();
            await transmitter.Transmit(dmx, universeID);

            var result = await receiveTask;
            SACNPacket packet = SACNPacket.Parse(result.Buffer);

            Assert.Equal(dmx, packet.Data);
        }

        public static SACNTransmitter GetMulticastTransmitter()
        {
            SACNTransmitter transmitter = new SACNTransmitter(new Guid(), "SACN Transmitter", SACNTransmitter.SACN_PORT, 0, true, Enumerable.Empty<string>());
            return transmitter;
        }

        public static SACNTransmitter GetUnicastTransmitter(IEnumerable<string> targets)
        {
            SACNTransmitter transmitter = new SACNTransmitter(new Guid(), "SACN Transmitter", SACNTransmitter.SACN_PORT, 0, false, targets);
            return transmitter;
        }
    }
}
