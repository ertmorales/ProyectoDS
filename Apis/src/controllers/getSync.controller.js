"use strict"

const pool = require("../database/database");
const moment = require("moment");
const fs = require("fs");
const { generalDir, dirSaveFile } = require("../Global/routesfilesDirs")

//Obtine fecha actual
function fechaCreacion() {

    let ahora = moment();
    return ahora.format('YYYY-MM-DD-HH-mm');
}

async function main(req, res) {

    /*
    //archivo tabla bodega
    await pool.query("SELECT * FROM pos.bodega", function(err, result) {
        if (err) {
            res.status(500).send({ message: "Error, vuelva a intentarlo más tarde" });
        } else {
            if (Object.entries(result).length === 0) {
                res.status(404).send({ message: "No hay ningún dato disponible en la tabla bodega" });
            } else {
                //crear archivo .json
                let fecha = fechaCreacion();
                let name = "tbl-bodega-" + fecha + ".json"

                fs.writeFile(generalDir + dirSaveFile.bodega + name, JSON.stringify(result), function(err) {
                    if (err) {
                        res.status(500).send({ message: "error al crear archivo" });
                    } else {
                        //si todo se ejecut acorrectmente devuelve el nombre del archivo
                        res.status(200).send({ message: name })
                    }
                });
            }
        }
    });
    */
    /*

     //archivo tabla clase_producto
     await pool.query("SELECT * FROM pos.clase_producto", function(err, result) {
         if (err) {
             res.status(500).send({ message: "Error, vuelva a intentarlo más tarde" });
         } else {
             if (Object.entries(result).length === 0) {
                 res.status(404).send({ message: "No hay ningún dato disponible en la tabla clase_producto" });
             } else {
                 //crear archivo .json
                 let fecha = fechaCreacion();
                 let name = "tbl-clase_producto-" + fecha + ".json"
                 fs.writeFile(generalDir + dirSaveFile.clase_producto + name, JSON.stringify(result), function(err) {
                     if (err) {
                         res.status(500).send({ message: "error al crear archivo" });
                     } else {
                         //si todo se ejecut acorrectmente devuelve el nombre del archivo
                         res.status(200).send({ message: name })
                     }
                 });
             }
         }
     });
     */
    /*
    //archivo tabla conexion 
    await pool.query("SELECT * FROM pos.conexion", function(err, result) {
        if (err) {
            res.status(500).send({ message: "Error, vuelva a intentarlo más tarde" });
        } else {
            if (Object.entries(result).length === 0) {
                res.status(404).send({ message: "No hay ningún dato disponible en la tabla conexion" });
            } else {
                //crear archivo .json
                let fecha = fechaCreacion();
                let name = "tbl-conexion-" + fecha + ".json"
                fs.writeFile(generalDir + dirSaveFile.conexion + name, JSON.stringify(result), function(err) {
                    if (err) {
                        res.status(500).send({ message: "error al crear archivo" });
                    } else {
                        //si todo se ejecut acorrectmente devuelve el nombre del archivo
                        res.status(200).send({ message: name })
                    }
                });
            }
        }
    });

    */

    /*
    //archivo tabla control_sync
    await pool.query("SELECT * FROM pos.control_sync", function(err, result) {
        if (err) {
            res.status(500).send({ message: "Error, vuelva a intentarlo más tarde" });
        } else {
            if (Object.entries(result).length === 0) {
                res.status(404).send({ message: "No hay ningún dato disponible en la tabla control_sync" });
            } else {
                //crear archivo .json
                let fecha = fechaCreacion();
                let name = "tbl-control_sync-" + fecha + ".json"
                fs.writeFile(generalDir + dirSaveFile.control_sync + name, JSON.stringify(result), function(err) {
                    if (err) {
                        res.status(500).send({ message: "error al crear archivo" });
                    } else {
                        //si todo se ejecut acorrectmente devuelve el nombre del archivo
                        res.status(200).send({ message: name })
                    }
                });
            }
        }
    });
    */
    /*
     //archivo tabla cuenta_correntista
     await pool.query("SELECT * FROM pos.cuenta_correntista", function(err, result) {
         if (err) {
             res.status(500).send({ message: "Error, vuelva a intentarlo más tarde" });
         } else {
             if (Object.entries(result).length === 0) {
                 res.status(404).send({ message: "No hay ningún dato disponible en la tabla cuenta_correntista" });
             } else {
                 //crear archivo .json
                 let fecha = fechaCreacion();
                 let name = "tbl-cuenta_correntista-" + fecha + ".json"
                 fs.writeFile(generalDir + dirSaveFile.cuenta_correntista + name, JSON.stringify(result), function(err) {
                     if (err) {
                         res.status(500).send({ message: "error al crear archivo" });
                     } else {
                         //si todo se ejecut acorrectmente devuelve el nombre del archivo
                         res.status(200).send({ message: name })
                     }
                 });
             }
         }
     });
     */
    /*
    //archivo tabla cuenta_correntista_rel
    await pool.query("SELECT * FROM pos.cuenta_correntista_rel", function(err, result) {
        if (err) {
            res.status(500).send({ message: "Error, vuelva a intentarlo más tarde" });
        } else {
            if (Object.entries(result).length === 0) {
                res.status(404).send({ message: "No hay ningún dato disponible en la tabla cuenta_correntista_rel" });
            } else {
                //crear archivo .json
                let fecha = fechaCreacion();
                let name = "tbl-cuenta_correntista_rel-" + fecha + ".json"
                fs.writeFile(generalDir + dirSaveFile.cuenta_correntista_rel + name, JSON.stringify(result), function(err) {
                    if (err) {
                        res.status(500).send({ message: "error al crear archivo" });
                    } else {
                        //si todo se ejecut acorrectmente devuelve el nombre del archivo
                        res.status(200).send({ message: name })
                    }
                });
            }
        }
    });
    */
    /*

     //archivo tabla cuenta_cta
     await pool.query("SELECT * FROM pos.cuenta_cta", function(err, result) {
         if (err) {
             res.status(500).send({ message: "Error, vuelva a intentarlo más tarde" });
         } else {
             if (Object.entries(result).length === 0) {
                 res.status(404).send({ message: "No hay ningún dato disponible en la tabla cuenta_cta" });
             } else {
                 //crear archivo .json
                 let fecha = fechaCreacion();
                 let name = "tbl-cuenta_cta-" + fecha + ".json"
                 fs.writeFile(generalDir + dirSaveFile.cuenta_cta + name, JSON.stringify(result), function(err) {
                     if (err) {
                         res.status(500).send({ message: "error al crear archivo" });
                     } else {
                         //si todo se ejecut acorrectmente devuelve el nombre del archivo
                         res.status(200).send({ message: name })
                     }
                 });
             }
         }
     });
     */

    /*
    //archivo tabla cuenta_precio
    await pool.query("SELECT * FROM pos.cuenta_precio", function(err, result) {
        if (err) {
            res.status(500).send({ message: "Error, vuelva a intentarlo más tarde" });
        } else {
            if (Object.entries(result).length === 0) {
                res.status(404).send({ message: "No hay ningún dato disponible en la tabla cuenta_precio" });
            } else {
                //crear archivo .json
                let fecha = fechaCreacion();
                let name = "tbl-cuenta_precio-" + fecha + ".json"
                fs.writeFile(generalDir + dirSaveFile.cuenta_precio + name, JSON.stringify(result), function(err) {
                    if (err) {
                        res.status(500).send({ message: "error al crear archivo" });
                    } else {
                        //si todo se ejecut acorrectmente devuelve el nombre del archivo
                        res.status(200).send({ message: name })
                    }
                });
            }
        }
    });

    */

    /*
    //archivo tabla cuenta_tipo_precio
    await pool.query("SELECT * FROM pos.cuenta_tipo_precio", function(err, result) {
        if (err) {
            res.status(500).send({ message: "Error, vuelva a intentarlo más tarde" });
        } else {
            if (Object.entries(result).length === 0) {
                res.status(404).send({ message: "No hay ningún dato disponible en la tabla cuenta_tipo_precio" });
            } else {
                //crear archivo .json
                let fecha = fechaCreacion();
                let name = "tbl-cuenta_tipo_precio-" + fecha + ".json"

                fs.writeFile(generalDir + dirSaveFile.cuenta_tipo_precio + name, JSON.stringify(result), function(err) {
                    if (err) {
                        res.status(500).send({ message: "error al crear archivo" });
                    } else {
                        //si todo se ejecut acorrectmente devuelve el nombre del archivo
                        res.status(200).send({ message: name })
                    }
                });
            }
        }
    });
    */
    /*

     //archivo tabla dispositivo
     await pool.query("SELECT * FROM pos.dispositivo", function(err, result) {
         if (err) {
             res.status(500).send({ message: "Error, vuelva a intentarlo más tarde" });
         } else {
             if (Object.entries(result).length === 0) {
                 res.status(404).send({ message: "No hay ningún dato disponible en la tabla dispositivo" });
             } else {
                 //crear archivo .json
                 let fecha = fechaCreacion();
                 let name = "tbl-dispositivo-" + fecha + ".json"

                 fs.writeFile(generalDir + dirSaveFile.dispositivo + name, JSON.stringify(result), function(err) {
                     if (err) {
                         res.status(500).send({ message: "error al crear archivo" });
                     } else {
                         //si todo se ejecut acorrectmente devuelve el nombre del archivo
                         res.status(200).send({ message: name })
                     }
                 });
             }
         }
     });
     */

    /*
    //archivo tabla empresa
    await pool.query("SELECT * FROM pos.empresa", function(err, result) {
        if (err) {
            res.status(500).send({ message: "Error, vuelva a intentarlo más tarde" });
        } else {
            if (Object.entries(result).length === 0) {
                res.status(404).send({ message: "No hay ningún dato disponible en la tabla empresa" });
            } else {
                //crear archivo .json
                let fecha = fechaCreacion();
                let name = "tbl-empresa-" + fecha + ".json"

                fs.writeFile(generalDir + dirSaveFile.empresa + name, JSON.stringify(result), function(err) {
                    if (err) {
                        res.status(500).send({ message: "error al crear archivo" });
                    } else {
                        //si todo se ejecut acorrectmente devuelve el nombre del archivo
                        res.status(200).send({ message: name })
                    }
                });
            }
        }
    });
*/
    /*
        //archivo tabla error
        await pool.query("SELECT * FROM pos.error", function(err, result) {
            if (err) {
                res.status(500).send({ message: "Error, vuelva a intentarlo más tarde" });
            } else {
                if (Object.entries(result).length === 0) {
                    res.status(404).send({ message: "No hay ningún dato disponible en la tabla error" });
                } else {
                    //crear archivo .json
                    let fecha = fechaCreacion();
                    let name = "tbl-error-" + fecha + ".json"

                    fs.writeFile(generalDir + dirSaveFile.error + name, JSON.stringify(result), function(err) {
                        if (err) {
                            res.status(500).send({ message: "error al crear archivo" });
                        } else {
                            //si todo se ejecut acorrectmente devuelve el nombre del archivo
                            res.status(200).send({ message: name })
                        }
                    });
                }
            }
        });
        */
    /*

    //archivo tabla impresora
    await pool.query("SELECT * FROM pos.impresora", function(err, result) {
        if (err) {
            res.status(500).send({ message: "Error, vuelva a intentarlo más tarde" });
        } else {
            if (Object.entries(result).length === 0) {
                res.status(404).send({ message: "No hay ningún dato disponible en la tabla impresora" });
            } else {
                //crear archivo .json
                let fecha = fechaCreacion();
                let name = "tbl-impresora-" + fecha + ".json"

                fs.writeFile(generalDir + dirSaveFile.impresora + name, JSON.stringify(result), function(err) {
                    if (err) {
                        res.status(500).send({ message: "error al crear archivo" });
                    } else {
                        //si todo se ejecut acorrectmente devuelve el nombre del archivo
                        res.status(200).send({ message: name })
                    }
                });
            }
        }
    });
    */

    /*
    //archivo tabla inventario
    await pool.query("SELECT * FROM pos.inventario", function(err, result) {
        if (err) {
            res.status(500).send({ message: "Error, vuelva a intentarlo más tarde" });
        } else {
            if (Object.entries(result).length === 0) {
                res.status(404).send({ message: "No hay ningún dato disponible en la tabla inventario" });
            } else {
                //crear archivo .json
                let fecha = fechaCreacion();
                let name = "tbl-inventario-" + fecha + ".json"

                fs.writeFile(generalDir + dirSaveFile.inventario + name, JSON.stringify(result), function(err) {
                    if (err) {
                        res.status(500).send({ message: "error al crear archivo" });
                    } else {
                        //si todo se ejecut acorrectmente devuelve el nombre del archivo
                        res.status(200).send({ message: name })
                    }
                });
            }
        }
    });
    */

    /*
    //archivo tabla precio
    await pool.query("SELECT * FROM pos.precio", function(err, result) {
        if (err) {
            res.status(500).send({ message: "Error, vuelva a intentarlo más tarde" });
        } else {
            if (Object.entries(result).length === 0) {
                res.status(404).send({ message: "No hay ningún dato disponible en la tabla precio" });
            } else {
                //crear archivo .json
                let fecha = fechaCreacion();
                let name = "tbl-precio-" + fecha + ".json"

                fs.writeFile(generalDir + dirSaveFile.precio + name, JSON.stringify(result), function(err) {
                    if (err) {
                        res.status(500).send({ message: "error al crear archivo" });
                    } else {
                        //si todo se ejecut acorrectmente devuelve el nombre del archivo
                        res.status(200).send({ message: name })
                    }
                });
            }
        }
    });
    */

    /*
    //archivo tabla producto
    await pool.query("SELECT * FROM pos.producto", function(err, result) {
        if (err) {
            res.status(500).send({ message: "Error, vuelva a intentarlo más tarde" });
        } else {
            if (Object.entries(result).length === 0) {
                res.status(404).send({ message: "No hay ningún dato disponible en la tabla producto" });
            } else {
                //crear archivo .json
                let fecha = fechaCreacion();
                let name = "tbl-producto-" + fecha + ".json"

                fs.writeFile(generalDir + dirSaveFile.producto + name, JSON.stringify(result), function(err) {
                    if (err) {
                        res.status(500).send({ message: "error al crear archivo" });
                    } else {
                        //si todo se ejecut acorrectmente devuelve el nombre del archivo
                        res.status(200).send({ message: name })
                    }
                });
            }
        }
    });
    */
    /*
     //archivo tabla producto_u_m
     await pool.query("SELECT * FROM pos.producto_u_m", function(err, result) {
         if (err) {
             res.status(500).send({ message: "Error, vuelva a intentarlo más tarde" });
         } else {
             if (Object.entries(result).length === 0) {
                 res.status(404).send({ message: "No hay ningún dato disponible en la tabla producto_u_m" });
             } else {
                 //crear archivo .json
                 let fecha = fechaCreacion();
                 let name = "tbl-producto_u_m-" + fecha + ".json"

                 fs.writeFile(generalDir + dirSaveFile.producto_u_m + name, JSON.stringify(result), function(err) {
                     if (err) {
                         res.status(500).send({ message: "error al crear archivo" });
                     } else {
                         //si todo se ejecut acorrectmente devuelve el nombre del archivo
                         res.status(200).send({ message: name })
                     }
                 });
             }
         }
     });
     */
    /*
    //archivo tabla s_doc_parametro
    await pool.query("SELECT * FROM pos.s_doc_parametro", function(err, result) {
        if (err) {
            res.status(500).send({ message: "Error, vuelva a intentarlo más tarde" });
        } else {
            if (Object.entries(result).length === 0) {
                res.status(404).send({ message: "No hay ningún dato disponible en la tabla s_doc_parametro" });
            } else {
                //crear archivo .json
                let fecha = fechaCreacion();
                let name = "tbl-s_doc_parametro-" + fecha + ".json"

                fs.writeFile(generalDir + dirSaveFile.s_doc_parametro + name, JSON.stringify(result), function(err) {
                    if (err) {
                        res.status(500).send({ message: "error al crear archivo" });
                    } else {
                        //si todo se ejecut acorrectmente devuelve el nombre del archivo
                        res.status(200).send({ message: name })
                    }
                });
            }
        }
    });
*/
    /*

        //archivo tabla s_doc_t_car_abo
        await pool.query("SELECT * FROM pos.s_doc_t_car_abo", function(err, result) {
            if (err) {
                res.status(500).send({ message: "Error, vuelva a intentarlo más tarde" });
            } else {
                if (Object.entries(result).length === 0) {
                    res.status(404).send({ message: "No hay ningún dato disponible en la tabla s_doc_t_car_abo" });
                } else {
                    //crear archivo .json
                    let fecha = fechaCreacion();
                    let name = "tbl-s_doc_t_car_abo-" + fecha + ".json"

                    fs.writeFile(generalDir + dirSaveFile.s_doc_t_car_abo + name, JSON.stringify(result), function(err) {
                        if (err) {
                            res.status(500).send({ message: "error al crear archivo" });
                        } else {
                            //si todo se ejecut acorrectmente devuelve el nombre del archivo
                            res.status(200).send({ message: name })
                        }
                    });
                }
            }
        });
    */
    /*
    //archivo tabla s_doc_t_tra
    await pool.query("SELECT * FROM pos.s_doc_t_tra", function(err, result) {
        if (err) {
            res.status(500).send({ message: "Error, vuelva a intentarlo más tarde" });
        } else {
            if (Object.entries(result).length === 0) {
                res.status(404).send({ message: "No hay ningún dato disponible en la tabla s_doc_t_tra" });
            } else {
                //crear archivo .json
                let fecha = fechaCreacion();
                let name = "tbl-s_doc_t_tra-" + fecha + ".json"

                fs.writeFile(generalDir + dirSaveFile.s_doc_t_tra + name, JSON.stringify(result), function(err) {
                    if (err) {
                        res.status(500).send({ message: "error al crear archivo" });
                    } else {
                        //si todo se ejecut acorrectmente devuelve el nombre del archivo
                        res.status(200).send({ message: name })
                    }
                });
            }
        }
    });
*/
    /*
        //archivo tabla serie_documento
        await pool.query("SELECT * FROM pos.serie_documento", function(err, result) {
            if (err) {
                res.status(500).send({ message: "Error, vuelva a intentarlo más tarde" });
            } else {
                if (Object.entries(result).length === 0) {
                    res.status(404).send({ message: "No hay ningún dato disponible en la tabla serie_documento" });
                } else {
                    //crear archivo .json
                    let fecha = fechaCreacion();
                    let name = "tbl-serie_documento-" + fecha + ".json"

                    fs.writeFile(generalDir + dirSaveFile.serie_documento + name, JSON.stringify(result), function(err) {
                        if (err) {
                            res.status(500).send({ message: "error al crear archivo" });
                        } else {
                            //si todo se ejecut acorrectmente devuelve el nombre del archivo
                            res.status(200).send({ message: name })
                        }
                    });
                }
            }
        });
      
      */
    /*
    //archivo tabla serie_documento_user
    await pool.query("SELECT * FROM pos.serie_documento_user", function(err, result) {
        if (err) {
            res.status(500).send({ message: "Error, vuelva a intentarlo más tarde" });
        } else {
            if (Object.entries(result).length === 0) {
                res.status(404).send({ message: "No hay ningún dato disponible en la tabla serie_documento_user" });
            } else {
                //crear archivo .json
                let fecha = fechaCreacion();
                let name = "tbl-serie_documento_user-" + fecha + ".json"

                fs.writeFile(generalDir + dirSaveFile.serie_documento_user + name, JSON.stringify(result), function(err) {
                    if (err) {
                        res.status(500).send({ message: "error al crear archivo" });
                    } else {
                        //si todo se ejecut acorrectmente devuelve el nombre del archivo
                        res.status(200).send({ message: name })
                    }
                });
            }
        }
    });
*/
    /*

        //archivo tabla tipo_cargo_abono
        await pool.query("SELECT * FROM pos.tipo_cargo_abono", function(err, result) {
            if (err) {
                res.status(500).send({ message: "Error, vuelva a intentarlo más tarde" });
            } else {
                if (Object.entries(result).length === 0) {
                    res.status(404).send({ message: "No hay ningún dato disponible en la tabla tipo_cargo_abono" });
                } else {
                    //crear archivo .json
                    let fecha = fechaCreacion();
                    let name = "tbl-tipo_cargo_abono-" + fecha + ".json"

                    fs.writeFile(generalDir + dirSaveFile.tipo_cargo_abono + name, JSON.stringify(result), function(err) {
                        if (err) {
                            res.status(500).send({ message: "error al crear archivo" });
                        } else {
                            //si todo se ejecut acorrectmente devuelve el nombre del archivo
                            res.status(200).send({ message: name })
                        }
                    });
                }
            }
        });
      */
    /*
    //archivo tabla tipo_documento
    await pool.query("SELECT * FROM pos.tipo_documento", function(err, result) {
        if (err) {
            res.status(500).send({ message: "Error, vuelva a intentarlo más tarde" });
        } else {
            if (Object.entries(result).length === 0) {
                res.status(404).send({ message: "No hay ningún dato disponible en la tabla tipo_documento" });
            } else {
                //crear archivo .json
                let fecha = fechaCreacion();
                let name = "tbl-tipo_documento-" + fecha + ".json"

                fs.writeFile(generalDir + dirSaveFile.tipo_documento + name, JSON.stringify(result), function(err) {
                    if (err) {
                        res.status(500).send({ message: "error al crear archivo" });
                    } else {
                        //si todo se ejecut acorrectmente devuelve el nombre del archivo
                        res.status(200).send({ message: name })
                    }
                });
            }
        }
    });
    */
    /*

     //archivo tabla tipo_transaccion
     await pool.query("SELECT * FROM pos.tipo_transaccion", function(err, result) {
         if (err) {
             res.status(500).send({ message: "Error, vuelva a intentarlo más tarde" });
         } else {
             if (Object.entries(result).length === 0) {
                 res.status(404).send({ message: "No hay ningún dato disponible en la tabla tipo_transaccion" });
             } else {
                 //crear archivo .json
                 let fecha = fechaCreacion();
                 let name = "tbl-tipo_transaccion-" + fecha + ".json"

                 fs.writeFile(generalDir + dirSaveFile.tipo_transaccion + name, JSON.stringify(result), function(err) {
                     if (err) {
                         res.status(500).send({ message: "error al crear archivo" });
                     } else {
                         //si todo se ejecut acorrectmente devuelve el nombre del archivo
                         res.status(200).send({ message: name })
                     }
                 });
             }
         }
     });
     */
    /*

    //archivo tabla unidad_medida
    await pool.query("SELECT * FROM pos.unidad_medida", function(err, result) {
        if (err) {
            res.status(500).send({ message: "Error, vuelva a intentarlo más tarde" });
        } else {
            if (Object.entries(result).length === 0) {
                res.status(404).send({ message: "No hay ningún dato disponible en la tabla unidad_medida" });
            } else {
                //crear archivo .json
                let fecha = fechaCreacion();
                let name = "tbl-unidad_medida-" + fecha + ".json"

                fs.writeFile(generalDir + dirSaveFile.unidad_medida + name, JSON.stringify(result), function(err) {
                    if (err) {
                        res.status(500).send({ message: "error al crear archivo" });
                    } else {
                        //si todo se ejecut acorrectmente devuelve el nombre del archivo
                        res.status(200).send({ message: name })
                    }
                });
            }
        }
    });
    */
    /*
     //archivo tabla user_bodega
     await pool.query("SELECT * FROM pos.user_bodega", function(err, result) {
         if (err) {
             res.status(500).send({ message: "Error, vuelva a intentarlo más tarde" });
         } else {
             if (Object.entries(result).length === 0) {
                 res.status(404).send({ message: "No hay ningún dato disponible en la tabla user_bodega" });
             } else {
                 //crear archivo .json
                 let fecha = fechaCreacion();
                 let name = "tbl-user_bodega-" + fecha + ".json"

                 fs.writeFile(generalDir + dirSaveFile.user_bodega + name, JSON.stringify(result), function(err) {
                     if (err) {
                         res.status(500).send({ message: "error al crear archivo" });
                     } else {
                         //si todo se ejecut acorrectmente devuelve el nombre del archivo
                         res.status(200).send({ message: name })
                     }
                 });
             }
         }
     });
     */
    //archivo tabla usuario
    await pool.query("SELECT * FROM pos.usuario", function(err, result) {
        if (err) {
            res.status(500).send({ message: "Error, vuelva a intentarlo más tarde" });
        } else {
            if (Object.entries(result).length === 0) {
                res.status(404).send({ message: "No hay ningún dato disponible en la tabla usuario" });
            } else {
                //crear archivo .json
                let fecha = fechaCreacion();
                let name = "tbl-usuario-" + fecha + ".json"

                fs.writeFile(generalDir + dirSaveFile.usuario + name, JSON.stringify(result), function(err) {
                    if (err) {
                        res.status(500).send({ message: "error al crear archivo" });
                    } else {
                        //si todo se ejecut acorrectmente devuelve el nombre del archivo
                        res.status(200).send({ message: name })
                    }
                });
            }
        }
    });

    //    res.status(200).send({ message: "Hola mundo" })

}

module.exports = {
    main
}