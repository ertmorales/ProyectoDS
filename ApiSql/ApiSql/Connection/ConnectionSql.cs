using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data;
using System.Data.SqlClient;
using System.Configuration;

namespace ApiSql.Connection
{
    public class ConnectionSql
    {
        //Retorna cadena de connexion para tenerlo disponible en todo el proyecto en vez de poner la cadena de conexion en web.config
        public static SqlConnection getConnection()
        {
            //return new SqlConnection("Data Source=.;Initial Catalog=pos;User ID=sa;Password=123");
            
            return new SqlConnection(ConfigurationManager.ConnectionStrings["pos_db"].ConnectionString);

        }
    }
}