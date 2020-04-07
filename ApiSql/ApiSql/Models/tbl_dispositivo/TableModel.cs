using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ApiSql.Models.tbl_dispositivo
{
    public class TableModel
    {
        public int Id { get; set; }
        public string Descripcion { get; set; }
        public string UDID { get; set; }
        public string UserName { get; set; }
    }
}