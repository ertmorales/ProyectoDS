using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Data;
using System.Data.SqlClient;
using System.Configuration;
using Newtonsoft.Json;
using System.Text;
using System.IO;

namespace ApiSql.Controllers
{
    public class DataController : ApiController
    {
        //Extraer datos db
        [HttpGet]
        public string getData()
        {
            Models.Tables tables = new Models.Tables();
            string[] name = new string[28];

            try
            {
                int index = 0;
                foreach (string table in tables.listTables())
                {
                    Models.CreateFile file = new Models.CreateFile();

                    name[index] = file.createFiles(table);

                    index++;

                }

            }
            catch(Exception)
            {
                return "Ha ocurrido un error, intentelo mas tarde";
            }

            var nameFiles = new Models.TablesFileName()
                {
                    bodega = name[0],
                    clase_producto = name[1],
                    conexion = name[2],
                    control_sync = name[3],
                    cuenta_correntista = name[4],
                    cuenta_correntista_rel = name[5],
                    cuenta_cta = name[6],
                    cuenta_precio = name[7],
                    cuenta_tipo_precio = name[8],
                    dispositivo = name[9],
                    empresa = name[10],
                    error = name[11],
                    impresora = name[12],
                    inventario = name[13],
                    precio = name[14],
                    producto = name[15],
                    producto_u_m = name[16],
                    s_doc_parametro = name[17],
                    s_doc_t_car_abo = name[18],
                    s_doc_t_tra = name[19],
                    serie_documento = name[20],
                    serie_documento_user = name[21],
                    tipo_cargo_abono = name[22],
                    tipo_documento = name[23],
                    tipo_transaccion = name[24],
                    unidad_medida = name[25],
                    user_bodega = name[26],
                    usuario = name[27]
                };

                
                string contentFile = JsonConvert.SerializeObject(nameFiles);
                DateTime dateTime = DateTime.Now;
                string path = ConfigurationManager.AppSettings["PathFile"];
                string fileName = "loadFilesData"+ dateTime.ToString("yyyy-MM-dd-HH-mm") + ".json";

                TextWriter textWriter = new StreamWriter(path+fileName);
                textWriter.Write("["+contentFile+"]");
                textWriter.Close();

                //archivo de informacion con formato
                string fileName2 = "loadFilesDataFormatIdented" + dateTime.ToString("yyyy-MM-dd-HH-mm") + ".json";

                string contentFile2 = JsonConvert.SerializeObject(nameFiles,Formatting.Indented);
                TextWriter textWriter2 = new StreamWriter( path + fileName2);
                textWriter2.Write("[" + contentFile2 + "]");
                textWriter2.Close();


                return fileName;

           
        }

