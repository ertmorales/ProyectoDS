using System;
using System.Collections.Generic;
using System.Linq;
using System.Data;
using System.Data.SqlClient;
using System.IO;
using Newtonsoft.Json;
using System.Web;

namespace ApiSql.Models.tbl_serie_documento_user
{
    public class InsertData
    {
        private List<TableModel> listajson;

        public int insertData_serie_documento_user(string name)
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
                    SqlDataAdapter cmd = new SqlDataAdapter("select Id from dbo.serie_documento_user where Id = " + row.Id, connection);
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
                            Tipo_Documento = row.Tipo_Documento,
                            Serie_Documento = row.Serie_Documento,
                            Empresa = row.Empresa,
                            UserName =  row.UserName
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
                        command.CommandText = "insert into dbo.serie_documento_user values (" +
                            "@Tipo_Documento," +
                            "@Serie_Documento," +
                            "@Empresa, " +
                            "@UserName " +
                            ")";
                        command.Parameters.Add("@Tipo_Documento", SqlDbType.Int);
                        command.Parameters.Add("@Serie_Documento", SqlDbType.VarChar);
                        command.Parameters.Add("@Empresa", SqlDbType.Int);
                        command.Parameters.Add("@UserName", SqlDbType.VarChar);

                        try
                        {
                            foreach (var item in objectDetailList)
                            {
                                command.Parameters["@Tipo_Documento"].Value = item.Tipo_Documento;
                                command.Parameters["@Serie_Documento"].Value = item.Serie_Documento;
                                command.Parameters["@Empresa"].Value = item.Empresa;
                                command.Parameters["@UserName"].Value = item.UserName;

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