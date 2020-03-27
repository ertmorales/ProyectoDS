"use strict"

const pool = require("../database/database");
const fs = require("fs");
const { generalDir, dirSaveFile } = require("../Global/routesfilesDirs")


async function main(req, res) {

    /*
    //Inserta archico bodega

    //recibe nombre del archivo
    const { name } = req.body;

    if (!name) {
        res.status(200).send({ message: "Falta nombre de archivo" })
    } else {

        //le archivo
        fs.readFile(generalDir + dirSaveFile.bodega + name, function(err, text) {
            if (err) {
                res.status(404).send({ message: "archivo no encontrado" });
            } else {
                //si el archivo existe, inserta en la db 

                const datos = JSON.parse(text);

                var values = [];

                datos.forEach(row => {
                    values.push(
                        [
                            row.Bodega,
                            row.Empresa,
                            row.Nombre
                        ]
                    )
                });

                pool.query(
                    "INSERT INTO pos.bodega" +
                    "(Bodega," +
                    "Empresa," +
                    "Nombre) " +
                    "VALUES ?", [values],
                    function(err, result) {
                        if (err) {
                            res.status(500).send({ message: "Error, intentelo mas tarde" });
                        } else {
                            res.status(200).send({ message: "Sincronizacion correcta" });
                        }
                    }
                );
            }
        });
    }

    */

    /*

    //Inserta archico clase_producto

    //recibe nombre del archivo
    const { name } = req.body;

    if (!name) {
        res.status(200).send({ message: "Falta nombre de archivo" })
    } else {

        //le archivo
        fs.readFile(generalDir + dirSaveFile.clase_producto + name, function(err, text) {
            if (err) {
                res.status(404).send({ message: "archivo no encontrado" });
            } else {
                //si el archivo existe, inserta en la db 

                const datos = JSON.parse(text);

                var values = [];

                datos.forEach(row => {
                    values.push(
                        [
                            row.Clase_Producto,
                            row.Descripcion,
                            row.Empresa
                        ]
                    )
                });

                pool.query(
                    "INSERT INTO pos.clase_producto" +
                    "(Clase_Producto," +
                    "Descripcion," +
                    "Empresa)" +
                    "VALUES ?", [values],
                    function(err, result) {
                        if (err) {
                            res.status(500).send({ message: "Error, intentelo mas tarde" });
                        } else {
                            res.status(200).send({ message: "Sincronizacion correcta" });
                        }
                    }
                );
            }
        });
    }
    */

    /*
    //Inserta archico conexion

    //recibe nombre del archivo
    const { name } = req.body;

    if (!name) {
        res.status(200).send({ message: "Falta nombre de archivo" })
    } else {

        //le archivo
        fs.readFile(generalDir + dirSaveFile.conexion + name, function(err, text) {
            if (err) {
                res.status(404).send({ message: "archivo no encontrado" });
            } else {

                //si el archivo existe, inserta en la db 

                const datos = JSON.parse(text);

                var values = [];

                datos.forEach(row => {
                    values.push(
                        [
                            row.URL_Core,
                            row.Base_Datos,
                            row.Key_Empresa
                        ]
                    )
                });

                pool.query(
                    "INSERT INTO pos.conexion" +
                    "(URL_Core," +
                    "Base_Datos," +
                    "Key_Empresa)" +
                    "VALUES ?", [values],
                    function(err, result) {
                        if (err) {
                            res.status(500).send({ message: "Error, intentelo mas tarde" });
                        } else {
                            res.status(200).send({ message: "Sincronizacion correcta" });
                        }
                    }
                );
            }
        });
    }
    */

    /*
    //Inserta archico control_sync

    //recibe nombre del archivo
    const { name } = req.body;

    if (!name) {
        res.status(200).send({ message: "Falta nombre de archivo" })
    } else {

        //le archivo
        fs.readFile(generalDir + dirSaveFile.control_sync + name, function(err, text) {
            if (err) {
                res.status(404).send({ message: "archivo no encontrado" });
            } else {
                //si el archivo existe, inserta en la db 

                const datos = JSON.parse(text);

                var values = [];

                datos.forEach(row => {
                    values.push(
                        [
                            row.Fecha,
                            row.Descripcion,
                            row.Sync
                        ]
                    )
                });

                pool.query(
                    "INSERT INTO pos.control_sync" +
                    "(Fecha," +
                    "Descripcion," +
                    "Sync)" +
                    "VALUES ?", [values],
                    function(err, result) {
                        if (err) {
                            res.status(500).send({ message: "Error, intentelo mas tarde" });
                        } else {
                            res.status(200).send({ message: "Sincronizacion correcta" });
                        }
                    }
                );
            }
        });
    }

    */
    /*
     //Inserta archico cuenta_correntista

     //recibe nombre del archivo
     const { name } = req.body;

     if (!name) {
         res.status(200).send({ message: "Falta nombre de archivo" })
     } else {

         //le archivo
         fs.readFile(generalDir + dirSaveFile.cuenta_correntista + name, function(err, text) {
             if (err) {
                 res.status(404).send({ message: "archivo no encontrado" });
             } else {
                 //si el archivo existe, inserta en la db 

                 const datos = JSON.parse(text);

                 var values = [];

                 datos.forEach(row => {
                     values.push(
                         [
                             row.Cuenta_Correntista,
                             row.ID_Cuenta,
                             row.Nombre,
                             row.NIT,
                             row.Direccion,
                             row.Telefono,
                             row.Celular,
                             row.Email,
                             row.Factura_NIT,
                             row.Factura_Nombre,
                             row.Factura_Direccion
                         ]
                     )
                 });

                 pool.query(
                     "INSERT INTO cuenta_correntista" +
                     "(Cuenta_Correntista," +
                     "ID_Cuenta," +
                     "Nombre," +
                     "NIT," +
                     "Direccion," +
                     "Telefono," +
                     "Celular," +
                     "Email," +
                     "Factura_NIT," +
                     "Factura_Nombre," +
                     "Factura_Direccion)" +
                     "VALUES ?", [values],
                     function(err, result) {
                         if (err) {
                             console.log(err)
                             res.status(500).send({ message: "Error, intentelo mas tarde" });
                         } else {
                             res.status(200).send({ message: "Sincronizacion correcta" });
                         }
                     }
                 );
             }
         });
     }
     */

    /*
    //Inserta archico cuenta_correntista_rel

    //recibe nombre del archivo
    const { name } = req.body;

    if (!name) {
        res.status(200).send({ message: "Falta nombre de archivo" })
    } else {

        //le archivo
        fs.readFile(generalDir + dirSaveFile.cuenta_correntista_rel + name, function(err, text) {
            if (err) {
                res.status(404).send({ message: "archivo no encontrado" });
            } else {
                //si el archivo existe, inserta en la db 

                const datos = JSON.parse(text);

                var values = [];

                datos.forEach(row => {
                    values.push(
                        [
                            row.Cuenta_Correntista,
                            row.F_Cuenta_Correntista,
                            row.F_Cuenta_Cta
                        ]
                    )
                });

                pool.query(
                    "INSERT INTO pos.cuenta_correntista_rel" +
                    "(Cuenta_Correntista," +
                    "F_Cuenta_Correntista," +
                    "F_Cuenta_Cta)" +
                    "VALUES ?", [values],
                    function(err, result) {
                        if (err) {
                            res.status(500).send({ message: "Error, intentelo mas tarde" });
                        } else {
                            res.status(200).send({ message: "Sincronizacion correcta" });
                        }
                    });
            }
        });
    }
    */
    /*
     //Inserta archico cuenta_cta

     //recibe nombre del archivo
     const { name } = req.body;

     if (!name) {
         res.status(200).send({ message: "Falta nombre de archivo" })
     } else {

         //le archivo
         fs.readFile(generalDir + dirSaveFile.cuenta_cta + name, function(err, text) {
             if (err) {
                 res.status(404).send({ message: "archivo no encontrado" });
             } else {
                 //si el archivo existe, inserta en la db 

                 const datos = JSON.parse(text);

                 var values = [];

                 datos.forEach(row => {
                     values.push(
                         [
                             row.Cuenta_Correntista,
                             row.Cuenta_Cta,
                             row.Validar_Tipo_Precio,
                             row.Permitir_CxC,
                             row.Descripcion,
                             row.Direccion
                         ]
                     )
                 });

                 pool.query(
                     "INSERT INTO pos.cuenta_cta" +
                     "(Cuenta_Correntista," +
                     "Cuenta_Cta," +
                     "Validar_Tipo_Precio," +
                     "Permitir_CxC," +
                     "Descripcion," +
                     "Direccion)" +
                     "VALUES ?", [values],
                     function(err, result) {
                         if (err) {
                             res.status(500).send({ message: "Error, intentelo mas tarde" });
                         } else {
                             res.status(200).send({ message: "Sincronizacion correcta" });
                         }
                     }
                 );
             }
         });
     }
     */
    /*

    //Inserta archico cuenta_precio

    //recibe nombre del archivo
    const { name } = req.body;

    if (!name) {
        res.status(200).send({ message: "Falta nombre de archivo" })
    } else {

        //le archivo
        fs.readFile(generalDir + dirSaveFile.cuenta_precio + name, function(err, text) {
            if (err) {
                res.status(404).send({ message: "archivo no encontrado" });
            } else {
                //si el archivo existe, inserta en la db 

                const datos = JSON.parse(text);

                var values = [];

                datos.forEach(row => {
                    values.push(
                        [
                            row.Cuenta_Correntista,
                            row.Cuenta_Cta,
                            row.Producto,
                            row.Unidad_Medida,
                            row.Tipo_Precio,
                            row.Precio_Unidad,
                            row.Descuento_Por
                        ]
                    )
                });

                pool.query(
                    "INSERT INTO pos.cuenta_precio" +
                    "(Cuenta_Correntista," +
                    "Cuenta_Cta," +
                    "Producto," +
                    "Unidad_Medida," +
                    "Tipo_Precio," +
                    "Precio_Unidad," +
                    "Descuento_Por)" +
                    "VALUES ?", [values],
                    function(err, result) {
                        if (err) {
                            res.status(500).send({ message: "Error, intentelo mas tarde" });
                        } else {
                            res.status(200).send({ message: "Sincronizacion correcta" });
                        }
                    }
                );
            }
        });
    }
    */

    /*
    //Inserta archico cuenta_tipo_precio

    //recibe nombre del archivo
    const { name } = req.body;

    if (!name) {
        res.status(200).send({ message: "Falta nombre de archivo" })
    } else {

        //le archivo
        fs.readFile(generalDir + dirSaveFile.cuenta_tipo_precio + name, function(err, text) {
            if (err) {
                res.status(404).send({ message: "archivo no encontrado" });
            } else {
                //si el archivo existe, inserta en la db 

                const datos = JSON.parse(text);

                var values = [];

                datos.forEach(row => {
                    values.push(
                        [
                            row.Cuenta_Correntista,
                            row.Cuenta_Cta,
                            row.Tipo_Precio
                        ]
                    )
                });

                pool.query(
                    "INSERT INTO pos.cuenta_tipo_precio" +
                    "(Cuenta_Correntista," +
                    "Cuenta_Cta," +
                    "Tipo_Precio)" +
                    "VALUES ?", [values],
                    function(err, result) {
                        if (err) {
                            res.status(500).send({ message: "Error, intentelo mas tarde" });
                        } else {
                            res.status(200).send({ message: "Sincronizacion correcta" });
                        }
                    }
                );
            }
        });
    }
    */
    /*
        //Inserta archico dispositivo

        //recibe nombre del archivo
        const { name } = req.body;

        if (!name) {
            res.status(200).send({ message: "Falta nombre de archivo" })
        } else {

            //le archivo
            fs.readFile(generalDir + dirSaveFile.dispositivo + name, function(err, text) {
                if (err) {
                    res.status(404).send({ message: "archivo no encontrado" });
                } else {
                    //si el archivo existe, inserta en la db 

                    const datos = JSON.parse(text);

                    var values = [];

                    datos.forEach(row => {
                        values.push(
                            [
                                row.Descripcion,
                                row.UDID,
                                row.UserName
                            ]
                        )
                    });

                    pool.query(
                        "INSERT INTO pos.dispositivo" +
                        "(Descripcion," +
                        "UDID," +
                        "UserName)" +
                        "VALUES ?", [values],
                        function(err, result) {
                            if (err) {
                                res.status(500).send({ message: "Error, intentelo mas tarde" });
                            } else {
                                res.status(200).send({ message: "Sincronizacion correcta" });
                            }
                        }
                    );
                }
            });
        }
        */
    /*

    //Inserta archico empresa

    //recibe nombre del archivo
    const { name } = req.body;

    if (!name) {
        res.status(200).send({ message: "Falta nombre de archivo" })
    } else {

        //le archivo
        fs.readFile(generalDir + dirSaveFile.empresa + name, function(err, text) {
            if (err) {
                res.status(404).send({ message: "archivo no encontrado" });
            } else {
                //si el archivo existe, inserta en la db 

                const datos = JSON.parse(text);

                var values = [];

                datos.forEach(row => {
                    values.push(
                        [
                            row.Empresa,
                            row.Nombre,
                            row.Razon_Social,
                            row.NIT,
                            row.Direccion,
                            row.Telefono,
                            row.Correo_Electronico,
                            row.Pagina_Web
                        ]
                    )
                });

                pool.query(
                    "INSERT INTO pos.empresa" +
                    "(Empresa," +
                    "Nombre," +
                    "Razon_Social," +
                    "NIT," +
                    "Direccion," +
                    "Telefono," +
                    "Correo_Electronico," +
                    "Pagina_Web)" +
                    "VALUES ?", [values],
                    function(err, result) {
                        if (err) {
                            res.status(500).send({ message: "Error, intentelo mas tarde" });
                        } else {
                            res.status(200).send({ message: "Sincronizacion correcta" });
                        }
                    }
                );
            }
        });
    }
    */
    /*
     //Inserta archico error

     //recibe nombre del archivo
     const { name } = req.body;

     if (!name) {
         res.status(200).send({ message: "Falta nombre de archivo" })
     } else {

         //le archivo
         fs.readFile(generalDir + dirSaveFile.error + name, function(err, text) {
             if (err) {
                 res.status(404).send({ message: "archivo no encontrado" });
             } else {
                 //si el archivo existe, inserta en la db 

                 const datos = JSON.parse(text);

                 var values = [];

                 datos.forEach(row => {
                     values.push(
                         [
                             row.Descripcion,
                             row.UserName,
                             row.Fecha_Hora
                         ]
                     )
                 });

                 pool.query(
                     "INSERT INTO pos.error" +
                     "(Descripcion," +
                     "UserName," +
                     "Fecha_Hora)" +
                     "VALUES ?", [values],
                     function(err, result) {
                         if (err) {
                             res.status(500).send({ message: "Error, intentelo mas tarde" });
                         } else {
                             res.status(200).send({ message: "Sincronizacion correcta" });
                         }
                     }
                 );
             }
         });
     }
     */
    /*
    //Inserta archico impresora

    //recibe nombre del archivo
    const { name } = req.body;

    if (!name) {
        res.status(200).send({ message: "Falta nombre de archivo" })
    } else {

        //le archivo
        fs.readFile(generalDir + dirSaveFile.impresora + name, function(err, text) {
            if (err) {
                res.status(404).send({ message: "archivo no encontrado" });
            } else {
                //si el archivo existe, inserta en la db 

                const datos = JSON.parse(text);

                var values = [];

                datos.forEach(row => {
                    values.push(
                        [
                            row.Nombre,
                            row.IP,
                            row.Puerto
                        ]
                    )
                });

                pool.query(
                    "INSERT INTO pos.impresora" +
                    "(Nombre," +
                    "IP," +
                    "Puerto)" +
                    "VALUES ?", [values],
                    function(err, result) {
                        if (err) {
                            res.status(500).send({ message: "Error, intentelo mas tarde" });
                        } else {
                            res.status(200).send({ message: "Sincronizacion correcta" });
                        }
                    }
                );
            }
        });
    }
    */

    /*
    //Inserta archico inventario

    //recibe nombre del archivo
    const { name } = req.body;

    if (!name) {
        res.status(200).send({ message: "Falta nombre de archivo" })
    } else {

        //le archivo
        fs.readFile(generalDir + dirSaveFile.inventario + name, function(err, text) {
            if (err) {
                res.status(404).send({ message: "archivo no encontrado" });
            } else {
                //si el archivo existe, inserta en la db 

                const datos = JSON.parse(text);

                var values = [];

                datos.forEach(row => {
                    values.push(
                        [
                            row.Bodega,
                            row.Producto,
                            row.Unidad_Medida,
                            row.Cantidad
                        ]
                    )
                });

                pool.query(
                    "INSERT INTO pos.inventario" +
                    "(Bodega," +
                    "Producto," +
                    "Unidad_Medida," +
                    "Cantidad)" +
                    "VALUES ?", [values],
                    function(err, result) {
                        if (err) {
                            res.status(500).send({ message: "Error, intentelo mas tarde" });
                        } else {
                            res.status(200).send({ message: "Sincronizacion correcta" });
                        }
                    }
                );
            }
        });
    }
    */

    /*
    //Inserta archico precio

    //recibe nombre del archivo
    const { name } = req.body;

    if (!name) {
        res.status(200).send({ message: "Falta nombre de archivo" })
    } else {

        //le archivo
        fs.readFile(generalDir + dirSaveFile.precio + name, function(err, text) {
            if (err) {
                res.status(404).send({ message: "archivo no encontrado" });
            } else {
                //si el archivo existe, inserta en la db 

                const datos = JSON.parse(text);

                var values = [];

                datos.forEach(row => {
                    values.push(
                        [
                            row.Precio,
                            row.Bodega,
                            row.Producto,
                            row.Unidad_Medida,
                            row.Tipo_Precio,
                            row.Moneda,
                            row.Precio_Unidad
                        ]
                    )
                });

                pool.query(
                    "INSERT INTO pos.precio" +
                    "(Precio," +
                    "Bodega," +
                    "Producto," +
                    "Unidad_Medida," +
                    "Tipo_Precio," +
                    "Moneda," +
                    "Precio_Unidad)" +
                    "VALUES ?", [values],
                    function(err, result) {
                        if (err) {
                            res.status(500).send({ message: "Error, intentelo mas tarde" });
                        } else {
                            res.status(200).send({ message: "Sincronizacion correcta" });
                        }
                    }
                );
            }
        });
    }
    */
    /*

     //Inserta archico producto

     //recibe nombre del archivo
     const { name } = req.body;

     if (!name) {
         res.status(200).send({ message: "Falta nombre de archivo" })
     } else {

         //le archivo
         fs.readFile(generalDir + dirSaveFile.producto + name, function(err, text) {
             if (err) {
                 res.status(404).send({ message: "archivo no encontrado" });
             } else {
                 //si el archivo existe, inserta en la db 

                 const datos = JSON.parse(text);

                 var values = [];

                 datos.forEach(row => {
                     values.push(
                         [
                             row.Producto,
                             row.Descripcion,
                             row.Clase_Producto,
                             row.Tipo_Producto
                         ]
                     )
                 });

                 pool.query(
                     "INSERT INTO pos.producto" +
                     "(Producto," +
                     "Descripcion," +
                     "Clase_Producto," +
                     "Tipo_Producto)" +
                     "VALUES ?", [values],
                     function(err, result) {
                         if (err) {
                             res.status(500).send({ message: "Error, intentelo mas tarde" });
                         } else {
                             res.status(200).send({ message: "Sincronizacion correcta" });
                         }
                     }
                 );
             }
         });
     }
     */
    /*
    //Inserta archico producto_u_m

    //recibe nombre del archivo
    const { name } = req.body;

    if (!name) {
        res.status(200).send({ message: "Falta nombre de archivo" })
    } else {

        //le archivo
        fs.readFile(generalDir + dirSaveFile.producto_u_m + name, function(err, text) {
            if (err) {
                res.status(404).send({ message: "archivo no encontrado" });
            } else {
                //si el archivo existe, inserta en la db 

                const datos = JSON.parse(text);

                var values = [];

                datos.forEach(row => {
                    values.push(
                        [
                            row.Producto,
                            row.Unidad_Medida,
                            row.Producto_Id,
                            row.Id_Producto_Alterno
                        ]
                    )
                });

                pool.query(
                    "INSERT INTO pos.producto_u_m" +
                    "(Producto," +
                    "Unidad_Medida," +
                    "Producto_Id," +
                    "Id_Producto_Alterno)" +
                    "VALUES ?", [values],
                    function(err, result) {
                        if (err) {
                            res.status(500).send({ message: "Error, intentelo mas tarde" });
                        } else {
                            res.status(200).send({ message: "Sincronizacion correcta" });
                        }
                    }
                );
            }
        });
    }
*/
    /*

        //Inserta archico s_doc_parametro

        //recibe nombre del archivo
        const { name } = req.body;

        if (!name) {
            res.status(200).send({ message: "Falta nombre de archivo" })
        } else {

            //le archivo
            fs.readFile(generalDir + dirSaveFile.s_doc_parametro + name, function(err, text) {
                if (err) {
                    res.status(404).send({ message: "archivo no encontrado" });
                } else {
                    //si el archivo existe, inserta en la db 

                    const datos = JSON.parse(text);

                    var values = [];

                    datos.forEach(row => {
                        values.push(
                            [
                                row.Tipo_Documento,
                                row.Serie_Documento,
                                row.Empresa,
                                row.Estacion_Trabajo,
                                row.Parametro
                            ]
                        )
                    });

                    pool.query(
                        "INSERT INTO pos.s_doc_parametro" +
                        "(Tipo_Documento," +
                        "Serie_Documento," +
                        "Empresa," +
                        "Estacion_Trabajo," +
                        "Parametro)" +
                        "VALUES ?", [values],
                        function(err, result) {
                            if (err) {
                                res.status(500).send({ message: "Error, intentelo mas tarde" });
                            } else {
                                res.status(200).send({ message: "Sincronizacion correcta" });
                            }
                        }
                    );
                }
            });
        }
    */

    /*
    //Inserta archico s_doc_t_car_abo

    //recibe nombre del archivo
    const { name } = req.body;

    if (!name) {
        res.status(200).send({ message: "Falta nombre de archivo" })
    } else {

        //le archivo
        fs.readFile(generalDir + dirSaveFile.s_doc_t_car_abo + name, function(err, text) {
            if (err) {
                res.status(404).send({ message: "archivo no encontrado" });
            } else {
                //si el archivo existe, inserta en la db 

                const datos = JSON.parse(text);

                var values = [];

                datos.forEach(row => {
                    values.push(
                        [
                            row.Tipo_Documento,
                            row.Serie_Documento,
                            row.Empresa,
                            row.Tipo_Cargo_Abono
                        ]
                    )
                });

                pool.query(
                    "INSERT INTO pos.s_doc_t_car_abo" +
                    "(Tipo_Documento," +
                    "Serie_Documento," +
                    "Empresa," +
                    "Tipo_Cargo_Abono)" +
                    "VALUES ?", [values],
                    function(err, result) {
                        if (err) {
                            res.status(500).send({ message: "Error, intentelo mas tarde" });
                        } else {
                            res.status(200).send({ message: "Sincronizacion correcta" });
                        }
                    }
                );
            }
        });
    }
    */
    /*

     //Inserta archico s_doc_t_tra

     //recibe nombre del archivo
     const { name } = req.body;

     if (!name) {
         res.status(200).send({ message: "Falta nombre de archivo" })
     } else {

         //le archivo
         fs.readFile(generalDir + dirSaveFile.s_doc_t_tra + name, function(err, text) {
             if (err) {
                 res.status(404).send({ message: "archivo no encontrado" });
             } else {
                 //si el archivo existe, inserta en la db 

                 const datos = JSON.parse(text);

                 var values = [];

                 datos.forEach(row => {
                     values.push(
                         [
                             row.Tipo_Documento,
                             row.Serie_Documento,
                             row.Empresa,
                             row.Tipo_Transaccion
                         ]
                     )
                 });

                 pool.query(
                     "INSERT INTO pos.s_doc_t_tra" +
                     "(Tipo_Documento," +
                     "Serie_Documento," +
                     "Empresa," +
                     "Tipo_Transaccion)" +
                     "VALUES ?", [values],
                     function(err, result) {
                         if (err) {
                             res.status(500).send({ message: "Error, intentelo mas tarde" });
                         } else {
                             res.status(200).send({ message: "Sincronizacion correcta" });
                         }
                     }
                 );
             }
         });
     }
     */

    /*
    //Inserta archico serie_documento

    //recibe nombre del archivo
    const { name } = req.body;

    if (!name) {
        res.status(200).send({ message: "Falta nombre de archivo" })
    } else {

        //le archivo
        fs.readFile(generalDir + dirSaveFile.serie_documento + name, function(err, text) {
            if (err) {
                res.status(404).send({ message: "archivo no encontrado" });
            } else {
                //si el archivo existe, inserta en la db 

                const datos = JSON.parse(text);

                var values = [];

                datos.forEach(row => {
                    values.push(
                        [
                            row.Tipo_Documento,
                            row.Serie_Documento,
                            row.Descripcion,
                            row.Empresa
                        ]
                    )
                });

                pool.query(
                    "INSERT INTO pos.serie_documento" +
                    "(Tipo_Documento," +
                    "Serie_Documento," +
                    "Descripcion," +
                    "Empresa)" +
                    "VALUES ?", [values],
                    function(err, result) {
                        if (err) {
                            res.status(500).send({ message: "Error, intentelo mas tarde" });
                        } else {
                            res.status(200).send({ message: "Sincronizacion correcta" });
                        }
                    }
                );
            }
        });
    }
    */

    /*
    //Inserta archico serie_documento_user

    //recibe nombre del archivo
    const { name } = req.body;

    if (!name) {
        res.status(200).send({ message: "Falta nombre de archivo" })
    } else {

        //le archivo
        fs.readFile(generalDir + dirSaveFile.serie_documento_user + name, function(err, text) {
            if (err) {
                res.status(404).send({ message: "archivo no encontrado" });
            } else {
                //si el archivo existe, inserta en la db 

                const datos = JSON.parse(text);

                var values = [];

                datos.forEach(row => {
                    values.push(
                        [
                            row.Tipo_Documento,
                            row.Serie_Documento,
                            row.Empresa,
                            row.UserName
                        ]
                    )
                });

                pool.query(
                    "INSERT INTO pos.serie_documento_user" +
                    "(Tipo_Documento," +
                    "Serie_Documento," +
                    "Empresa," +
                    "UserName)" +
                    "VALUES ?", [values],
                    function(err, result) {
                        if (err) {
                            res.status(500).send({ message: "Error, intentelo mas tarde" });
                        } else {
                            res.status(200).send({ message: "Sincronizacion correcta" });
                        }
                    }
                );
            }
        });
    }
    */
    /*
     //Inserta archico tipo_cargo_abono

     //recibe nombre del archivo
     const { name } = req.body;

     if (!name) {
         res.status(200).send({ message: "Falta nombre de archivo" })
     } else {

         //le archivo
         fs.readFile(generalDir + dirSaveFile.tipo_cargo_abono + name, function(err, text) {
             if (err) {
                 res.status(404).send({ message: "archivo no encontrado" });
             } else {
                 //si el archivo existe, inserta en la db 

                 const datos = JSON.parse(text);

                 var values = [];

                 datos.forEach(row => {
                     values.push(
                         [
                             row.Tipo_Cargo_Abono,
                             row.Descripcion,
                             row.Cuenta_Corriente
                         ]
                     )
                 });

                 pool.query(
                     "INSERT INTO pos.tipo_cargo_abono" +
                     "(Tipo_Cargo_Abono," +
                     "Descripcion," +
                     "Cuenta_Corriente)" +
                     "VALUES ?", [values],
                     function(err, result) {
                         if (err) {
                             res.status(500).send({ message: "Error, intentelo mas tarde" });
                         } else {
                             res.status(200).send({ message: "Sincronizacion correcta" });
                         }
                     }
                 );
             }
         });
     }
     */
    /*
    //Inserta archico tipo_documento

    //recibe nombre del archivo
    const { name } = req.body;

    if (!name) {
        res.status(200).send({ message: "Falta nombre de archivo" })
    } else {

        //le archivo
        fs.readFile(generalDir + dirSaveFile.tipo_documento + name, function(err, text) {
            if (err) {
                res.status(404).send({ message: "archivo no encontrado" });
            } else {
                //si el archivo existe, inserta en la db 

                const datos = JSON.parse(text);

                var values = [];

                datos.forEach(row => {
                    values.push(
                        [
                            row.Tipo_Documento,
                            row.Descripcion
                        ]
                    )
                });

                pool.query(
                    "INSERT INTO pos.tipo_documento" +
                    "(Tipo_Documento," +
                    "Descripcion)" +
                    "VALUES ?", [values],
                    function(err, result) {
                        if (err) {
                            res.status(500).send({ message: "Error, intentelo mas tarde" });
                        } else {
                            res.status(200).send({ message: "Sincronizacion correcta" });
                        }
                    }
                );
            }
        });
    }
*/
    /*
        //Inserta archico tipo_transaccion

        //recibe nombre del archivo
        const { name } = req.body;

        if (!name) {
            res.status(200).send({ message: "Falta nombre de archivo" })
        } else {

            //le archivo
            fs.readFile(generalDir + dirSaveFile.tipo_transaccion + name, function(err, text) {
                if (err) {
                    res.status(404).send({ message: "archivo no encontrado" });
                } else {
                    //si el archivo existe, inserta en la db 

                    const datos = JSON.parse(text);

                    var values = [];

                    datos.forEach(row => {
                        values.push(
                            [
                                row.Tipo_Transaccion,
                                row.Descripcion,
                                row.Tipo
                            ]
                        )
                    });

                    pool.query(
                        "INSERT INTO pos.tipo_transaccion" +
                        "(Tipo_Transaccion," +
                        "Descripcion," +
                        "Tipo)" +
                        "VALUES ?", [values],
                        function(err, result) {
                            if (err) {
                                res.status(500).send({ message: "Error, intentelo mas tarde" });
                            } else {
                                res.status(200).send({ message: "Sincronizacion correcta" });
                            }
                        }
                    );
                }
            });
        }
        */
    /*
    //Inserta archico unidad_medida

    //recibe nombre del archivo
    const { name } = req.body;

    if (!name) {
        res.status(200).send({ message: "Falta nombre de archivo" })
    } else {

        //le archivo
        fs.readFile(generalDir + dirSaveFile.unidad_medida + name, function(err, text) {
            if (err) {
                res.status(404).send({ message: "archivo no encontrado" });
            } else {
                //si el archivo existe, inserta en la db 

                const datos = JSON.parse(text);

                var values = [];

                datos.forEach(row => {
                    values.push(
                        [
                            row.Unidad_Medida,
                            row.Descripcion
                        ]
                    )
                });

                pool.query(
                    "INSERT INTO pos.unidad_medida" +
                    "(Unidad_Medida," +
                    "Descripcion)" +
                    "VALUES ?", [values],
                    function(err, result) {
                        if (err) {
                            res.status(500).send({ message: "Error, intentelo mas tarde" });
                        } else {
                            res.status(200).send({ message: "Sincronizacion correcta" });
                        }
                    }
                );
            }
        });
    }
    */
    /*
     //Inserta archico user_bodega

     //recibe nombre del archivo
     const { name } = req.body;

     if (!name) {
         res.status(200).send({ message: "Falta nombre de archivo" })
     } else {

         //le archivo
         fs.readFile(generalDir + dirSaveFile.user_bodega + name, function(err, text) {
             if (err) {
                 res.status(404).send({ message: "archivo no encontrado" });
             } else {
                 //si el archivo existe, inserta en la db 

                 const datos = JSON.parse(text);

                 var values = [];

                 datos.forEach(row => {
                     values.push(
                         [
                             row.UserName,
                             row.Bodega
                         ]
                     )
                 });

                 pool.query(
                     "INSERT INTO pos.user_bodega" +
                     "(UserName," +
                     "Bodega)" +
                     "VALUES ?", [values],
                     function(err, result) {
                         if (err) {
                             res.status(500).send({ message: "Error, intentelo mas tarde" });
                         } else {
                             res.status(200).send({ message: "Sincronizacion correcta" });
                         }
                     }
                 );
             }
         });
     }
     */

    //Inserta archico usuario

    //recibe nombre del archivo
    const { name } = req.body;

    if (!name) {
        res.status(200).send({ message: "Falta nombre de archivo" })
    } else {

        //le archivo
        fs.readFile(generalDir + dirSaveFile.usuario + name, function(err, text) {
            if (err) {
                res.status(404).send({ message: "archivo no encontrado" });
            } else {
                //si el archivo existe, inserta en la db 

                const datos = JSON.parse(text);

                var values = [];

                datos.forEach(row => {
                    values.push(
                        [
                            row.UserName,
                            row.Pass_Key,
                            row.Name,
                            row.Empresa,
                            row.Estacion_Trabajo,
                            row.Email,
                            row.Cuenta_Correntista,
                            row.Aplication
                        ]
                    )
                });

                pool.query(
                    "INSERT INTO pos.usuario" +
                    "(UserName," +
                    "Pass_Key," +
                    "Name," +
                    "Empresa," +
                    "Estacion_Trabajo," +
                    "Email," +
                    "Cuenta_Correntista," +
                    "Aplication)" +
                    "VALUES ?", [values],
                    function(err, result) {
                        if (err) {
                            res.status(500).send({ message: "Error, intentelo mas tarde" });
                        } else {
                            res.status(200).send({ message: "Sincronizacion correcta" });
                        }
                    }
                );
            }
        });
    }

}

module.exports = {
    main
}