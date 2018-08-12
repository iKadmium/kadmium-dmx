using System;
using System.Threading.Tasks;

namespace kadmium_dmx_core
{
    public interface IRenderer
    {
        bool Running { get; }

        event EventHandler OnUpdate;

        void Start();
        Task Stop();
    }
}