using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ApiSql.Models.tbl_user_bodega
{
    public class TableModel
    {

        public int Id { get; set; }
        public string UserName { get; set; }
        public int? Bodega {get; set;}
}
}