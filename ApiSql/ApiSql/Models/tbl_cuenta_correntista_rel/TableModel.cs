using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ApiSql.Models.tbl_cuenta_correntista_rel
{
    public class TableModel
    {
        public int Id { get; set; }
        public int? Cuenta_Correntista { get; set; }
        public int? F_Cuenta_Correntista { get; set; }
        public string F_Cuenta_Cta { get; set; }
    }
}