using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data;
using System.Data.SqlClient;
using System.IO;
using Newtonsoft.Json;

namespace ApiSql.Models.tbl_s_doc_t_car_abo
{
    public class InsertData
    {
        private List<TableModel> listajson;

        public int insertData_s_doc_t_car_abo(string name)
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
                    SqlDataAdapter cmd = new SqlDataAdapter("select Id from dbo.s_doc_t_car_abo where Id = " + row.Id, connection);
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
                           Empresa  = row.Empresa,
                           Tipo_Cargo_Abono = row.Tipo_Cargo_Abono
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
                        command.CommandText = "insert into dbo.s_doc_t_car_abo values (" +
                            "@Tipo_Documento," +
                            "@Serie_Documento," +
                            "@Empresa, " +
                            "@Tipo_Cargo_Abono" +
                            ")";
                        command.Parameters.Add("@Tipo_Documento", SqlDbType.Int);
                        command.Parameters.Add("@Serie_Documento", SqlDbType.VarChar);
                        command.Parameters.Add("@Empresa", SqlDbType.Int);
                        command.Parameters.Add("@Tipo_Cargo_Abono", SqlDbType.Int);

                        try
                        {
                            foreach (var item in objectDetailList)
                            {
                                command.Parameters["@Tipo_Documento"].Value = item.Tipo_Documento;
                                command.Parameters["@Serie_Documento"].Value = item.Serie_Documento;
                                command.Parameters["@Empresa"].Value = item.Empresa;
                                command.Parameters["@Tipo_Cargo_Abono"].Value = item.Tipo_Cargo_Abono;
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