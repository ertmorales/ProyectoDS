using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ApiSql.Models.tbl_cuenta_correntista
{
    public class TableModel
    {
        public int Id { get; set; }
        public int? Cuenta_Correntista { get; set; }
        public int? ID_Cuenta { get; set; }
        public string Nombre { get; set; }
        public string NIT { get; set; }
        public string Direccion { get; set; }
        public string Telefono { get; set; }
        public string Celular { get; set; }
        public string Email { get; set; }
        public string Factura_NIT { get; set; }
        public string Factura_Nombre { get; set; }
        public string Factura_Direccion { get; set; }
    }
}