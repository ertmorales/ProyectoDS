"use strict"

const pool = require("../database/database");
const fs = require("fs");
const tables = require("../Global/TablesName")
const dateNow = require("../services/dateNow");
const { generalDir, dirSaveFile } = require("../Global/routesfilesDirs")

const insert_bodega = require("../InsertFunctions/insert_bodega")
const insert_clase_producto = require("../InsertFunctions/insert_clase_producto");
const insert_conexion = require("../InsertFunctions/insert_conexion");
const insert_control_sync = require("../InsertFunctions/insert_control_sync");
const insert_cuenta_correntista = require("../InsertFunctions/insert_cuenta_correntista");
const insert_cuenta_correntista_rel = require("../InsertFunctions/insert_cuenta_correntista_rel");
const insert_cuenta_cta = require("../InsertFunctions/insert_cuenta_cta");
const insert_cuenta_precio = require("../InsertFunctions/insert_cuenta_precio");
const insert_cuenta_tipo_precio = require("../InsertFunctions/insert_cuenta_tipo_precio");
const insert_dispositivo = require("../InsertFunctions/insert_dispositivo");
const insert_empresa = require("../InsertFunctions/insert_empresa");
const insert_error = require("../InsertFunctions/insert_error");
const insert_impresora = require("../InsertFunctions/insert_impresora");
const insert_inventario = require("../InsertFunctions/insert_inventario");
const insert_precio = require("../InsertFunctions/insert_precio");
const insert_producto = require("../InsertFunctions/insert_producto");
const insert_producto_u_m = require("../InsertFunctions/insert_producto_u_m");
const insert_s_doc_parametro = require("../InsertFunctions/insert_s_doc_parametro");
const insert_s_doc_t_car_abo = require("../InsertFunctions/insert_s_doc_t_car_abo");
const insert_s_doc_t_tra = require("../InsertFunctions/insert_s_doc_t_tra");
const insert_serie_documento = require("../InsertFunctions/insert_serie_documento");
const insert_serie_documento_user = require("../InsertFunctions/insert_serie_documento_user");
const insert_tipo_cargo_abono = require("../InsertFunctions/insert_tipo_cargo_abono");
const insrt_tipo_documento = require("../InsertFunctions/insrt_tipo_documento");
const insert_tipo_transaccion = require("../InsertFunctions/insert_tipo_transaccion");
const insert_unidad_medida = require("../InsertFunctions/insert_unidad_medida");
const insert_user_bodega = require("../InsertFunctions/insert_user_bodega");
const insert_usuario = require("../InsertFunctions/insert_usuario");

