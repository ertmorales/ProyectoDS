using System;
using System.Collections.Generic;
using System.Linq;
using System.Data;
using System.Data.SqlClient;
using System.IO;
using Newtonsoft.Json;
using System.Web;

namespace ApiSql.Models.tbl_cuenta_correntista
{
    public class InsertData
    {
        private List<TableModel> listajson;

        public int insertData_cuenta_correntista(string name)
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
                    SqlDataAdapter cmd = new SqlDataAdapter("select Id from dbo.cuenta_correntista where Id = " + row.Id, connection);
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
                            Cuenta_Correntista = row.Cuenta_Correntista,
                            ID_Cuenta = row.ID_Cuenta,
                            Nombre = row.Nombre,
                            NIT = row.NIT,
                            Direccion = row.Direccion,
                            Telefono = row.Telefono,
                            Celular = row.Celular,
                            Email = row.Email,
                            Factura_NIT = row.Factura_NIT,
                            Factura_Nombre = row.Factura_Nombre,
                            Factura_Direccion = row.Factura_Direccion
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
                        command.CommandText = "insert into dbo.cuenta_correntista values (" +
                            "@Cuenta_Correntista," +
                            "@ID_Cuenta, " +
                            "@Nombre," +
                            "@NIT," +
                            "@Direccion," +
                            "@Telefono," +
                            "@Celular," +
                            "@Email," +
                            "@Factura_NIT," +
                            "@Factura_Nombre," +
                            "@Factura_Direccion" +
                            ")";
                        command.Parameters.Add("@Cuenta_Correntista", SqlDbType.Int);
                        command.Parameters.Add("@ID_Cuenta", SqlDbType.Int);
                        command.Parameters.Add("@Nombre", SqlDbType.VarChar);
                        command.Parameters.Add("@NIT", SqlDbType.VarChar);
                        command.Parameters.Add("@Direccion", SqlDbType.VarChar);
                        command.Parameters.Add("@Telefono", SqlDbType.VarChar);
                        command.Parameters.Add("@Celular", SqlDbType.VarChar);
                        command.Parameters.Add("@Email", SqlDbType.VarChar);
                        command.Parameters.Add("@Factura_NIT", SqlDbType.VarChar);
                        command.Parameters.Add("@Factura_Nombre", SqlDbType.VarChar);
                        command.Parameters.Add("@Factura_Direccion", SqlDbType.VarChar);

                        try
                        {
                            foreach (var item in objectDetailList)
                            {
                                command.Parameters["@Cuenta_Correntista"].Value = item.Cuenta_Correntista;
                                command.Parameters["@ID_Cuenta"].Value = item.ID_Cuenta;
                                command.Parameters["@Nombre"].Value = item.Nombre;
                                command.Parameters["@NIT"].Value = item.NIT;
                                command.Parameters["@Direccion"].Value = item.Direccion;
                                command.Parameters["@Telefono"].Value = item.Telefono;
                                command.Parameters["@Celular"].Value = item.Celular;
                                command.Parameters["@Email"].Value = item.Email;
                                command.Parameters["@Factura_NIT"].Value = item.Factura_NIT;
                                command.Parameters["@Factura_Nombre"].Value = item.Factura_Nombre;
                                command.Parameters["@Factura_Direccion"].Value = item.Factura_Direccion;
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