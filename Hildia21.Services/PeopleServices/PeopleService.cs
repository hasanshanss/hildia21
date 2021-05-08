using Hildia21.DAL.Entities;
using Hildia21.Services.PeopleServices.Abstraction;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Hildia21.Services.PeopleServices
{
    public class PeopleService : IPeopleService
    {
        private readonly PeopleContext _peopleContext;
        public PeopleService(PeopleContext peopleContext)
        {
            _peopleContext = peopleContext;
        }

        public IEnumerable<Person> GetPersonListBy(Person person)
        {
            IQueryable<Person> query = _peopleContext.People;

            if (!String.IsNullOrEmpty(person.Lastname))
            {
                query = query.Where(p => p.Lastname.StartsWith(person.Lastname));
            }

            if (!String.IsNullOrEmpty(person.Name))
            {
                query = query.Where(p => p.Name.StartsWith(person.Name));
            }

            if (!String.IsNullOrEmpty(person.Father))
            {
                query = query.Where(p => p.Father.StartsWith(person.Father));
            }

            if (!String.IsNullOrEmpty(person.Address))
            {
                query = query.Where(p => p.Address.Contains(person.Address));
            }

            if (!String.IsNullOrEmpty(person.Dob))
            {
                query = query.Where(p => p.Dob.Equals(person.Dob));
            }


            return query.OrderBy(m=>m.Name)
                        .Take(1000)
                        .AsEnumerable();
        }

        //private void AddFilter(ref IQueryable query, string data)
        //{
            
        //}
    }
}
