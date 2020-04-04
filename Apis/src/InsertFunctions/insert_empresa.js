"use strict"
const pool = require("../database/database");
const fs = require("fs");
const { generalDir, dirSaveFile } = require("../Global/routesfilesDirs");

async function insert_empresa(name, callback) {
    if (!name) {
        callback(1);
        return;
    } else {
        //le archivo
        fs.readFile(generalDir + dirSaveFile.empresa + name, async function(err, text) {
            if (err) {
                callback(2);
                return;
            } else {
                const datos = JSON.parse(text);
                var values = [];
                datos.forEach(async row => {
                    await pool.query("select Id from pos.empresa where Id = ?", [row.Id], async function(err, result) {
                        if (err) {
                            callback(3);
                            return;
                        } else {
                            if (Object.entries(result).length === 0) {
                                //console.log(row);
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
                            }
                        }
                    });
                });

                await pool.query(
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

module.exports = insert_empresa;