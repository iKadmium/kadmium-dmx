using kadmium_dmx_data.Types.Settings;
using System.Threading.Tasks;

namespace kadmium_dmx_data.Storage
{
    public interface ISettingsStore
    {
        Task<ISettings> GetSettings();
        Task SaveSettings(ISettings settings);
    }
}
