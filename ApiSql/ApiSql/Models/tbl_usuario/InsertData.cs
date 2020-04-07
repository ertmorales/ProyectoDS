using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data;
using System.Data.SqlClient;
using System.IO;
using Newtonsoft.Json;

namespace ApiSql.Models.tbl_usuario
{
    public class InsertData
    {
        private List<TableModel> listajson;

        public int insertData_usuario(string name)
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
                    SqlDataAdapter cmd = new SqlDataAdapter("select Id from dbo.usuario where Id = " + row.Id, connection);
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
                            UserName = row.UserName,
                            Pass_Key = row.Pass_Key,
                            Name = row.Name,
                            Empresa = row.Empresa,
                            Estacion_Trabajo = row.Estacion_Trabajo,
                            Email = row.Email,
                            Cuenta_Correntista = row.Cuenta_Correntista,
                            Aplication = row.Aplication
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
                        command.CommandText = "insert into dbo.usuario values (" +
                            "@UserName," +
                            "@Pass_Key," +
                            "@Name," +
                            "@Empresa," +
                            "@Estacion_Trabajo," +
                            "@Email," +
                            "@Cuenta_Correntista," +
                            "@Aplication" +
                            ")";
                        command.Parameters.Add("@UserName", SqlDbType.VarChar);
                        command.Parameters.Add("@Pass_Key", SqlDbType.VarChar);
                        command.Parameters.Add("@Name", SqlDbType.VarChar);
                        command.Parameters.Add("@Empresa", SqlDbType.Int);
                        command.Parameters.Add("@Estacion_Trabajo", SqlDbType.Int);
                        command.Parameters.Add("@Email", SqlDbType.VarChar);
                        command.Parameters.Add("@Cuenta_Correntista", SqlDbType.Int);
                        command.Parameters.Add("@Aplication", SqlDbType.Int);

                        try
                        {
                            foreach (var item in objectDetailList)
                            {
                                command.Parameters["@UserName"].Value = item.UserName;
                                command.Parameters["@Pass_Key"].Value = item.Pass_Key;
                                command.Parameters["@Name"].Value = item.Name;
                                command.Parameters["@Empresa"].Value = item.Empresa;
                                command.Parameters["@Estacion_Trabajo"].Value = item.Estacion_Trabajo;
                                command.Parameters["@Email"].Value = item.Email;
                                command.Parameters["@Cuenta_Correntista"].Value = item.Cuenta_Correntista;
                                command.Parameters["@Aplication"].Value = item.Aplication;


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