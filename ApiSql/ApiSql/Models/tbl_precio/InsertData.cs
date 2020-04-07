using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data;
using System.Data.SqlClient;
using System.IO;
using Newtonsoft.Json;

namespace ApiSql.Models.tbl_precio
{
    public class InsertData
    {
        private List<TableModel> listajson;

        public int insertData_precio(string name)
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
                    SqlDataAdapter cmd = new SqlDataAdapter("select Id from dbo.precio where Id = " + row.Id, connection);
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
                            Precio = row.Precio,
                            Bodega = row.Bodega,
                            Producto = row.Producto,
                            Unidad_Medida = row.Unidad_Medida,
                            Tipo_Precio = row.Tipo_Precio,
                            Moneda = row.Moneda,
                            Precio_Unidad = row.Precio_Unidad
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
                        command.CommandText = "insert into dbo.precio values (" +
                            "@Precio," +
                            "@Bodega," +
                            "@Producto, " +
                            "@Unidad_Medida, " +
                            "@Tipo_Precio, " +
                            "@Moneda, " +
                            "@Precio_Unidad " +
                            ")";
                        command.Parameters.Add("@Precio", SqlDbType.Int);
                        command.Parameters.Add("@Bodega", SqlDbType.Int);
                        command.Parameters.Add("@Producto", SqlDbType.Int);
                        command.Parameters.Add("@Unidad_Medida", SqlDbType.Int);
                        command.Parameters.Add("@Tipo_Precio", SqlDbType.Int);
                        command.Parameters.Add("@Moneda", SqlDbType.Int);
                        command.Parameters.Add("@Precio_Unidad", SqlDbType.Float);

                        try
                        {
                            foreach (var item in objectDetailList)
                            {
                                command.Parameters["@Precio"].Value = item.Precio;
                                command.Parameters["@Bodega"].Value = item.Bodega;
                                command.Parameters["@Producto"].Value = item.Producto;
                                command.Parameters["@Unidad_Medida"].Value = item.Unidad_Medida;
                                command.Parameters["@Tipo_Precio"].Value = item.Tipo_Precio;
                                command.Parameters["@Moneda"].Value = item.Moneda;
                                command.Parameters["@Producto"].Value = item.Producto;
                                command.Parameters["@Precio_Unidad"].Value = item.Precio_Unidad;
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