using kadmium_dmx_data.Types.Venues;
using Newtonsoft.Json.Linq;
using System;

namespace kadmium_dmx_core.DataSubscriptions
{
    public enum StatusCode
    {
        Warning,
        Success,
        Error,
        Unknown
    }

    public class StatusUpdate : EventArgs
    {
        public string Message { get; }
        public StatusCode StatusCode { get; }
        
        public StatusUpdate(string message, StatusCode statusCode)
        {
            Message = message;
            StatusCode = statusCode;
        }
    }

    public class VenueStatusUpdate : StatusUpdate
    {
        public IVenueData Venue { get; }

        public VenueStatusUpdate(string message, StatusCode statusCode, IVenueData venueData) : base(message, statusCode)
        {
            Venue = venueData;
        }
    }

    public class ListenerUpdate : EventArgs
    {
        public bool Recognised { get; }
        public DateTime Time { get; }
        public string Source { get; }
        public string Address { get; }
        public float Value { get; }

        public ListenerUpdate(bool recognised, DateTime time, string source, string address, float value)
        {
            Recognised = recognised;
            Time = time;
            Source = source;
            Address = address;
            Value = value;
        }
    }

}
