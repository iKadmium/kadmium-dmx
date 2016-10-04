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

    public class Status : INotifyPropertyChanged
    {
        public event PropertyChangedEventHandler PropertyChanged;

        private string message;
        public string Message
        {
            get
            {
                return message;
            }
            set
            {
                message = value;
                if(PropertyChanged != null)
                {
                    PropertyChanged(this, new PropertyChangedEventArgs(nameof(Message)));
                }
            }
        }

        private StatusCode statusCode;
        public StatusCode StatusCode
        { 
            get
            {
                return statusCode;
            }
            set
            {
                statusCode = value;
                if (PropertyChanged != null)
                {
                    PropertyChanged(this, new PropertyChangedEventArgs(nameof(StatusCode)));
                }
            }
        }

        public Status(string notStartedMessage = "Not started yet")
        {
            statusCode = StatusCode.NotStarted;
            message = notStartedMessage;
        }
        
        public void Update(StatusCode statusCode, string message)
        {
            Message = message;
            StatusCode = statusCode;
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
    
    
}
