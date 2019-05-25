using GraphQL.Resolvers;
using GraphQL.Types;
using kadmium_dmx_core;
using kadmium_dmx_core.DataSubscriptions;
using kadmium_dmx_core.Transmitters;
using kadmium_dmx_webapi.GraphQL.Types;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reactive.Linq;
using System.Reactive.Subjects;
using System.Threading.Tasks;

namespace kadmium_dmx_webapi.GraphQL.Queries
{
    public class KadmiumDMXSubscription : ObjectGraphType
    {
        private ReplaySubject<VenueStatusUpdate> VenueStatusEvents { get; }

        public KadmiumDMXSubscription(IMasterController masterController, ITransmitter oscTransmitter)
        {
            VenueStatusEvents = new ReplaySubject<VenueStatusUpdate>();
            masterController.VenueStatusUpdated += (sender, e) =>
            {
                if(sender is Venue venue)
                {
                    VenueStatusEvents.OnNext(e);
                }
            };

            VenueStatusEvents.OnNext(new VenueStatusUpdate("No venue loaded", StatusCode.Warning, null));

            AddField(new EventStreamFieldType
            {
                Name = "venueStatus",
                Type = typeof(VenueStatusType),
                Resolver = new FuncFieldResolver<VenueStatusUpdate>(ctx => ctx.Source as VenueStatusUpdate),
                Subscriber = new EventStreamResolver<VenueStatusUpdate>(ctx => VenueStatusEvents.AsObservable())
            });
        }
    }
}
