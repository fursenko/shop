using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Shop.Api.DataAccess
{
    [Table("Product", Schema = "Production")]
    public class Product
    {
        [Column("ProductID")]
        public int Id { get; set; }
        
        public string Name { get; set; }

        public string Color { get; set; }

        [Column("ListPrice")]
        public string Price { get; set; }
    }
}
