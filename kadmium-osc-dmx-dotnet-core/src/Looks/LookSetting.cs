using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using System.ComponentModel.DataAnnotations.Schema;
using System.Threading.Tasks;

namespace kadmium_osc_dmx_dotnet_core.Looks
{
    public abstract class LookSetting
    {
        public int Id { get; set; }

        [JsonIgnore]
        public Group Group { get; set; }
        [NotMapped]
        [JsonProperty(PropertyName = "group")]
        public string GroupString { get; set; }
        

        public LookSetting()
        { }

        public async Task Initialize(DatabaseContext context)
        {
            Group = await context.Groups.SingleAsync(x => x.Name == GroupString);
        }

        public abstract void Activate(float amount);
    }
}