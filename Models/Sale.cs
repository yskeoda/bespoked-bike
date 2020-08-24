using System;
using System.Collections.Generic;

namespace bespoked_bike.Models
{
    public partial class Sale
    {
        public int SaleId { get; set; }
        public int ProductId { get; set; }
        public int SalesPersonId { get; set; }
        public int CustomerId { get; set; }
        public DateTime SalesDate { get; set; }
        public decimal PriceSold { get; set; }
        public decimal CommissionAmount { get; set; }

        public virtual Customer Customer { get; set; }
        public virtual Product Product { get; set; }
        public virtual SalesPerson SalesPerson { get; set; }
    }
}
