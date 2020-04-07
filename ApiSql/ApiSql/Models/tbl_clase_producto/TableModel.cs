using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ApiSql.Models.tbl_clase_producto
{
    public class TableModel
    {
        public int Id  {get; set;}
        public int? Clase_Producto { get; set; }
        public string Descripcion { get; set; }
        public int? Empresa { get; set; }

}
}