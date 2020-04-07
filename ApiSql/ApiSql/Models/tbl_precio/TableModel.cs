using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ApiSql.Models.tbl_precio
{
    public class TableModel
    {

        public int Id { get; set; }
        public int? Precio { get; set; }
        public int? Bodega { get; set; }
        public int? Producto { get; set; }
        public int? Unidad_Medida { get; set; }
        public int? Tipo_Precio { get; set; }
        public int? Moneda { get; set; }
        public float? Precio_Unidad { get; set; }
    }
}