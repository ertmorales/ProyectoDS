using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ApiSql.Models.tbl_inventario
{
    public class TableModel
    {

        public int Id { get; set; }
        public int? Bodega { get; set; }
        public int? Producto { get; set; }
        public int? Unidad_Medida { get; set; }
        public float? Cantidad { get; set; }
    }
}