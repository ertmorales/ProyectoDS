"use strict"

const tables = require("../Global/TablesName");
const dateNow = require("../services/dateNow");
const fs = require("fs");

const extract_bodega = require("../extractFunctions/extract_bodega");
const extract_clase_producto = require("../extractFunctions/extract_clase_producto");
const extract_conexion = require("../extractFunctions/extract_conexion");
const extract_control_sync = require("../extractFunctions/extract_control_sync");
const extract_cuenta_correntista = require("../extractFunctions/extract_cuenta_correntista");
const extract_cuenta_correntista_rel = require("../extractFunctions/extract_cuenta_correntista_rel");
const extract_cuenta_cta = require("../extractFunctions/extract_cuenta_cta");
const extract_cuenta_precio = require("../extractFunctions/extract_cuenta_precio");
const extract_cuenta_tipo_precio = require("../extractFunctions/extract_cuenta_tipo_precio");
const extract_dispositivo = require("../extractFunctions/extract_dispositivo");
const extract_empresa = require("../extractFunctions/extract_empresa");
const extract_error = require("../extractFunctions/extract_error");
const extract_impresora = require("../extractFunctions/extract_impresora");
const extract_inventario = require("../extractFunctions/extract_inventario");
const extract_precio = require("../extractFunctions/extract_precio");
const extract_producto = require("../extractFunctions/extract_producto");
const extract_producto_u_m = require("../extractFunctions/extract_producto_u_m");
const extract_s_doc_parametro = require("../extractFunctions/extract_s_doc_parametro");
const extract_s_doc_t_car_abo = require("../extractFunctions/extract_s_doc_t_car_abo");
const extract_s_doc_t_tra = require("../extractFunctions/extract_s_doc_t_tra");
const extract_serie_documento = require("../extractFunctions/extract_serie_documento");
const extract_serie_documento_user = require("../extractFunctions/extract_serie_documento_user");
const extract_tipo_cargo_abono = require("../extractFunctions/extract_tipo_cargo_abono");
const extract_tipo_documento = require("../extractFunctions/extract_tipo_documento");
const extract_tipo_transaccion = require("../extractFunctions/extract_tipo_transaccion");
const extract_unidad_medida = require("../extractFunctions/extract_unidad_medida");
const extract_user_bodega = require("../extractFunctions/extract_user_bodega");
const extract_usuario = require("../extractFunctions/extract_usuario");

