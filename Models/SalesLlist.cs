using System;

namespace bespoked_bike.Models
{
    public class SalesListRow
    {
        public string ProductName { get; set; }
        public string CustomerName { get; set; }
        public DateTime SalesDate { get; set; }
        public decimal Price { get; set; }
        public string SalesPersonName { get; set; }
        public decimal Commission { get; set; }
    }
}