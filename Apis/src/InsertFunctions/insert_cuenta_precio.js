"use strict"

const pool = require("../database/database");
const fs = require("fs");
const { generalDir, dirSaveFile } = require("../Global/routesfilesDirs")

async function insert_cuenta_precio(name, callback) {
    if (!name) {
        callback(1);
        return;
    } else {
        //le archivo
        fs.readFile(generalDir + dirSaveFile.cuenta_precio + name, async function(err, text) {
            if (err) {
                callback(2);
                return;
            } else {
                const datos = JSON.parse(text);
                var values = [];
                datos.forEach(async row => {
                    await pool.query("select Id from pos.cuenta_precio where Id = ?", [row.Id], async function(err, result) {
                        if (err) {
                            callback(3);
                            return;
                        } else {
                            if (Object.entries(result).length === 0) {
                                //console.log(row);
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
                            }
                        }
                    });
                });

                await pool.query(
                    "INSERT INTO pos.cuenta_precio" +
                    "(Cuenta_Correntista," +
                    "Cuenta_Cta," +
                    "Producto," +
                    "Unidad_Medida," +
                    "Tipo_Precio," +
                    "Precio_Unidad," +
                    "Descuento_Por)" +
                    "VALUES ?", [values],
                    async function(err, result) {
                        if (err) {
                            callback(4);
                            return;
                        } else {
                            callback(201);
                            return;
                        }
                    }
                );
            }
        });
    }
}

module.exports = insert_cuenta_precio;