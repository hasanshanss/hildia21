using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.IO;
using System.Text;

namespace Hildia21.DAL
{
    public class ConnectionStringManager
    {
        public string GetConnectionString()
        {
            var configBuilder = new ConfigurationBuilder();
            configBuilder.SetBasePath(Directory.GetCurrentDirectory())
                         .AddJsonFile("appsettings.json", true, true);
            return configBuilder.Build().GetSection("ConnectionStrings:DefaultConnection").Value;
        }
    }
}
