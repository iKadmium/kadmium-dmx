using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace kadmium_dmx_core
{
    public class Renderer : IDisposable, IRenderer
    {
        public static int UPDATES_PER_SECOND = 40; // in hz
        private static readonly int UPDATE_TIME = 1000 / UPDATES_PER_SECOND;
        private static TimeSpan UPDATE_TIME_SPAN = new TimeSpan(0, 0, 0, 0, UPDATE_TIME);

        public bool Running { get; private set; } = false;

        private IMasterController MasterController { get; }
        private CancellationTokenSource CancellationTokenSource { get; set; }

        public event EventHandler OnUpdate;

        public Renderer(IMasterController masterController)
        {
            MasterController = masterController;
            Start();
        }

        public async Task Stop()
        {
            CancellationTokenSource.Cancel();
            await RenderTask;
            Running = false;
        }

        public void Start()
        {
            if(!Running)
            {
                CancellationTokenSource = new CancellationTokenSource();
                RenderTask = Task.Run(RenderLoop);
            }
            else
            {
                throw new Exception("The render task is already running");
            }
        }

        private Task RenderTask { get; set; }

        private async Task RenderLoop()
        {
            Stopwatch stopwatch = new Stopwatch();
            while (!CancellationTokenSource.IsCancellationRequested)
            {
                try
                {
                    stopwatch.Restart();
                    Update();
                    await Render();

                    stopwatch.Stop();
                    TimeSpan delayTime = UPDATE_TIME_SPAN - stopwatch.Elapsed;
                    if (delayTime > TimeSpan.Zero)
                    {
                        Thread.Sleep(delayTime);
                    }

                }
                catch (Exception e)
                {
                    Console.Error.WriteLine(e.StackTrace);
                    Running = false;
                }
            }
        }

        private void Update()
        {
            foreach (Group group in MasterController.Groups.Values)
            {
                group.Update();
            }
            MasterController.Venue?.Update();
            OnUpdate?.Invoke(this, new EventArgs());
        }

        private async Task Render()
        {
            await (MasterController.Venue?.Render(MasterController.Transmitters) ?? Task.CompletedTask);
        }

        public void Dispose()
        {
            RenderTask.Dispose();
        }
    }
}
