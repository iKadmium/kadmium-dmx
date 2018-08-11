using kadmium_dmx_core.Transmitters;
using kadmium_dmx_data.Types.Settings;
using kadmium_sacn_core;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Sockets;
using System.Threading.Tasks;
using Xunit;

namespace kadmium_dmx_test
{
    public class SACNTransmitterTests
    {
        static UdpClient client = new UdpClient(SACNTransmitter.SACN_PORT);

        [Fact]
        public void TestMulticast()
        {
            short universeID = 1;
            short universeSize = 512;

            SACNTransmitter transmitter = GetMulticastTransmitter();

            lock (client)
            {
                client.JoinMulticastGroup(SACNCommon.GetMulticastAddress(universeID));
                byte[] dmx = new byte[universeSize];
                Random random = new Random();
                random.NextBytes(dmx);

                var receiveTask = client.ReceiveAsync();
                transmitter.Transmit(dmx, universeID).Wait();

                bool resultReceived = false;
                var task = receiveTask.ContinueWith((udpResult) =>
                {
                    SACNPacket packet = SACNPacket.Parse(udpResult.Result.Buffer);

                    Assert.Equal(dmx, packet.Data);
                    resultReceived = true;
                }).Wait(1000);
                Assert.True(resultReceived);
            }
        }

        [Fact]
        public void TestUnicast()
        {
            short universeID = 1;
            short universeSize = 512;

            SACNTransmitter transmitter = GetUnicastTransmitter(new[] { "localhost" });

            byte[] dmx = new byte[universeSize];
            Random random = new Random();
            random.NextBytes(dmx);

            var receiveTask = client.ReceiveAsync();
            lock (client)
            {
                transmitter.Transmit(dmx, universeID).Wait();

                bool resultReceived = false;
                var task = receiveTask.ContinueWith((udpResult) =>
                {
                    SACNPacket packet = SACNPacket.Parse(udpResult.Result.Buffer);
                    Assert.Equal(dmx, packet.Data);
                    resultReceived = true;
                }).Wait(1000);
                Assert.True(resultReceived);
                
            }
        }

        public static SACNTransmitter GetMulticastTransmitter()
        {
            var settings = new SacnTransmitterSettings
            {
                Delay = 0,
                Multicast = true,
                Unicast = Enumerable.Empty<string>(),
                UUID = new Guid()
            };
            SACNTransmitter transmitter = new SACNTransmitter(settings);
            return transmitter;
        }

        public static SACNTransmitter GetUnicastTransmitter(IEnumerable<string> targets)
        {
            var settings = new SacnTransmitterSettings
            {
                Delay = 0,
                Multicast = false,
                Unicast = targets,
                UUID = new Guid()
            };
            SACNTransmitter transmitter = new SACNTransmitter(settings);
            return transmitter;
        }
    }
}
