using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ApiSql.Models.tbl_control_sync
{
    public class TableModel
    {
        public int Id { get; set; }
        public string Fecha { get; set; }
        public string Descripcion { get; set; }
        public int? Sync { get; set; }
    }
}