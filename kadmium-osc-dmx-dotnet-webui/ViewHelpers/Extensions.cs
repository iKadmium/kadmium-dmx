using System.Collections.Generic;
using System.Linq;

namespace kadmium_osc_dmx_dotnet_webui.ViewHelpers
{
    public static class Extensions
    {
        public static IEnumerable<IEnumerable<T>> Batch<T>(this IEnumerable<T> list, int batchSize)
        {
            int numberOfBatches = list.Count() / batchSize;
            if (list.Count() % batchSize != 0)
            {
                numberOfBatches++;
            }
            for (int i = 0; i < numberOfBatches; i++)
            {
                yield return list.Skip(i * batchSize).Take(batchSize);
            }
        }
    }
}
