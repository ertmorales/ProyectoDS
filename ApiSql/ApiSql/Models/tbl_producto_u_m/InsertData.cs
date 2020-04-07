using System;
using System.Collections.Generic;
using System.Linq;
using System.Data;
using System.Data.SqlClient;
using System.IO;
using Newtonsoft.Json;
using System.Web;

namespace ApiSql.Models.tbl_producto_u_m
{
    public class InsertData
    {
        private List<TableModel> listajson;

        public int insertData_producto_u_m(string name)
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
                    SqlDataAdapter cmd = new SqlDataAdapter("select Id from dbo.producto_u_m where Id = " + row.Id, connection);
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
                            Unidad_Medida = row.Unidad_Medida,
                            Producto_Id =  row.Producto_Id,
                            Id_Producto_Alterno = row.Id_Producto_Alterno
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
                        command.CommandText = "insert into dbo.producto_u_m values (" +
                            "@Producto," +
                            "@Unidad_Medida," +
                            "@Producto_Id, " +
                            "@Id_Producto_Alterno " +
                            ")";
                        command.Parameters.Add("@Producto", SqlDbType.Int);
                        command.Parameters.Add("@Unidad_Medida", SqlDbType.Int);
                        command.Parameters.Add("@Producto_Id", SqlDbType.VarChar);
                        command.Parameters.Add("@Id_Producto_Alterno", SqlDbType.VarChar);

                        try
                        {
                            foreach (var item in objectDetailList)
                            {
                                command.Parameters["@Producto"].Value = item.Producto;
                                command.Parameters["@Unidad_Medida"].Value = item.Unidad_Medida;
                                command.Parameters["@Producto_Id"].Value = item.Producto_Id;
                                command.Parameters["@Id_Producto_Alterno"].Value = item.Id_Producto_Alterno;
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