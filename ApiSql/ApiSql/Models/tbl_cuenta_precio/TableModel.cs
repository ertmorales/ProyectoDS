using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ApiSql.Models.tbl_cuenta_precio
{
    public class TableModel
    {
        public int Id { get; set; }
        public int? Cuenta_Correntista { get; set; }
        public string Cuenta_Cta { get; set; }
        public int? Producto { get; set; }
        public int? Unidad_Medida { get; set; }
        public int? Tipo_Precio { get; set; }
        public float? Precio_Unidad {get; set;}
        public float? Descuento_Por { get; set; }
    }
}