using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data;
using System.Data.SqlClient;
using System.IO;
using Newtonsoft.Json;

namespace ApiSql.Models.tbl_producto
{
    public class InsertData
    {
        private List<TableModel> listajson;

        public int insertData_producto(string name)
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
                    SqlDataAdapter cmd = new SqlDataAdapter("select Id from dbo.producto where Id = " + row.Id, connection);
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
                           Producto = row.Producto,
                           Descripcion = row.Descripcion,
                           Clase_Producto = row.Clase_Producto,
                           Tipo_Producto = row.Tipo_Producto
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
                        command.CommandText = "insert into dbo.producto values (" +
                            "@Producto," +
                            "@Descripcion," +
                            "@Clase_Producto, " +
                            "@Tipo_Producto " +
                            ")";
                        command.Parameters.Add("@Producto", SqlDbType.Int);
                        command.Parameters.Add("@Descripcion", SqlDbType.VarChar);
                        command.Parameters.Add("@Clase_Producto", SqlDbType.Int);
                        command.Parameters.Add("@Tipo_Producto", SqlDbType.Int);

                        try
                        {
                            foreach (var item in objectDetailList)
                            {
                                command.Parameters["@Producto"].Value = item.Producto;
                                command.Parameters["@Descripcion"].Value = item.Descripcion;
                                command.Parameters["@Clase_Producto"].Value = item.Clase_Producto;
                                command.Parameters["@Tipo_Producto"].Value = item.Tipo_Producto;
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