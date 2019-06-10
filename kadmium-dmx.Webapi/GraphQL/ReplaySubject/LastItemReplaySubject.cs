using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace kadmium_dmx_webapi.GraphQL.ReplaySubject
{
    public class LastItemReplaySubject<T> : ReplaySubject<T>
    {
        private T Item { get; set; }
        public bool UpdateOnUniqueOnly { get; set; }

        public LastItemReplaySubject(bool updateOnUniqueOnly = true)
        {
            UpdateOnUniqueOnly = UpdateOnUniqueOnly;
        }

        public override IDisposable Subscribe(IObserver<T> observer)
        {
            var subscription = base.Subscribe(observer) as ReplaySubjectSubscription<T>;
            subscription.Observer.OnNext(Item);
            return subscription;
        }

        public void OnNext(T item)
        {
            if(!UpdateOnUniqueOnly || !item.Equals(this.Item))
            {
                this.Item = item;
                foreach (var subscription in Subscriptions)
                {
                    subscription.Observer.OnNext(item);
                }
            }
        }
    }
}
