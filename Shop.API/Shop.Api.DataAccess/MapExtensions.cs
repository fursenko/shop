using Shop.Api.Common;
using System;
using System.Collections.Generic;
using System.Text;

namespace Shop.Api.DataAccess
{
    public static class MapExtensions
    {
        public static ProductDTO Map(this Product product) 
        {
            return new ProductDTO()
            {
                Id = product.Id,
                Name = product.Name,
                Color = product.Color,
                Price = product.Price
            };
        }
    }
}
