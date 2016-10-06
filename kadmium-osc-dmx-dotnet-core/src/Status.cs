using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace kadmium_osc_dmx_dotnet_core
{
    public enum StatusCode
    {
        NotStarted,
        Running,
        Error
    }

    public class Status
    {
        public event EventHandler<StatusUpdateEventArgs> Updated;

        public string Message { get; private set; }
        public StatusCode StatusCode { get; private set; }
        
        public Status(string notStartedMessage = "Not started yet")
        {
            StatusCode = StatusCode.NotStarted;
            Message = notStartedMessage;
        }
        
        public void Update(StatusCode statusCode, string message, object sender)
        {
            Message = message;
            StatusCode = statusCode;
            Updated?.Invoke(sender, new StatusUpdateEventArgs(message, statusCode));
        }

        public JObject Serialize()
        {
            JObject obj = new JObject(
                new JProperty("code", StatusCode.ToString()),
                new JProperty("message", Message)
            );
            return obj;
        }
    }

    public class StatusUpdateEventArgs : EventArgs
    {
        public string Message { get; }
        public StatusCode StatusCode { get; }

        public StatusUpdateEventArgs(string message, StatusCode statusCode)
        {
            Message = message;
            StatusCode = statusCode;
        }
    }
}
