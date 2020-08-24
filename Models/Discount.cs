using System;
using System.Collections.Generic;

namespace bespoked_bike.Models
{
    public partial class Discount
    {
        public int DiscountId { get; set; }
        public int ProductId { get; set; }
        public DateTime BeginDate { get; set; }
        public DateTime EndDate { get; set; }
        public decimal DiscountPercentage { get; set; }

        public virtual Product Product { get; set; }
    }
}
