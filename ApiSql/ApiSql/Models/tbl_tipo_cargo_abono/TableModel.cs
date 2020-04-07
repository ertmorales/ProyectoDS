using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ApiSql.Models.tbl_tipo_cargo_abono
{
    public class TableModel
    {

        public int Id { get; set; }
        public int? Tipo_Cargo_Abono { get; set; }
        public string Descripcion { get; set; }
        public int? Cuenta_Corriente { get; set; }
    }
}