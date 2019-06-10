using GraphQL.Resolvers;
using GraphQL.Subscription;
using GraphQL.Types;
using kadmium_dmx_core;
using kadmium_dmx_core.DataSubscriptions;
using kadmium_dmx_core.Listeners;
using kadmium_dmx_core.Transmitters;
using kadmium_dmx_webapi.GraphQL.ReplaySubject;
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
        private LastItemReplaySubject<VenueStatusUpdate> VenueStatusEvents { get; }
        private LastItemReplaySubject<StatusUpdate> TransmitterStatusEvents { get; }
        private LastItemReplaySubject<StatusUpdate> ListenerStatusEvents { get; }
        private RateLimitedKeyedReplaySubject<int, DMXEventArgs> DmxEvents { get; }
        private RateLimitedKeyedReplaySubject<string, ListenerMessage> ListenerMessageEvents { get; }

        public KadmiumDMXSubscription(IMasterController masterController, ITransmitter transmitter, IListener listener)
        {
            VenueStatusEvents = new LastItemReplaySubject<VenueStatusUpdate>();
            masterController.VenueStatusUpdated += (sender, e) => VenueStatusEvents.OnNext(e);
            VenueStatusEvents.OnNext(new VenueStatusUpdate("No venue loaded", StatusCode.Warning, null));

            TransmitterStatusEvents = new LastItemReplaySubject<StatusUpdate>();
            transmitter.StatusUpdate += (sender, e) => TransmitterStatusEvents.OnNext(e);

            ListenerStatusEvents = new LastItemReplaySubject<StatusUpdate>();
            listener.StatusUpdate += (sender, e) => ListenerStatusEvents.OnNext(e);
            ListenerStatusEvents.OnNext(new StatusUpdate("Listening, no messages yet", StatusCode.Warning));

            ListenerMessageEvents = new RateLimitedKeyedReplaySubject<string, ListenerMessage>(250);
            listener.MessageReceived += (sender, e) => ListenerMessageEvents.Add(e.Address, e);

            DmxEvents = new RateLimitedKeyedReplaySubject<int, DMXEventArgs>(25);
            transmitter.Dmx += (sender, e) => DmxEvents.Add(e.UniverseId, e);

            AddField(new EventStreamFieldType
            {
                Name = "venueStatus",
                Type = typeof(VenueStatusType),
                Resolver = new FuncFieldResolver<VenueStatusUpdate>(ctx => ctx.Source as VenueStatusUpdate),
                Subscriber = new EventStreamResolver<VenueStatusUpdate>(ctx => VenueStatusEvents)
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

            AddField(new EventStreamFieldType
            {
                Name = "universeDmx",
                Arguments = new QueryArguments(
                    new QueryArgument<IntGraphType>
                    {
                        Name = "universeId"
                    }
                ),
                Type = typeof(DmxEventType),
                Resolver = new FuncFieldResolver<DMXEventArgs>(ctx => ctx.Source as DMXEventArgs),
                Subscriber = new EventStreamResolver<DMXEventArgs>(ctx =>
                {
                    var universeId = (int)ctx.Arguments["universeId"];
                    return DmxEvents
                        .Where(x => x.UniverseId == universeId);
                    })
            });
        }

    }
}
