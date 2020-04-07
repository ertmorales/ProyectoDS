using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ApiSql.Models.tbl_producto_u_m
{
    public class TableModel
    {

        public int Id { get; set; }
        public int? Producto { get; set; }
        public int? Unidad_Medida { get; set; }
        public string Producto_Id { get; set; }
        public string Id_Producto_Alterno { get; set; }
    }
}