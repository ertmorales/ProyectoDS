using System;
using System.Collections.Generic;
using System.Linq;
using System.Data;
using System.Data.SqlClient;
using System.IO;
using Newtonsoft.Json;
using System.Web;

namespace ApiSql.Models.tbl_cuenta_tipo_precio
{
    public class InsertData
    {
        private List<TableModel> listajson;

        public int insertData_cuenta_tipo_precio(string name)
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
                    SqlDataAdapter cmd = new SqlDataAdapter("select Id from dbo.cuenta_tipo_precio where Id = " + row.Id, connection);
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
                            Cuenta_Cta = row.Cuenta_Cta,
                            Tipo_Precio = row.Tipo_Precio
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
                        command.CommandText = "insert into dbo.cuenta_tipo_precio values (" +
                            "@Cuenta_Correntista," +
                            "@Cuenta_Cta, " +
                            "@Tipo_Precio " +
                            ")";
                        command.Parameters.Add("@Cuenta_Correntista", SqlDbType.Int);
                        command.Parameters.Add("@Cuenta_Cta", SqlDbType.VarChar);
                        command.Parameters.Add("@Tipo_Precio", SqlDbType.Int);

                        try
                        {
                            foreach (var item in objectDetailList)
                            {
                                command.Parameters["@Cuenta_Correntista"].Value = item.Cuenta_Correntista;
                                command.Parameters["@Cuenta_Cta"].Value = item.Cuenta_Cta;
                                command.Parameters["@Tipo_Precio"].Value = item.Tipo_Precio;
                                
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
