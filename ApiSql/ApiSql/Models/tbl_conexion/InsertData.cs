using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data;
using System.Data.SqlClient;
using System.IO;
using Newtonsoft.Json;

namespace ApiSql.Models.tbl_conexion
{
    public class InsertData
    {
        private List<TableModel> listajson;

        public int insertData_conexion(string name)
        {

            string ruta = "C:/Users/rober/Desktop/test/";
            string text;

            try
            {
                TextReader reader = new StreamReader(ruta + name);
                text = reader.ReadToEnd();
                reader.Close();

            }
            catch (Exception)
            {
                return 404;
            }

            var tableJson = JsonConvert.DeserializeObject(text);

            var tableString = JsonConvert.SerializeObject(tableJson);

            listajson = JsonConvert.DeserializeObject<List<TableModel>>(tableString);

            List<TableModel> objectDetailList = new List<TableModel>();

            using (var connection = Connection.ConnectionSql.getConnection())
            {
                connection.Open();

                //filtra registros por id para no dupilacar las transacciones
                foreach (var row in listajson)
                {
                    //verifica si el registro ya exxiste
                    SqlDataAdapter cmd = new SqlDataAdapter("select Id from dbo.conexion where Id = " + row.Id, connection);
                    DataSet dataSet = new DataSet();
                    cmd.Fill(dataSet);

                    string contentFile = JsonConvert.SerializeObject(dataSet.Tables[0]);

                    if (contentFile.Length != 2)
                    {
                        //si existe no pasa nada
                    }
                    else
                    {
                        var detail = new TableModel()
                        {
                            URL_Core = row.URL_Core,
                            Base_Datos = row.Base_Datos,
                            Key_Empresa = row.Key_Empresa
                        };

                        objectDetailList.Add(detail);
                    }
                }

                using (SqlTransaction transaction = connection.BeginTransaction())
                {
                    using (var command = new SqlCommand())
                    {
                        command.Connection = connection;
                        command.Transaction = transaction;
                        command.CommandType = CommandType.Text;
                        command.CommandText = "insert into dbo.conexion values (" +
                            "@URL_Core," +
                            "@Base_Datos, " +
                            "@Key_Empresa" +
                            ")";
                        command.Parameters.Add("@URL_Core", SqlDbType.VarChar);
                        command.Parameters.Add("@Base_Datos", SqlDbType.VarChar);
                        command.Parameters.Add("@Key_Empresa", SqlDbType.VarChar);

                        try
                        {
                            foreach (var item in objectDetailList)
                            {
                                command.Parameters["@URL_Core"].Value = item.URL_Core;
                                command.Parameters["@Base_Datos"].Value = item.Base_Datos;
                                command.Parameters["@Key_Empresa"].Value = item.Key_Empresa;
                                command.ExecuteNonQuery();
                            }

                            transaction.Commit();
                            return 201;

                        }
                        catch (Exception)
                        {
                            transaction.Rollback();
                            connection.Close();
                            return 500;
                        }
                    }
                }
            }
        }
    }
}