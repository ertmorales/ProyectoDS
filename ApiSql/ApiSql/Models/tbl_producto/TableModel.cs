using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ApiSql.Models.tbl_producto
{
    public class TableModel
    {

        public int Id { get; set; }
        public int? Producto { get; set; }
        public string Descripcion { get; set; }
        public int? Clase_Producto { get; set; }
        public int? Tipo_Producto { get; set; }
    }
}