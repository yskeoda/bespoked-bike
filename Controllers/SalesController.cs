using System.Collections.Generic;
using System.Threading.Tasks;
using bespoked_bike.Data;
using bespoked_bike.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Linq;

namespace bespoked_bike.Controllers
{
    public class SalesController : ControllerBase
    {
        private readonly BeSpokedBikesContext _context;

        public SalesController(BeSpokedBikesContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<SalesListRow>>> Get([FromQuery] SalesListQuery salesListQuery)
        {
            var salesListRowsQuery = _context.Sale.Select(s => new SalesListRow()
            {
                ProductName = s.Product.ProductName,
                CustomerName = string.Format("{0} {1}", s.Customer.FirstName, s.Customer.LastName),
                SalesDate = s.SalesDate,
                Price = s.PriceSold,
                SalesPersonName = string.Format("{0} {1}", s.SalesPerson.FirstName, s.SalesPerson.LastName),
                Commission = s.CommissionAmount
            });

            if (salesListQuery.BeginDate != null)
            {
                salesListRowsQuery.Where(s => s.SalesDate >= salesListQuery.BeginDate);
            }

            if (salesListQuery.EndDate != null)
            {

                salesListRowsQuery.Where(s => s.SalesDate <= salesListQuery.EndDate);
            }

            var salesListRow = await salesListRowsQuery.ToListAsync();

            if (salesListRow == null)
            {
                return NotFound();
            }

            return salesListRow;
        }
    }
}