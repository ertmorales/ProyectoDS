using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ApiSql.Models.tbl_empresa
{
    public class TableModel
    {

        public int Id { get; set; }
        public int? Empresa { get; set; }
        public string Nombre { get; set; }
        public string Razon_Social { get; set; }
        public string NIT { get; set; }
        public string Direccion { get; set; }
        public string Telefono { get; set; }
        public string Correo_Electronico { get; set; }
        public string Pagina_Web { get; set; }
    }
}