using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ApiSql.Models.tbl_bodega
{
    public class TableModel
    {
        public int Id { get; set; }
        public int? Bodega { get; set; }
        public int? Empresa { get; set; }
        public string Nombre { get; set; }
    }
}