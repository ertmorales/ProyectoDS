using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ApiSql.Models
{
    public class Tables
    {
        public string[] listTables()
        {
            string[] tables ={
                "bodega",
                "clase_producto",
                "conexion",
                "control_sync",
                "cuenta_correntista",
                "cuenta_correntista_rel",
                "cuenta_cta",
                "cuenta_precio",
                "cuenta_tipo_precio",
                "dispositivo",
                "empresa",
                "error",
                "impresora",
                "inventario",
                "precio",
                "producto",
                "producto_u_m",
                "s_doc_parametro",
                "s_doc_t_car_abo",
                "s_doc_t_tra",
                "serie_documento",
                "serie_documento_user",
                "tipo_cargo_abono",
                "tipo_documento",
                "tipo_transaccion",
                "unidad_medida",
                "user_bodega",
                "usuario"
            };

            return tables;
        }
    }
}