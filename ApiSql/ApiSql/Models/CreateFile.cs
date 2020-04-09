using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data;
using System.Data.SqlClient;
using Newtonsoft.Json;
using System.IO;
using System.Configuration;

namespace ApiSql.Models
{
    public class CreateFile
    {
        //Crea archivos
        public string createFiles(string tableName)
        {
            DataSet dataSet = null;
            //Conexion a SQL
            try {
                var connection = Connection.ConnectionSql.getConnection();
                connection.Open();

                SqlDataAdapter sqlDataAdapter = new SqlDataAdapter("select * from dbo." + tableName, connection);

                 dataSet = new DataSet();
                sqlDataAdapter.Fill(dataSet);

                connection.Close();

            }
            catch (Exception) {

                return "Error internal Server";
            }
            
            DateTime dateTime = DateTime.Now;
            string path = ConfigurationManager.AppSettings["PathFile"];
            string name = "tbl-"+ tableName + "-" + dateTime.ToString("yyyy-MM-dd-HH-mm") + ".json";

            string contentFile = JsonConvert.SerializeObject(dataSet.Tables[0]);

            if (contentFile.Length != 2)
            {
                try {
                    //Crear y escribir archivo
                    TextWriter textWriter = new StreamWriter(path + tableName +"/"+ name);
                    textWriter.Write(contentFile);
                    textWriter.Close();

                }
                catch (Exception) {
                    return "Error creating file";
                }
               
                return name;
            }
            else
            {
                return "No data available in table";
            }
        }
    }
}