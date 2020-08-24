using System;
using System.Collections.Generic;

namespace bespoked_bike.Models
{
    public partial class Customer
    {
        public Customer()
        {
            Sale = new HashSet<Sale>();
        }

        public int CustomerId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Address { get; set; }
        public string Phone { get; set; }
        public DateTime StartDate { get; set; }

        public virtual ICollection<Sale> Sale { get; set; }
    }
}
