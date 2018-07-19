using System.Linq;
using Microsoft.AspNetCore.Mvc;
using kadmium_dmx_core.Transmitters;
using kadmium_dmx_core;
using Swashbuckle.AspNetCore.SwaggerGen;
using System;
using System.Collections.Generic;
using Swashbuckle.AspNetCore.Annotations;

namespace kadmium_dmx_webapi.Controllers
{
    [Route("api/[controller]")]
    public class EnttecProTransmitterController : Controller
    {
        [HttpGet("[action]")]
        [SwaggerOperation("getEnttecPortNames")]
        public IEnumerable<string> Ports()
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
        [SwaggerOperation("getEnttecEnabled")]
        public bool Enabled()
        {
            var transmitter = MasterController.Instance.Transmitters.SingleOrDefault(x => x is EnttecProTransmitter);
            return transmitter?.Enabled ?? false;
        }

        [HttpGet("[action]/{value}")]
        [SwaggerOperation("setEnttecEnabled")]
        public void Enabled(bool value)
        {
            MasterController.Instance.Transmitters.Single(x => x is EnttecProTransmitter).Enabled = value;
        }

        [HttpGet("[action]")]
        [SwaggerOperation("getEnttecStatus")]
        public Status Status()
        {
            return MasterController.Instance.Transmitters.Single(x => x is EnttecProTransmitter).Status;
        }
    }
}
