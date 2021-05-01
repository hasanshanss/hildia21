using System;
using System.Collections.Generic;

#nullable disable

namespace Hildia21.DAL.Entities
{
    public partial class Person
    {
        public int PeopleId { get; set; }
        public string Name { get; set; }
        public string Lastname { get; set; }
        public string Father { get; set; }
        public string Address { get; set; }
        public bool? IsRegional { get; set; }
        public string Dob { get; set; }
    }
}
