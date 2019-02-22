using kadmium_dmx_core.Fixtures;
using Microsoft.Extensions.DependencyInjection;
using Newtonsoft.Json.Linq;
using System;

namespace kadmium_dmx_core
{
    public static class ServiceLocator
    {
        private static ServiceProvider m_serviceProvider;
        private static ServiceProvider ServiceCollection
        {
            get
            {
                if (m_serviceProvider == null)
                {
                    var serviceCollection = new ServiceCollection();
                    var strobe = new Strobe(20);
                    serviceCollection.AddSingleton(typeof(IStrobe), typeof(Strobe));
                    m_serviceProvider = serviceCollection.BuildServiceProvider();
                }
                return m_serviceProvider;
            }
        }
        public static T Get<T>()
        {
            return ServiceCollection.GetService<T>();
        }
    }
}
