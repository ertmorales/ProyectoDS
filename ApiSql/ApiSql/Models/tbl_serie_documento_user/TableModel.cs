using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ApiSql.Models.tbl_serie_documento_user
{
    public class TableModel
    {

        public int Id { get; set; }
        public int? Tipo_Documento { get; set; }
        public string Serie_Documento { get; set; }
        public int? Empresa { get; set; }
        public string UserName { get; set; }
    }
}