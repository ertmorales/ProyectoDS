"use strict"

const pool = require("../database/database");
const fs = require("fs");
const { generalDir, dirSaveFile } = require("../Global/routesfilesDirs")

async function insert_cuenta_cta(name, callback) {
    if (!name) {
        callback(1);
        return;
    } else {
        //le archivo
        fs.readFile(generalDir + dirSaveFile.cuenta_cta + name, async function(err, text) {
            if (err) {
                callback(2);
                return;
            } else {
                //si el archivo existe, inserta en la db 
                const datos = JSON.parse(text);
                var values = [];
                datos.forEach(async row => {
                    await pool.query("select Id from pos.cuenta_cta where Id = ?", [row.Id], async function(err, result) {
                        if (err) {
                            callback(3);
                            return;
                        } else {
                            if (Object.entries(result).length === 0) {
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
                            }
                        }
                    });
                });

                await pool.query(
                    "INSERT INTO pos.cuenta_cta" +
                    "(Cuenta_Correntista," +
                    "Cuenta_Cta," +
                    "Validar_Tipo_Precio," +
                    "Permitir_CxC," +
                    "Descripcion," +
                    "Direccion)" +
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

module.exports = insert_cuenta_cta;