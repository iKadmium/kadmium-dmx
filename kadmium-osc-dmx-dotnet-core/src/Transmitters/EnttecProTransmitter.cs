using System;
using RJCP.IO.Ports;
using System.Threading.Tasks;
using System.Linq;

namespace kadmium_osc_dmx_dotnet_core.Transmitters
{
    public class EnttecProTransmitter : Transmitter
    {
        private static int DMX_PRO_MIN_DATA_SIZE = 25;
        private static byte DMX_PRO_MESSAGE_START = 0x7E;
        private static byte DMX_PRO_MESSAGE_END = 0xE7;
        private static byte DMX_PRO_SEND_PACKET = 6;

        public string Port { get; set; }

        public SerialPortStream Stream { get; set; }

        public EnttecProTransmitter(string port, int delay) : base("Enttec Pro Transmitter", delay)
        {
            Delay = delay;
            Port = port;
            TryOpenStream();
        }

        private void TryOpenStream()
        {
            try
            {
                if (SerialPortStream.GetPortNames().Contains(Port))
                {
                    Stream = new SerialPortStream(Port, 115200, 8, Parity.None, StopBits.One);
                    Stream.Open();
                    Enabled = true;
                }
                else
                {
                    Status.Update(StatusCode.Error, "Port " + Port + " not found", this);
                }

            }
            catch (Exception e)
            {
                Status.Update(StatusCode.Error, e.Message, this);
            }
        }

        public override void Dispose()
        {
            Stream.Dispose();
        }

        public override async Task TransmitInternal(byte[] dmx, int transmitterID)
        {
            if (Stream == null || !Stream.IsOpen || !Stream.CanWrite)
            {
                TryOpenStream();
            }
            byte[] metadata = new byte[5];
            int dataSize = dmx.Length + 2;
            if (dataSize < DMX_PRO_MIN_DATA_SIZE)
            {
                dataSize = DMX_PRO_MIN_DATA_SIZE;
            }

            metadata[0] = DMX_PRO_MESSAGE_START;
            metadata[1] = DMX_PRO_SEND_PACKET;
            metadata[2] = (byte)(dataSize & 255);
            metadata[3] = (byte)((dataSize >> 8) & 255);
            metadata[4] = 0; // DMX Command byte

            byte[] outputData = new byte[dataSize + metadata.Length];
            Array.Copy(metadata, 0, outputData, 0, metadata.Length);
            Array.Copy(dmx, 0, outputData, metadata.Length, dmx.Length);

            outputData[outputData.Length - 1] = DMX_PRO_MESSAGE_END;

            await Stream.WriteAsync(outputData, 0, outputData.Length);
        }

        public static string[] GetPortNames()
        {
            return SerialPortStream.GetPortNames();
        }

        public static EnttecProTransmitter Load(EnttecProTransmitterSettings settings)
        {
            EnttecProTransmitter transmitter = new EnttecProTransmitter(settings.Port, settings.Delay);
            return transmitter;
        }
    }
}
