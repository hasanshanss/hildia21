using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Hildia21.API.Contracts.V1.Requests
{
    [JsonObject("person")]
    public class GetPersonRequestModel
    {
        [JsonProperty("name")]
        public string Name { get; set; }

        [JsonProperty("lastname")]
        public string Lastname { get; set; }

        [JsonProperty("father")]
        public string Father { get; set; }

        [JsonProperty("address")]
        public string Address { get; set; }

        [JsonProperty("is_regional")]
        public bool? IsRegional { get; set; }

        [JsonProperty("dob")]
        public string Dob { get; set; }
    }
}
