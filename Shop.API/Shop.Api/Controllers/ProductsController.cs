using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Shop.Api.Common;
using Shop.Api.DataAccess;

namespace Shop.Api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ProductsController : ControllerBase
    {
        private readonly ILogger<ProductsController> _logger;
        private readonly ShopContext _shopContext;

        public ProductsController(ILogger<ProductsController> logger, ShopContext shopContext)
        {
            _logger = logger;
            _shopContext = shopContext;
        }

        [HttpGet]
        public IEnumerable<ProductDTO> Get()
        {
            var result = _shopContext.Products
                .Where(_ => _.Color != null)
                .ToList()
                .Select(_ => _.Map());

            return result;
        }
    }
}
