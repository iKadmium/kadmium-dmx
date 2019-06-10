using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace kadmium_dmx_webapi.GraphQL.ReplaySubject
{
    public abstract class ReplaySubject<T>: IObservable<T>
    {
        protected List<ReplaySubjectSubscription<T>> Subscriptions { get; }

        public ReplaySubject()
        {
            Subscriptions = new List<ReplaySubjectSubscription<T>>();
        }

        public virtual IDisposable Subscribe(IObserver<T> observer)
        {
            var subscription = new ReplaySubjectSubscription<T>(observer);
            Subscriptions.Add(subscription);
            subscription.OnDispose += (sender, e) => Subscriptions.Remove(subscription);
            return subscription;
        }
    }
}
