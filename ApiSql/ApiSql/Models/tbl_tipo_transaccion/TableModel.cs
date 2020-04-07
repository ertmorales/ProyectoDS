using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ApiSql.Models.tbl_tipo_transaccion
{
    public class TableModel
    {

        public int Id { get; set; }
        public int? Tipo_Transaccion { get; set; }
        public string Descripcion { get; set; }
        public string Tipo { get; set; }
    }
}