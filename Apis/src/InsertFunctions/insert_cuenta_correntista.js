"use strict"

const pool = require("../database/database");
const fs = require("fs");
const { generalDir, dirSaveFile } = require("../Global/routesfilesDirs")

async function insert_cuenta_correntista(name, callback) {
    if (!name) {
        callback(1);
        return;
    } else {
        //le archivo
        fs.readFile(generalDir + dirSaveFile.cuenta_correntista + name, async function(err, text) {
            if (err) {
                callback(2);
                return;
            } else {
                //si el archivo existe, inserta en la db 
                const datos = JSON.parse(text);
                var values = [];
                datos.forEach(async row => {
                    await pool.query("select Id from pos.cuenta_correntista where Id = ?", [row.Id], async function(err, result) {
                        if (err) {
                            callback(3);
                            return;
                        } else {
                            if (Object.entries(result).length === 0) {
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
                            }
                        }
                    });
                });

                await pool.query(
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

module.exports = insert_cuenta_correntista;