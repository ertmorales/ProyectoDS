using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data;
using System.Data.SqlClient;
using System.IO;

using Newtonsoft.Json;
namespace ApiSql.Models.tbl_empresa
{
    public class InsertData
    {
        private List<TableModel> listajson;

        public int insertData_empresa(string name)
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
                    SqlDataAdapter cmd = new SqlDataAdapter("select Id from dbo.empresa where Id = " + row.Id, connection);
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
                            Empresa = row.Empresa,
                            Nombre = row.Nombre,
                            Razon_Social = row.Razon_Social,
                            NIT = row.NIT,
                            Direccion = row.Direccion,
                            Telefono = row.Telefono,
                            Correo_Electronico = row.Correo_Electronico,
                            Pagina_Web = row.Pagina_Web
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
                        command.CommandText = "insert into dbo.empresa values (" +
                            "@Empresa," +
                            "@Nombre, " +
                            "@Razon_Social," +
                            "@NIT, " +
                            "@Direccion," +
                            "@Telefono, " +
                            "@Correo_Electronico," +
                            "@Pagina_Web " +
                            ")";
                        command.Parameters.Add("@Empresa", SqlDbType.Int);
                        command.Parameters.Add("@Nombre", SqlDbType.VarChar);
                        command.Parameters.Add("@Razon_Social", SqlDbType.VarChar);
                        command.Parameters.Add("@NIT", SqlDbType.VarChar);
                        command.Parameters.Add("@Direccion", SqlDbType.VarChar);
                        command.Parameters.Add("@Telefono", SqlDbType.VarChar);
                        command.Parameters.Add("@Correo_Electronico", SqlDbType.VarChar);
                        command.Parameters.Add("@Pagina_Web", SqlDbType.VarChar);

                        try
                        {
                            foreach (var item in objectDetailList)
                            {
                                command.Parameters["@Empresa"].Value = item.Empresa;
                                command.Parameters["@Nombre"].Value = item.Nombre;
                                command.Parameters["@Razon_Social"].Value = item.Razon_Social;
                                command.Parameters["@NIT"].Value = item.NIT;
                                command.Parameters["@Direccion"].Value = item.Direccion;
                                command.Parameters["@Telefono"].Value = item.Telefono;
                                command.Parameters["@Correo_Electronico"].Value = item.Correo_Electronico;
                                command.Parameters["@Pagina_Web"].Value = item.Pagina_Web;
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