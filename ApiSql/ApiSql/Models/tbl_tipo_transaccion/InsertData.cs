using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data;
using System.Data.SqlClient;
using System.IO;
using Newtonsoft.Json;

namespace ApiSql.Models.tbl_tipo_transaccion
{
    public class InsertData
    {
        private List<TableModel> listajson;

        public int insertData_tipo_transaccion(string name)
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
                    SqlDataAdapter cmd = new SqlDataAdapter("select Id from dbo.tipo_transaccion where Id = " + row.Id, connection);
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
                            Tipo_Transaccion = row.Tipo_Transaccion,
                            Descripcion = row.Descripcion,
                            Tipo =  row.Tipo
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
                        command.CommandText = "insert into dbo.tipo_transaccion values (" +
                            "@Tipo_Transaccion," +
                            "@Descripcion," +
                            "@Tipo" +
                            ")";
                        command.Parameters.Add("@Tipo_Transaccion", SqlDbType.Int);
                        command.Parameters.Add("@Descripcion", SqlDbType.VarChar);
                        command.Parameters.Add("@Tipo", SqlDbType.VarChar);


                        try
                        {
                            foreach (var item in objectDetailList)
                            {
                                command.Parameters["@Tipo_Transaccion"].Value = item.Tipo_Transaccion;
                                command.Parameters["@Descripcion"].Value = item.Descripcion;
                                command.Parameters["@Tipo"].Value = item.Tipo;


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