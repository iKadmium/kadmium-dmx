using kadmium_osc_dmx_dotnet_core;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace kadmium_osc_dmx_dotnet_test
{
    class DatabaseTests
    {
        public static DbContextOptionsBuilder<DatabaseContext> GetBuilder()
        {
            var builder = new DbContextOptionsBuilder<DatabaseContext>();
            DatabaseContext.SetConnectionString("Testing", builder);
            return builder;
        }
    }
}
