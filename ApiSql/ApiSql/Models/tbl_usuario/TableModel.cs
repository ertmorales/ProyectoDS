using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ApiSql.Models.tbl_usuario
{
    public class TableModel
    {

        public int Id { get; set; }
        public string UserName { get; set; }
        public string Pass_Key { get; set; }
        public string Name { get; set; }
        public int? Empresa { get; set; }
        public int? Estacion_Trabajo { get; set; }
        public string Email { get; set; }
        public int? Cuenta_Correntista { get; set; }
        public int? Aplication { get; set; }

    }
}