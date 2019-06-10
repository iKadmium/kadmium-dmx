using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using System.Reactive.Subjects;
using System.Threading.Tasks;
using System.Timers;

namespace kadmium_dmx_webapi.GraphQL.ReplaySubject
{
    public class RateLimitedKeyedReplaySubject<TKey, TItem> : ReplaySubject<TItem>
    {
        private ConcurrentDictionary<TKey, TItem> Buffer { get; }
        private ConcurrentDictionary<TKey, bool> DirtyFlags { get; }
        private Timer Timer { get; }

        public RateLimitedKeyedReplaySubject(double interval)
        {
            Buffer = new ConcurrentDictionary<TKey, TItem>();
            DirtyFlags = new ConcurrentDictionary<TKey, bool>();
            Timer = new Timer(interval);
            Timer.Elapsed += Timer_Elapsed;
            Timer.Start();
        }

        private void Timer_Elapsed(object sender, ElapsedEventArgs e)
        {
            foreach (var dirtyFlag in DirtyFlags.Where(x => x.Value).ToList())
            {
                foreach (var subscription in this.Subscriptions.ToList())
                {
                    subscription.Observer.OnNext(Buffer[dirtyFlag.Key]);
                    DirtyFlags[dirtyFlag.Key] = false;
                }
            }
        }

        public override IDisposable Subscribe(IObserver<TItem> observer)
        {
            var subscription = base.Subscribe(observer) as ReplaySubjectSubscription<TItem>;
            foreach (var value in Buffer.Values)
            {
                subscription.Observer.OnNext(value);
            }
            return subscription;
        }

        public void Add(TKey key, TItem value)
        {
            if(Buffer.ContainsKey(key))
            {
                if(!Buffer[key].Equals(value))
                {
                    Buffer[key] = value;
                    DirtyFlags[key] = true;
                }
            }
            else
            {
                Buffer.TryAdd(key, value);
                DirtyFlags.TryAdd(key, true);
            }
            
        }
    }
}
