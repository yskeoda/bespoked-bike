using System;
using System.Collections.Generic;

namespace bespoked_bike.Models
{
    public partial class Product
    {
        public Product()
        {
            Discount = new HashSet<Discount>();
            Sale = new HashSet<Sale>();
        }

        public int ProductId { get; set; }
        public string ProductName { get; set; }
        public string Manufacturer { get; set; }
        public string Style { get; set; }
        public decimal PurchasePrice { get; set; }
        public decimal SalePrice { get; set; }
        public int QtyOnHand { get; set; }
        public decimal CommissionPercentage { get; set; }

        public virtual ICollection<Discount> Discount { get; set; }
        public virtual ICollection<Sale> Sale { get; set; }
    }
}
