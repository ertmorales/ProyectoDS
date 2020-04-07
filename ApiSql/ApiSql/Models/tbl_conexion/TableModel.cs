using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ApiSql.Models.tbl_conexion
{
    public class TableModel
    {
        public int Id { get; set; }
        public string URL_Core { get; set; }
        public string Base_Datos { get; set; }
        public string Key_Empresa { get; set; }
    }
}