        private List<Models.TablesFileName> namesFilesList;
        //Inserta datos en la db
        [HttpPost]
        public string DataGet([FromBody] Models.FileName loadFileData)
        {
            //si no hay ningun nombre de archivos para insertar
            if (loadFileData == null)
            {
                return "No existe el archivo (1)";
            }

            string ruta = "C:/Users/rober/Desktop/test/";
            string text;

            try
            {
                TextReader reader = new StreamReader(ruta + loadFileData.name);
                text = reader.ReadLine();
                reader.Close();

            }
            catch (Exception)
            {
                return "No se han podidio leer los datos";
            }

            var tableJson = JsonConvert.DeserializeObject(text);

            var tableString = JsonConvert.SerializeObject(tableJson);

            namesFilesList = JsonConvert.DeserializeObject<List<Models.TablesFileName>>(text);

            Models.TablesFileName files = new Models.TablesFileName();

            foreach (var item in namesFilesList)
            {
                files.bodega = item.bodega;
                files.clase_producto = item.clase_producto;
                files.conexion = item.conexion;
                files.control_sync = item.control_sync;
                files.cuenta_correntista = item.cuenta_correntista;
                files.cuenta_correntista_rel = item.cuenta_correntista_rel;
                files.cuenta_cta = item.cuenta_cta;
                files.cuenta_precio = item.cuenta_precio;
                files.cuenta_tipo_precio = item.cuenta_tipo_precio;
                files.dispositivo = item.dispositivo;
                files.empresa = item.empresa;
                files.error = item.error;
                files.impresora = item.impresora;
                files.inventario = item.inventario;
                files.precio = item.precio;
                files.producto = item.producto;
                files.producto_u_m = item.producto_u_m;
                files.s_doc_parametro = item.s_doc_parametro;
                files.s_doc_t_car_abo = item.s_doc_t_car_abo;
                files.s_doc_t_tra = item.s_doc_t_tra;
                files.serie_documento = item.serie_documento;
                files.serie_documento_user = item.serie_documento_user;
                files.tipo_cargo_abono = item.tipo_cargo_abono;
                files.tipo_documento = item.tipo_documento;
                files.tipo_transaccion = item.tipo_transaccion;
                files.unidad_medida = item.unidad_medida;
                files.user_bodega = item.user_bodega;
                files.usuario = item.usuario;

            }

            string response = "";

            //Instancia de clases para insertar cada tabla
            /*0*/
            Models.tbl_bodega.InsertData insertBodega = new Models.tbl_bodega.InsertData();
            /*1*/
            Models.tbl_clase_producto.InsertData insertClase_producto = new Models.tbl_clase_producto.InsertData();
            /*2*/
            Models.tbl_conexion.InsertData insertConexion = new Models.tbl_conexion.InsertData();
            /*3*/
            Models.tbl_control_sync.InsertData insertControl_sync = new Models.tbl_control_sync.InsertData();
            /*4*/
            Models.tbl_cuenta_correntista.InsertData insertCuenta_correntista = new Models.tbl_cuenta_correntista.InsertData();
            /*5*/
            Models.tbl_cuenta_cta.InsertData insertCuenta_cta = new Models.tbl_cuenta_cta.InsertData();
            /*6*/
            Models.tbl_cuenta_correntista_rel.InsertData insertCuenta_correntista_rel = new Models.tbl_cuenta_correntista_rel.InsertData();
            /*7*/
            Models.tbl_cuenta_precio.InsertData insertCuenta_precio = new Models.tbl_cuenta_precio.InsertData();
            /*8*/
            Models.tbl_cuenta_tipo_precio.InsertData insertCuenta_tipo_precio = new Models.tbl_cuenta_tipo_precio.InsertData();
            /*9*/
            Models.tbl_dispositivo.InsertData insertDispositivo = new Models.tbl_dispositivo.InsertData();
            /*10*/
            Models.tbl_empresa.InsertData insertEmpresa = new Models.tbl_empresa.InsertData();
            /*11*/
            Models.tbl_error.InsertData insertError = new Models.tbl_error.InsertData();
            /*12*/
            Models.tbl_impresora.InsertData insertImpresora = new Models.tbl_impresora.InsertData();
            /*13*/
            Models.tbl_inventario.InsertData insertInventario = new Models.tbl_inventario.InsertData();
            /*14*/
            Models.tbl_precio.InsertData insertPrecio = new Models.tbl_precio.InsertData();
            /*15*/
            Models.tbl_producto.InsertData insertProducto = new Models.tbl_producto.InsertData();
            /*16*/
            Models.tbl_producto_u_m.InsertData insertproducto_u_m = new Models.tbl_producto_u_m.InsertData();
            /*17*/
            Models.tbl_s_doc_parametro.InsertData insertS_doc_parametro = new Models.tbl_s_doc_parametro.InsertData();
            /*18*/
            Models.tbl_s_doc_t_car_abo.InsertData insertS_doc_t_car_abo = new Models.tbl_s_doc_t_car_abo.InsertData();
            /*19*/
            Models.tbl_s_doc_t_tra.InsertData insertS_doc_t_tra = new Models.tbl_s_doc_t_tra.InsertData();
            /*20*/
            Models.tbl_serie_documento_user.InsertData insertSerie_docuemnto_user = new Models.tbl_serie_documento_user.InsertData();
            /*21*/
            Models.tbl_serie_documento.InsertData insertSerie_documento = new Models.tbl_serie_documento.InsertData();
            /*22*/
            Models.tbl_tipo_cargo_abono.InsertData insertTipo_cargo_abono = new Models.tbl_tipo_cargo_abono.InsertData();
            /*23*/
            Models.tbl_tipo_documento.InsertData insertTipo_documento = new Models.tbl_tipo_documento.InsertData();
            /*24*/
            Models.tbl_tipo_transaccion.InsertData insertTipo_transaccion = new Models.tbl_tipo_transaccion.InsertData();
            /*25*/
            Models.tbl_unidad_medida.InsertData insertUnidad_medida = new Models.tbl_unidad_medida.InsertData();
            /*26*/
            Models.tbl_user_bodega.InsertData insertUser_bodega = new Models.tbl_user_bodega.InsertData();
            /*27*/
            Models.tbl_usuario.InsertData insertUsuario = new Models.tbl_usuario.InsertData();

            //Lista de nombre de tablas
            Models.Tables tables = new Models.Tables();
            var nameTables = tables.listTables();

            //Lista de errores
            int[] statusInsert = new int[28];




            //verifica que tablas hay que procesar
            int index = 0;
            foreach (var items in nameTables)
            {
                switch (index)
                {
                    case 0:
                        statusInsert[0] = insertBodega.insertDataBodega(files.bodega);
                        break;
                    case 1:
                        statusInsert[1] = insertClase_producto.insertData_clase_producto(files.clase_producto);
                        break;
                    case 2:
                        statusInsert[2] = insertConexion.insertData_conexion(files.conexion);
                        break;
                    case 3:
                        statusInsert[3] = insertControl_sync.insertData_control_sync(files.control_sync);
                        break;
                    case 4:
                        statusInsert[4] = insertCuenta_correntista.insertData_cuenta_correntista(files.cuenta_correntista);
                        break;
                    case 5:
                        statusInsert[5] = insertCuenta_correntista_rel.insertData_cuenta_correntista_rel(files.cuenta_correntista_rel);
                        break;
                    case 6:
                        statusInsert[6] = insertCuenta_cta.insertData_cuenta_cta(files.cuenta_cta);
                        break;
                    case 7:
                        statusInsert[7] = insertCuenta_precio.insertData_cuenta_precio(files.cuenta_precio);
                        break;
                    case 8:
                        statusInsert[8] = insertCuenta_tipo_precio.insertData_cuenta_tipo_precio(files.cuenta_tipo_precio);
                        break;
                    case 9:
                        statusInsert[9] = insertDispositivo.insertData_dispositivo(files.dispositivo);
                        break;
                    case 10:
                        statusInsert[10] = insertEmpresa.insertData_empresa(files.empresa);
                        break;
                    case 11:
                        statusInsert[11] = insertError.insertData_error(files.error);
                        break;
                    case 12:
                        statusInsert[12] = insertImpresora.insertData_impresora(files.impresora);
                        break;
                    case 13:
                        statusInsert[13] = insertInventario.insertData_inventario(files.inventario);
                        break;
                    case 14:
                        statusInsert[14] = insertPrecio.insertData_precio(files.precio);
                        break;
                    case 15:
                        statusInsert[15] = insertProducto.insertData_producto(files.producto);
                        break;
                    case 16:
                        statusInsert[16] = insertproducto_u_m.insertData_producto_u_m(files.producto_u_m);
                        break;
                    case 17:
                        statusInsert[17] = insertSerie_documento.insertData_serie_documento(files.serie_documento);
                        break;
                    case 18:
                        statusInsert[18] = insertSerie_docuemnto_user.insertData_serie_documento_user(files.serie_documento_user);
                        break;
                    case 19:
                        statusInsert[19] = insertS_doc_parametro.insertData_s_doc_parametro(files.s_doc_parametro);
                        break;
                    case 20:
                        statusInsert[20] = insertS_doc_t_car_abo.insertData_s_doc_t_car_abo(files.s_doc_t_car_abo);
                        break;
                    case 21:
                        statusInsert[21] = insertS_doc_t_tra.insertData_s_doc_t_tra(files.s_doc_t_tra);
                        break;
                    case 22:
                        statusInsert[22] = insertTipo_cargo_abono.insertData_tipo_cargo_abono(files.tipo_cargo_abono);
                        break;
                    case 23:
                        statusInsert[23] = insertTipo_documento.insertData_tipo_documento(files.tipo_documento);
                        break;
                    case 24:
                        statusInsert[24] = insertTipo_transaccion.insertData_tipo_transaccion(files.tipo_transaccion);
                        break;
                    case 25:
                        statusInsert[25] = insertUnidad_medida.insertData_unidad_medida(files.unidad_medida);
                        break;
                    case 26:
                        statusInsert[26] = insertUser_bodega.insertData_user_bodega(files.user_bodega);
                        break;
                    case 27:
                        statusInsert[27] = insertUsuario.insertData_usuario(files.usuario);
                        break;
                }
                index++;
            }           

            //Lista de tablas que se insertaron
            List<Models.InfoInserts> info = new List<Models.InfoInserts>();

            int tablesIndex = 0; 

            //Verifica si se insertaron las tablas
            foreach(int status in statusInsert)
            {
                //Posibles resultados al insertar datos
                if (status == 404)
                {
                     response = "File not found";
                }
                
                if (status == 201)
                {
                    response = "Insert rows succesfully";
                }

                if (status == 500)
                {
                    response = "Error internal servidor";
                }
                

                //lista de errores
                var infoInserts = new Models.InfoInserts()
                {
                    Table = nameTables[tablesIndex],
                    Status = status,
                    Message = response
                };

                info.Add(infoInserts);

                tablesIndex++;
            }

            string contentFile = JsonConvert.SerializeObject(info,Formatting.Indented);
            DateTime dateTime = DateTime.Now;
            string path = "C:/Users/rober/Desktop/test/";
            string fileName = "InformInsertSQLServer" + dateTime.ToString("yyyy-MM-dd-HH-mm") + ".json";

            TextWriter textWriter = new StreamWriter(path + fileName);
            textWriter.Write(contentFile);
            textWriter.Close();

            //retorna informe de tablas insertadas
            //return JsonConvert.SerializeObject(info);
            return "Operacion Realizada Exitosamente";
        }
    }
}