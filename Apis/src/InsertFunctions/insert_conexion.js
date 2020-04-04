"use strict"

const pool = require("../database/database");
const fs = require("fs");
const { generalDir, dirSaveFile } = require("../Global/routesfilesDirs")

async function insert_conexion(name, callback) {
    if (!name) {
        callback(1);
        return;
    } else {
        fs.readFile(generalDir + dirSaveFile.conexion + name, async function(err, text) {
            if (err) {
                callback(2);
                return;
            } else {
                const datos = JSON.parse(text);
                var values = [];
                datos.forEach(async row => {
                    await pool.query("select Id from pos.conexion where Id = ?", [row.Id], async function(err, result) {
                        if (err) {
                            callback(3);
                            return;
                        } else {
                            if (Object.entries(result).length === 0) {
                                values.push(
                                    [
                                        row.URL_Core,
                                        row.Base_Datos,
                                        row.Key_Empresa
                                    ]
                                )
                            }
                        }
                    });

                });

                await pool.query(
                    "INSERT INTO pos.conexion" +
                    "(URL_Core," +
                    "Base_Datos," +
                    "Key_Empresa)" +
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

module.exports = insert_conexion;