async function main(req, res) {

    var resCreateFiles = [];

    await extract_bodega(tables[0], async function(resolve) {
        if (resolve) {
            resCreateFiles.push(resolve);
            await extract_clase_producto(tables[1], async function(resolve) {
                if (resolve) {
                    resCreateFiles.push(resolve);
                    await extract_conexion(tables[2], async function(resolve) {
                        if (resolve) {
                            resCreateFiles.push(resolve);
                            await extract_control_sync(tables[3], async function(resolve) {
                                if (resolve) {
                                    resCreateFiles.push(resolve);
                                    await extract_cuenta_correntista(tables[4], async function(resolve) {
                                        if (resolve) {
                                            resCreateFiles.push(resolve);
                                            await extract_cuenta_correntista_rel(tables[5], async function(resolve) {
                                                if (resolve) {
                                                    resCreateFiles.push(resolve);
                                                    await extract_cuenta_cta(tables[6], async function(resolve) {
                                                        if (resolve) {
                                                            resCreateFiles.push(resolve);
                                                            await extract_cuenta_precio(tables[7], async function(resolve) {
                                                                if (resolve) {
                                                                    resCreateFiles.push(resolve);
                                                                    await extract_cuenta_tipo_precio(tables[8], async function(resolve) {
                                                                        if (resolve) {
                                                                            resCreateFiles.push(resolve);
                                                                            await extract_dispositivo(tables[9], async function(resolve) {
                                                                                if (resolve) {
                                                                                    resCreateFiles.push(resolve);
                                                                                    await extract_empresa(tables[10], async function(resolve) {
                                                                                        if (resolve) {
                                                                                            resCreateFiles.push(resolve);
                                                                                            await extract_error(tables[11], async function(resolve) {
                                                                                                if (resolve) {
                                                                                                    resCreateFiles.push(resolve);
                                                                                                    await extract_impresora(tables[12], async function(resolve) {
                                                                                                        if (resolve) {
                                                                                                            resCreateFiles.push(resolve);
                                                                                                            await extract_inventario(tables[13], async function(resolve) {
                                                                                                                if (resolve) {
                                                                                                                    resCreateFiles.push(resolve);
                                                                                                                    await extract_precio(tables[14], async function(resolve) {
                                                                                                                        if (resolve) {
                                                                                                                            resCreateFiles.push(resolve);
                                                                                                                            await extract_producto(tables[15], async function(resolve) {
                                                                                                                                if (resolve) {
                                                                                                                                    resCreateFiles.push(resolve);
                                                                                                                                    await extract_producto_u_m(tables[16], async function(resolve) {
                                                                                                                                        if (resolve) {
                                                                                                                                            resCreateFiles.push(resolve);
                                                                                                                                            await extract_s_doc_parametro(tables[17], async function(resolve) {
                                                                                                                                                if (resolve) {
                                                                                                                                                    resCreateFiles.push(resolve);
                                                                                                                                                    await extract_s_doc_t_car_abo(tables[18], async function(resolve) {
                                                                                                                                                        if (resolve) {
                                                                                                                                                            resCreateFiles.push(resolve);
                                                                                                                                                            await extract_s_doc_t_tra(tables[19], async function(resolve) {
                                                                                                                                                                if (resolve) {
                                                                                                                                                                    resCreateFiles.push(resolve);
                                                                                                                                                                    await extract_serie_documento(tables[20], async function(resolve) {
                                                                                                                                                                        if (resolve) {
                                                                                                                                                                            resCreateFiles.push(resolve);
                                                                                                                                                                            await extract_serie_documento_user(tables[21], async function(resolve) {
                                                                                                                                                                                if (resolve) {
                                                                                                                                                                                    resCreateFiles.push(resolve);
                                                                                                                                                                                    await extract_tipo_cargo_abono(tables[22], async function(resolve) {
                                                                                                                                                                                        if (resolve) {
                                                                                                                                                                                            resCreateFiles.push(resolve);
                                                                                                                                                                                            await extract_tipo_documento(tables[23], async function(resolve) {
                                                                                                                                                                                                if (resolve) {
                                                                                                                                                                                                    resCreateFiles.push(resolve);
                                                                                                                                                                                                    await extract_tipo_transaccion(tables[24], async function(resolve) {
                                                                                                                                                                                                        if (resolve) {
                                                                                                                                                                                                            resCreateFiles.push(resolve);
                                                                                                                                                                                                            await extract_unidad_medida(tables[25], async function(resolve) {
                                                                                                                                                                                                                if (resolve) {
                                                                                                                                                                                                                    resCreateFiles.push(resolve);
                                                                                                                                                                                                                    await extract_user_bodega(tables[26], async function(resolve) {
                                                                                                                                                                                                                        if (resolve) {
                                                                                                                                                                                                                            resCreateFiles.push(resolve);
                                                                                                                                                                                                                            await extract_usuario(tables[27], async function(resolve) {
                                                                                                                                                                                                                                if (resolve) {
                                                                                                                                                                                                                                    resCreateFiles.push(resolve);

                                                                                                                                                                                                                                    var contentFile = [];

                                                                                                                                                                                                                                    resCreateFiles.forEach(items => {
                                                                                                                                                                                                                                        if (items != 1 && items != 2 && items && items != 3) {
                                                                                                                                                                                                                                            contentFile.push(items);
                                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                                            if (items === 1) {
                                                                                                                                                                                                                                                contentFile.push("Error internal Server");
                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                            if (items === 2) {
                                                                                                                                                                                                                                                contentFile.push("No data available in table");
                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                            if (items === 3) {
                                                                                                                                                                                                                                                contentFile.push("Error creating file")
                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                        }

                                                                                                                                                                                                                                    });

                                                                                                                                                                                                                                    var finallyContentFile = [{
                                                                                                                                                                                                                                        bodega: contentFile[0],
                                                                                                                                                                                                                                        clase_producto: contentFile[1],
                                                                                                                                                                                                                                        conexion: contentFile[2],
                                                                                                                                                                                                                                        control_sync: contentFile[3],
                                                                                                                                                                                                                                        cuenta_correntista: contentFile[4],
                                                                                                                                                                                                                                        cuenta_correntista_rel: contentFile[5],
                                                                                                                                                                                                                                        cuenta_cta: contentFile[6],
                                                                                                                                                                                                                                        cuenta_precio: contentFile[7],
                                                                                                                                                                                                                                        cuenta_tipo_precio: contentFile[8],
                                                                                                                                                                                                                                        dispositivo: contentFile[9],
                                                                                                                                                                                                                                        empresa: contentFile[10],
                                                                                                                                                                                                                                        error: contentFile[11],
                                                                                                                                                                                                                                        impresora: contentFile[12],
                                                                                                                                                                                                                                        inventario: contentFile[13],
                                                                                                                                                                                                                                        precio: contentFile[14],
                                                                                                                                                                                                                                        producto: contentFile[15],
                                                                                                                                                                                                                                        producto_u_m: contentFile[16],
                                                                                                                                                                                                                                        s_doc_parametro: contentFile[17],
                                                                                                                                                                                                                                        s_doc_t_car_abo: contentFile[18],
                                                                                                                                                                                                                                        s_doc_t_tra: contentFile[19],
                                                                                                                                                                                                                                        serie_documento: contentFile[20],
                                                                                                                                                                                                                                        serie_documento_user: contentFile[21],
                                                                                                                                                                                                                                        tipo_cargo_abono: contentFile[22],
                                                                                                                                                                                                                                        tipo_documento: contentFile[23],
                                                                                                                                                                                                                                        tipo_transaccion: contentFile[24],
                                                                                                                                                                                                                                        unidad_medida: contentFile[25],
                                                                                                                                                                                                                                        user_bodega: contentFile[26],
                                                                                                                                                                                                                                        usuario: contentFile[27],
                                                                                                                                                                                                                                    }];

                                                                                                                                                                                                                                    let _dateNow = dateNow();
                                                                                                                                                                                                                                    let name = "loadFilesData" + _dateNow;
                                                                                                                                                                                                                                    let text = JSON.stringify(finallyContentFile);

                                                                                                                                                                                                                                    fs.writeFile("C:/Users/rober/Desktop/test/" + name + ".json", text, function(err) {
                                                                                                                                                                                                                                        if (err) {
                                                                                                                                                                                                                                            res.status(500).send({ message: "Error al crear archivo final" });
                                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                                            //si todo se ejecut acorrectmente devuelve el nombre del archivo
                                                                                                                                                                                                                                            res.status(200).send({ message: name + ".json" })
                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                    });
                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                    res.status(500).send({ message: "Ha ocurrido un error" });
                                                                                                                                                                                                                                }
                                                                                                                                                                                                                            });
                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                            res.status(500).send({ message: "Ha ocurrido un error" });
                                                                                                                                                                                                                        }
                                                                                                                                                                                                                    });
                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                    res.status(500).send({ message: "Ha ocurrido un error" });
                                                                                                                                                                                                                }
                                                                                                                                                                                                            });
                                                                                                                                                                                                        } else {
                                                                                                                                                                                                            res.status(500).send({ message: "Ha ocurrido un error" });
                                                                                                                                                                                                        }
                                                                                                                                                                                                    });
                                                                                                                                                                                                } else {
                                                                                                                                                                                                    res.status(500).send({ message: "Ha ocurrido un error" });
                                                                                                                                                                                                }
                                                                                                                                                                                            });
                                                                                                                                                                                        } else {
                                                                                                                                                                                            res.status(500).send({ message: "Ha ocurrido un error" });
                                                                                                                                                                                        }
                                                                                                                                                                                    });
                                                                                                                                                                                } else {
                                                                                                                                                                                    res.status(500).send({ message: "Ha ocurrido un error" });
                                                                                                                                                                                }
                                                                                                                                                                            });
                                                                                                                                                                        } else {
                                                                                                                                                                            res.status(500).send({ message: "Ha ocurrido un error" });
                                                                                                                                                                        }
                                                                                                                                                                    });
                                                                                                                                                                } else {
                                                                                                                                                                    res.status(500).send({ message: "Ha ocurrido un error" });
                                                                                                                                                                }
                                                                                                                                                            });
                                                                                                                                                        } else {
                                                                                                                                                            res.status(500).send({ message: "Ha ocurrido un error" });
                                                                                                                                                        }
                                                                                                                                                    });
                                                                                                                                                } else {
                                                                                                                                                    res.status(500).send({ message: "Ha ocurrido un error" });
                                                                                                                                                }
                                                                                                                                            });
                                                                                                                                        } else {
                                                                                                                                            res.status(500).send({ message: "Ha ocurrido un error" });
                                                                                                                                        }
                                                                                                                                    });
                                                                                                                                } else {
                                                                                                                                    res.status(500).send({ message: "Ha ocurrido un error" });
                                                                                                                                }
                                                                                                                            });
                                                                                                                        } else {
                                                                                                                            res.status(500).send({ message: "Ha ocurrido un error" });
                                                                                                                        }
                                                                                                                    });
                                                                                                                } else {
                                                                                                                    res.status(500).send({ message: "Ha ocurrido un error" });
                                                                                                                }
                                                                                                            });
                                                                                                        } else {
                                                                                                            res.status(500).send({ message: "Ha ocurrido un error" });
                                                                                                        }
                                                                                                    });
                                                                                                } else {
                                                                                                    res.status(500).send({ message: "Ha ocurrido un error" });
                                                                                                }
                                                                                            });
                                                                                        } else {
                                                                                            res.status(500).send({ message: "Ha ocurrido un error" });
                                                                                        }
                                                                                    });
                                                                                } else {
                                                                                    res.status(500).send({ message: "Ha ocurrido un error" });
                                                                                }
                                                                            });
                                                                        } else {
                                                                            res.status(500).send({ message: "Ha ocurrido un error" });
                                                                        }
                                                                    });
                                                                } else {
                                                                    res.status(500).send({ message: "Ha ocurrido un error" });
                                                                }
                                                            });
                                                        } else {
                                                            res.status(500).send({ message: "Ha ocurrido un error" });
                                                        }
                                                    });
                                                } else {
                                                    res.status(500).send({ message: "Ha ocurrido un error" });
                                                }
                                            });
                                        } else {
                                            res.status(500).send({ message: "Ha ocurrido un error" });
                                        }
                                    });
                                } else {
                                    res.status(500).send({ message: "Ha ocurrido un error" });
                                }
                            });
                        } else {
                            res.status(500).send({ message: "Ha ocurrido un error" });
                        }
                    });
                } else {
                    res.status(500).send({ message: "Ha ocurrido un error" });
                }
            });
        } else {
            res.status(500).send({ message: "Ha ocurrido un error" });
        }
    });
}

module.exports = {
    main
}