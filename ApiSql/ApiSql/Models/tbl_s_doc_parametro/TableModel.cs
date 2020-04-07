using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ApiSql.Models.tbl_s_doc_parametro
{
    public class TableModel
    {

        public int Id { get; set; }
        public int? Tipo_Documento { get; set; }
        public string Serie_Documento { get; set; }
        public int? Empresa { get; set; }
        public int? Estacion_Trabajo { get; set; }
        public int? Parametro { get; set; }
    }
}