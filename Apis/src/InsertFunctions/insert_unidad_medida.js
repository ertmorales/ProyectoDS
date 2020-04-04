"use strict"
const pool = require("../database/database");
const fs = require("fs");
const { generalDir, dirSaveFile } = require("../Global/routesfilesDirs");

async function insert_unidad_medida(name, callback) {
    if (!name) {
        callback(1);
        return;
    } else {
        //le archivo
        fs.readFile(generalDir + dirSaveFile.unidad_medida + name, async function(err, text) {
            if (err) {
                callback(2);
                return;
            } else {
                const datos = JSON.parse(text);
                var values = [];
                datos.forEach(async row => {
                    await pool.query("select Id from pos.unidad_medida where Id = ?", [row.Id], async function(err, result) {
                        if (err) {
                            callback(3);
                            return;
                        } else {
                            if (Object.entries(result).length === 0) {
                                //console.log(row);
                                values.push(
                                    [
                                        row.Unidad_Medida,
                                        row.Descripcion
                                    ]
                                )
                            }
                        }
                    });

                });

                await pool.query(
                    "INSERT INTO pos.unidad_medida" +
                    "(Unidad_Medida," +
                    "Descripcion)" +
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

module.exports = insert_unidad_medida;