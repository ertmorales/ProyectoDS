using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ApiSql.Models.tbl_cuenta_cta
{
    public class TableModel
    {
        public int Id { get; set; }
        public int? Cuenta_Correntista { get; set; }
        public string Cuenta_Cta { get; set; }
        public string Validar_Tipo_Precio { get; set; }
        public string Permitir_CxC { get; set; }
        public string Descripcion { get; set; }
        public string Direccion { get; set; }
    }
}