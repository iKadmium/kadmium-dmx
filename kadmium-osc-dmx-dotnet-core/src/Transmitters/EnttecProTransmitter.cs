using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json.Linq;

namespace kadmium_osc_dmx_dotnet_core.Transmitters
{
    public class EnttecProTransmitter : Transmitter
    {
        private static int DMX_PRO_MIN_DATA_SIZE = 25;
        private static byte DMX_PRO_MESSAGE_START = (byte)(0x7E);
        private static byte DMX_PRO_MESSAGE_END = (byte)(0xE7);
        private static byte DMX_PRO_SEND_PACKET = (byte)(6);

        public string Address { get; set; }

        //public SerialPort SerialPort { get; set; }
        public new string DisplayName
        {
            get
            {
                return "Enttec Pro Transmitter [" + Name + "] : " + Address;
            }
        }
        public EnttecProTransmitter(string name, string address, bool enabled) : base(name, enabled)
        {
            Address = address;
            /*SerialPort = new SerialPort(address, 115200, Parity.None, 8, StopBits.One);
            try
            {
                SerialPort.Open();
            }
            catch(IOException e)
            {
                StringBuilder builder = new StringBuilder();
                builder.AppendLine(e.Message);


                builder.Append("Valid COM Ports on this system: ");
                builder.AppendLine(String.Join(", ", System.IO.Ports.SerialPort.GetPortNames()));
                Status.Update(StatusCode.Error, builder.ToString());
            }*/

        }

        public override JObject Serialize()
        {
            JObject obj = new JObject(
                new JProperty("name", Name),
                new JProperty("type", "EntTec"),
                new JProperty("address", Address)
            );

            return obj;
        }

        public override void TransmitInternal(byte[] dmx)
        {
            //if(SerialPort.IsOpen)
            {
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
                metadata[4] = (byte)0; // DMX Command byte

                byte[] outputData = new byte[dataSize + metadata.Length];
                Buffer.BlockCopy(metadata, 0, outputData, 0, metadata.Length);
                Buffer.BlockCopy(dmx, 0, outputData, metadata.Length, dmx.Length);

                outputData[outputData.Length - 1] = DMX_PRO_MESSAGE_END;

                //SerialPort.Write(outputData, 0, outputData.Length);
                Status.Update(StatusCode.Running, "Data sent");

            }
        }

        public static new Transmitter Load(JObject element)
        {
            string address = element["address"].Value<string>();
            string id = element["name"].Value<string>();
            bool enabled = true;// bool.Parse(element.Attribute("enabled").Value);
            EnttecProTransmitter transmitter = new EnttecProTransmitter(id, address, enabled);
            return transmitter;
        }

        public override void Close()
        {

        }
    }
}
