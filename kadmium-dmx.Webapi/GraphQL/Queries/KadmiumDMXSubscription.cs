using GraphQL.Resolvers;
using GraphQL.Types;
using kadmium_dmx_core;
using kadmium_dmx_core.DataSubscriptions;
using kadmium_dmx_core.Listeners;
using kadmium_dmx_core.Transmitters;
using kadmium_dmx_webapi.GraphQL.Types;
using kadmium_dmx_webapi.GraphQL.Types.StatusUpdates;
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
        private ReplaySubject<StatusUpdate> TransmitterStatusEvents { get; }
        private ReplaySubject<StatusUpdate> ListenerStatusEvents { get; }
        private ReplaySubject<ListenerMessage> ListenerMessageEvents { get; }

        public KadmiumDMXSubscription(IMasterController masterController, ITransmitter transmitter, IListener listener)
        {
            VenueStatusEvents = new ReplaySubject<VenueStatusUpdate>();
            masterController.VenueStatusUpdated += (sender, e) => VenueStatusEvents.OnNext(e);
            VenueStatusEvents.OnNext(new VenueStatusUpdate("No venue loaded", StatusCode.Warning, null));

            TransmitterStatusEvents = new ReplaySubject<StatusUpdate>();
            transmitter.StatusUpdate += (sender, e) => TransmitterStatusEvents.OnNext(e);

            ListenerStatusEvents = new ReplaySubject<StatusUpdate>();
            listener.StatusUpdate += (sender, e) => ListenerStatusEvents.OnNext(e);
            ListenerStatusEvents.OnNext(new StatusUpdate("Listening, no messages yet", StatusCode.Warning));

            ListenerMessageEvents = new ReplaySubject<ListenerMessage>();
            listener.MessageReceived += (sender, e) => ListenerMessageEvents.OnNext(e);

            

            AddField(new EventStreamFieldType
            {
                Name = "venueStatus",
                Type = typeof(VenueStatusType),
                Resolver = new FuncFieldResolver<VenueStatusUpdate>(ctx => ctx.Source as VenueStatusUpdate),
                Subscriber = new EventStreamResolver<VenueStatusUpdate>(ctx => VenueStatusEvents.AsObservable())
            });

            AddField(new EventStreamFieldType
            {
                Name = "listenerStatus",
                Type = typeof(StatusType),
                Resolver = new FuncFieldResolver<StatusUpdate>(ctx => ctx.Source as StatusUpdate),
                Subscriber = new EventStreamResolver<StatusUpdate>(ctx => ListenerStatusEvents.AsObservable())
            });

            AddField(new EventStreamFieldType
            {
                Name = "listenerMessages",
                Type = typeof(ListenerMessageType),
                Resolver = new FuncFieldResolver<ListenerMessage>(ctx => ctx.Source as ListenerMessage),
                Subscriber = new EventStreamResolver<ListenerMessage>(ctx => ListenerMessageEvents.AsObservable())
            });

            AddField(new EventStreamFieldType
            {
                Name = "transmitterStatus",
                Type = typeof(StatusType),
                Resolver = new FuncFieldResolver<StatusUpdate>(ctx => ctx.Source as StatusUpdate),
                Subscriber = new EventStreamResolver<StatusUpdate>(ctx => TransmitterStatusEvents.AsObservable())
            });
        }
    }
}
