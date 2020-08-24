using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using bespoked_bike.Data;
using bespoked_bike.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace bespoked_bike.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly BeSpokedBikesContext _context;

        public ProductController(BeSpokedBikesContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Product>>> Get()
        {
            var products = await _context.Product.ToListAsync();

            if (products == null)
            {
                return NotFound();
            }

            return products;
        }
    }
}