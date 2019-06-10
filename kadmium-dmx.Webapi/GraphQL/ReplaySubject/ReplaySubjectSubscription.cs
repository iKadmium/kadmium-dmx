using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace kadmium_dmx_webapi.GraphQL.ReplaySubject
{
    public class ReplaySubjectSubscription<T> : IDisposable
    {
        public event EventHandler OnDispose;

        public IObserver<T> Observer { get; }

        public ReplaySubjectSubscription(IObserver<T> observer)
        {
            Observer = observer;
        }

        public void Dispose()
        {
            OnDispose?.Invoke(this, null);
        }
    }
}
