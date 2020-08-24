using System;
using System.Collections.Generic;

namespace bespoked_bike.Models
{
    public partial class SalesPerson
    {
        public SalesPerson()
        {
            InverseManagerNavigation = new HashSet<SalesPerson>();
            Sale = new HashSet<Sale>();
        }

        public int SalesPersonId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Address { get; set; }
        public string Phone { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime? TerminationDate { get; set; }
        public int? Manager { get; set; }

        public virtual SalesPerson ManagerNavigation { get; set; }
        public virtual ICollection<SalesPerson> InverseManagerNavigation { get; set; }
        public virtual ICollection<Sale> Sale { get; set; }
    }
}
