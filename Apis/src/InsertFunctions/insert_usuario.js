"use strict"
const pool = require("../database/database");
const fs = require("fs");
const { generalDir, dirSaveFile } = require("../Global/routesfilesDirs");

async function insert_usuario(name, callback) {
    if (!name) {
        callback(1);
        return;
    } else {
        //le archivo
        fs.readFile(generalDir + dirSaveFile.usuario + name, async function(err, text) {
            if (err) {
                callback(2);
                return;
            } else {
                const datos = JSON.parse(text);
                var values = [];
                datos.forEach(async row => {
                    await pool.query("select Id from pos.usuario where Id = ?", [row.Id], async function(err, result) {
                        if (err) {
                            callback(3);
                            return;
                        } else {
                            if (Object.entries(result).length === 0) {
                                //console.log(row);
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
                            }
                        }
                    });
                });

                await pool.query(
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

module.exports = insert_usuario;