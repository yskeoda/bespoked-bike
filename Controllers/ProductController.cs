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
            using (var db = new BeSpokedBikesContext())
            {
                return db.Product.Select(p => p).ToList();
            }
        }
    }
}