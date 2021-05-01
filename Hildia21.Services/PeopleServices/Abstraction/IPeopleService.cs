using Hildia21.DAL.Entities;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Hildia21.Services.PeopleServices.Abstraction
{
    public interface IPeopleService
    {
    IEnumerable<Person> GetPersonListBy(Person person);
    }
}
