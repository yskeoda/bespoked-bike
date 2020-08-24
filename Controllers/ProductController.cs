using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using bespoked_bike.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace bespoked_bike.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        [HttpGet]
        public IEnumerable<Product> Get()
        {
            var rng = new Random();
            return Enumerable.Range(1, 5).Select(index => new Product
            {
                ProductId = index,
                ProductName = "Product Name",
                QtyOnHand = rng.Next()
            })
            .ToArray();
        }
    }
}