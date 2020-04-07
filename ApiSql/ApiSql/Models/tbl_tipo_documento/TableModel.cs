using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ApiSql.Models.tbl_tipo_documento
{
    public class TableModel
    {

        public int Id { get; set; }
        public int? Tipo_Documento { get; set; }
        public string Descripcion { get; set; }
    }
}