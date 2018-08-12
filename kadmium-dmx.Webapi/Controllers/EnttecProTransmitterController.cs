using System.Linq;
using Microsoft.AspNetCore.Mvc;
using kadmium_dmx_core.Transmitters;
using kadmium_dmx_core;
using System;
using System.Collections.Generic;

namespace kadmium_dmx_webapi.Controllers
{
    [Route("api/[controller]")]
    public class EnttecProTransmitterController : Controller
    {
        IMasterController MasterController { get; }

        public EnttecProTransmitterController(IMasterController masterController)
        {
            MasterController = masterController;
        }

        [HttpGet("ports")]
        public IEnumerable<string> GetPorts()
        {
            IEnumerable<string> ports = Enumerable.Empty<string>();
            try
            {
                ports = EnttecProTransmitter.GetPortNames();
            }
            catch (Exception)
            {

            }
            return ports;
        }

        [HttpGet("[action]")]
        public bool Enabled()
        {
            var transmitter = MasterController.Transmitters.SingleOrDefault(x => x is EnttecProTransmitter);
            return transmitter?.Enabled ?? false;
        }

        [HttpPost("[action]/{value}")]
        public void SetEnabled(bool value)
        {
            MasterController.Transmitters.Single(x => x is EnttecProTransmitter).Enabled = value;
        }

        [HttpGet("[action]")]
        public Status Status()
        {
            return MasterController.Transmitters.Single(x => x is EnttecProTransmitter).Status;
        }
    }
}