async function main(req, res) {

    const { name } = req.body;

    if (!name) {
        res.status(404).send({ message: "No existe el archivo(1)" })
    } else {

        fs.readFile(generalDir + name, async function(err, text) {
            if (err) {
                res.status("Error al leer el archivo")
            } else {

                const nameFiles = JSON.parse(text);

                var statusInsert = [];

                /**0 */
                await insert_bodega(nameFiles[0].bodega, async function(resolve) {
                    if (resolve) {
                        statusInsert.push(resolve);
                        /**1 */
                        await insert_clase_producto(nameFiles[0].clase_producto, async function(resolve) {
                            if (resolve) {
                                statusInsert.push(resolve);
                                /**2*/
                                await insert_conexion(nameFiles[0].conexion, async function(resolve) {
                                    if (resolve) {
                                        statusInsert.push(resolve);
                                        /**3 */
                                        await insert_control_sync(nameFiles[0].control_sync, async function(resolve) {
                                            if (resolve) {
                                                statusInsert.push(resolve);
                                                /**4 */
                                                await insert_cuenta_correntista(nameFiles[0].cuenta_correntista, async function(resolve) {
                                                    if (resolve) {
                                                        statusInsert.push(resolve);
                                                        /**5 */
                                                        await insert_cuenta_correntista_rel(nameFiles[0].cuenta_correntista_rel, async function(resolve) {
                                                            if (resolve) {
                                                                statusInsert.push(resolve);
                                                                /**6 */
                                                                await insert_cuenta_cta(nameFiles[0].cuenta_cta, async function(resolve) {
                                                                    if (resolve) {
                                                                        statusInsert.push(resolve);
                                                                        /**7 */
                                                                        await insert_cuenta_precio(nameFiles[0].cuenta_precio, async function(resolve) {
                                                                            if (resolve) {
                                                                                statusInsert.push(resolve);
                                                                                /**8 */
                                                                                await insert_cuenta_tipo_precio(nameFiles[0].cuenta_tipo_precio, async function(resolve) {
                                                                                    if (resolve) {
                                                                                        statusInsert.push(resolve);
                                                                                        /**9 */
                                                                                        await insert_dispositivo(nameFiles[0].dispositivo, async function(resolve) {
                                                                                            if (resolve) {
                                                                                                statusInsert.push(resolve);
                                                                                                /**10 */
                                                                                                await insert_empresa(nameFiles[0].empresa, async function(resolve) {
                                                                                                    if (resolve) {
                                                                                                        statusInsert.push(resolve);
                                                                                                        /**11 */
                                                                                                        await insert_error(nameFiles[0].error, async function(resolve) {
                                                                                                            if (resolve) {
                                                                                                                statusInsert.push(resolve);
                                                                                                                /**12 */
                                                                                                                await insert_impresora(nameFiles[0].impresora, async function(resolve) {
                                                                                                                    if (resolve) {
                                                                                                                        statusInsert.push(resolve);
                                                                                                                        /**13 */
                                                                                                                        await insert_inventario(nameFiles[0].inventario, async function(resolve) {
                                                                                                                            if (resolve) {
                                                                                                                                statusInsert.push(resolve);
                                                                                                                                /**14 */
                                                                                                                                await insert_precio(nameFiles[0].precio, async function(resolve) {
                                                                                                                                    if (resolve) {
                                                                                                                                        statusInsert.push(resolve);
                                                                                                                                        /**15 */
                                                                                                                                        await insert_producto(nameFiles[0].producto, async function(resolve) {
                                                                                                                                            if (resolve) {
                                                                                                                                                statusInsert.push(resolve);
                                                                                                                                                /**16 */
                                                                                                                                                await insert_producto_u_m(nameFiles[0].producto_u_m, async function(resolve) {
                                                                                                                                                    if (resolve) {
                                                                                                                                                        statusInsert.push(resolve);
                                                                                                                                                        /**17 */
                                                                                                                                                        await insert_s_doc_parametro(nameFiles[0].s_doc_parametro, async function(resolve) {
                                                                                                                                                            if (resolve) {
                                                                                                                                                                statusInsert.push(resolve);
                                                                                                                                                                await insert_s_doc_t_car_abo(nameFiles[0].s_doc_t_car_abo, async function(resolve) {
                                                                                                                                                                    if (resolve) {
                                                                                                                                                                        statusInsert.push(resolve);
                                                                                                                                                                        await insert_s_doc_t_tra(nameFiles[0].s_doc_t_tra, async function(resolve) {
                                                                                                                                                                            if (resolve) {
                                                                                                                                                                                statusInsert.push(resolve);
                                                                                                                                                                                await insert_serie_documento(nameFiles[0].serie_documento, async function(resolve) {
                                                                                                                                                                                    if (resolve) {
                                                                                                                                                                                        statusInsert.push(resolve);
                                                                                                                                                                                        await insert_serie_documento_user(nameFiles[0].serie_documento_user, async function(resolve) {
                                                                                                                                                                                            if (resolve) {
                                                                                                                                                                                                statusInsert.push(resolve);
                                                                                                                                                                                                await insert_tipo_cargo_abono(nameFiles[0].tipo_cargo_abono, async function(resolve) {
                                                                                                                                                                                                    if (resolve) {
                                                                                                                                                                                                        statusInsert.push(resolve);
                                                                                                                                                                                                        await insrt_tipo_documento(nameFiles[0].tipo_documento, async function(resolve) {
                                                                                                                                                                                                            if (resolve) {
                                                                                                                                                                                                                statusInsert.push(resolve);
                                                                                                                                                                                                                await insert_tipo_transaccion(nameFiles[0].tipo_transaccion, async function(resolve) {
                                                                                                                                                                                                                    if (resolve) {
                                                                                                                                                                                                                        statusInsert.push(resolve);
                                                                                                                                                                                                                        await insert_unidad_medida(nameFiles[0].unidad_medida, async function(resolve) {
                                                                                                                                                                                                                            if (resolve) {
                                                                                                                                                                                                                                statusInsert.push(resolve);
                                                                                                                                                                                                                                await insert_user_bodega(nameFiles[0].user_bodega, async function(resolve) {
                                                                                                                                                                                                                                    if (resolve) {
                                                                                                                                                                                                                                        statusInsert.push(resolve);
                                                                                                                                                                                                                                        await insert_usuario(nameFiles[0].usuario, async function(resolve) {
                                                                                                                                                                                                                                            if (resolve) {
                                                                                                                                                                                                                                                statusInsert.push(resolve);

                                                                                                                                                                                                                                                var _Message = [];
                                                                                                                                                                                                                                                var _Status = [];

                                                                                                                                                                                                                                                statusInsert.forEach(status => {

                                                                                                                                                                                                                                                    if (status === 1 || status === 2) {
                                                                                                                                                                                                                                                        _Message.push("File not found");
                                                                                                                                                                                                                                                        _Status.push(404);
                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                    if (status === 3 || status == 4) {
                                                                                                                                                                                                                                                        _Message.push("Error internal server");
                                                                                                                                                                                                                                                        _Status.push(500);
                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                    if (status === 201) {
                                                                                                                                                                                                                                                        _Message.push("Insert rows succesfully");
                                                                                                                                                                                                                                                        _Status.push(201);
                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                });

                                                                                                                                                                                                                                                var ContentFile = [];

                                                                                                                                                                                                                                                var indexTables = 0;
                                                                                                                                                                                                                                                tables.forEach(table => {
                                                                                                                                                                                                                                                    ContentFile.push({
                                                                                                                                                                                                                                                        Table: table,
                                                                                                                                                                                                                                                        Status: _Status[indexTables],
                                                                                                                                                                                                                                                        Message: _Message[indexTables]
                                                                                                                                                                                                                                                    })
                                                                                                                                                                                                                                                    indexTables++
                                                                                                                                                                                                                                                });

                                                                                                                                                                                                                                                let _dateNow = dateNow();
                                                                                                                                                                                                                                                let name = "InformInsertMariaDB" + _dateNow;
                                                                                                                                                                                                                                                let text = JSON.stringify(ContentFile);

                                                                                                                                                                                                                                                fs.writeFile(generalDir + name + ".json", text, function(err) {
                                                                                                                                                                                                                                                    if (err) {
                                                                                                                                                                                                                                                        console.log("Error al ceraer informe");
                                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                                        console.log(name + ".json");
                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                });

                                                                                                                                                                                                                                                res.status(201).send({ message: "Operacion realizada correctamente" });

                                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                                res.status(500).send({ message: "La operacion no pudo realizarse" });
                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                        });
                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                        res.status(500).send({ message: "La operacion no pudo realizarse" });
                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                });
                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                res.status(500).send({ message: "La operacion no pudo realizarse" });
                                                                                                                                                                                                                            }
                                                                                                                                                                                                                        });
                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                        res.status(500).send({ message: "La operacion no pudo realizarse" });
                                                                                                                                                                                                                    }
                                                                                                                                                                                                                });
                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                res.status(500).send({ message: "La operacion no pudo realizarse" });
                                                                                                                                                                                                            }
                                                                                                                                                                                                        });
                                                                                                                                                                                                    } else {
                                                                                                                                                                                                        res.status(500).send({ message: "La operacion no pudo realizarse" });
                                                                                                                                                                                                    }
                                                                                                                                                                                                });
                                                                                                                                                                                            } else {
                                                                                                                                                                                                res.status(500).send({ message: "La operacion no pudo realizarse" });
                                                                                                                                                                                            }
                                                                                                                                                                                        });
                                                                                                                                                                                    } else {
                                                                                                                                                                                        res.status(500).send({ message: "La operacion no pudo realizarse" });
                                                                                                                                                                                    }
                                                                                                                                                                                });
                                                                                                                                                                            } else {
                                                                                                                                                                                res.status(500).send({ message: "La operacion no pudo realizarse" });
                                                                                                                                                                            }
                                                                                                                                                                        });
                                                                                                                                                                    } else {
                                                                                                                                                                        res.status(500).send({ message: "La operacion no pudo realizarse" });
                                                                                                                                                                    }
                                                                                                                                                                });
                                                                                                                                                            } else {
                                                                                                                                                                res.status(500).send({ message: "La operacion no pudo realizarse" });
                                                                                                                                                            }
                                                                                                                                                        });
                                                                                                                                                    } else {
                                                                                                                                                        res.status(500).send({ message: "La operacion no pudo realizarse" });
                                                                                                                                                    }
                                                                                                                                                });
                                                                                                                                            } else {
                                                                                                                                                res.status(500).send({ message: "La operacion no pudo realizarse" });
                                                                                                                                            }
                                                                                                                                        });
                                                                                                                                    } else {
                                                                                                                                        res.status(500).send({ message: "La operacion no pudo realizarse" });
                                                                                                                                    }
                                                                                                                                });
                                                                                                                            } else {
                                                                                                                                res.status(500).send({ message: "La operacion no pudo realizarse" });
                                                                                                                            }
                                                                                                                        });
                                                                                                                    } else {
                                                                                                                        res.status(500).send({ message: "La operacion no pudo realizarse" });
                                                                                                                    }
                                                                                                                });
                                                                                                            } else {
                                                                                                                res.status(500).send({ message: "La operacion no pudo realizarse" });
                                                                                                            }
                                                                                                        });
                                                                                                    } else {
                                                                                                        res.status(500).send({ message: "La operacion no pudo realizarse" });
                                                                                                    }
                                                                                                });
                                                                                            } else {
                                                                                                res.status(500).send({ message: "La operacion no pudo realizarse" });
                                                                                            }
                                                                                        });
                                                                                    } else {
                                                                                        res.status(500).send({ message: "La operacion no pudo realizarse" });
                                                                                    }
                                                                                });

                                                                            } else {
                                                                                res.status(500).send({ message: "La operacion no pudo realizarse" });
                                                                            }
                                                                        });

                                                                    } else {
                                                                        res.status(500).send({ message: "La operacion no pudo realizarse" });
                                                                    }
                                                                });
                                                            } else {
                                                                res.status(500).send({ message: "La operacion no pudo realizarse" });
                                                            }
                                                        });
                                                    } else {
                                                        res.status(500).send({ message: "La operacion no pudo realizarse" });
                                                    }
                                                });
                                            } else {
                                                res.status(500).send({ message: "La operacion no pudo realizarse" });
                                            }
                                        });
                                    } else {
                                        res.status(500).send({ message: "La operacion no pudo realizarse" });
                                    }
                                })
                            } else {
                                res.status(500).send({ message: "La operacion no pudo realizarse" });
                            }
                        });
                    } else {
                        res.status(500).send({ message: "La operacion no pudo realizarse" });
                    }
                });

            }
        });
    }
}

module.exports = {
    main
}