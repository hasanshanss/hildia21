using AutoMapper;
using Hildia21.API.Contracts.V1.Requests;
using Hildia21.DAL.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Hildia21.API.MappingProfiles
{
    public class RequestToDomainProfile : Profile
    {
        public RequestToDomainProfile()
        {
            CreateMap<GetPersonRequestModel,Person>();
        }
    }
}
