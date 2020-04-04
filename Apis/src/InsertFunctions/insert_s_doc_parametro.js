"use strict"
const pool = require("../database/database");
const fs = require("fs");
const { generalDir, dirSaveFile } = require("../Global/routesfilesDirs");

async function insert_s_doc_parametro(name, callback) {
    if (!name) {
        callback(1);
        return;
    } else {
        //le archivo
        fs.readFile(generalDir + dirSaveFile.s_doc_parametro + name, async function(err, text) {
            if (err) {
                callback(2);
                return;
            } else {
                const datos = JSON.parse(text);
                var values = [];
                datos.forEach(async row => {
                    await pool.query("select Id from pos.s_doc_parametro where Id = ?", [row.Id], async function(err, result) {
                        if (err) {
                            callback(3);
                            return;
                        } else {
                            if (Object.entries(result).length === 0) {
                                //console.log(row);
                                values.push(
                                    [
                                        row.Tipo_Documento,
                                        row.Serie_Documento,
                                        row.Empresa,
                                        row.Estacion_Trabajo,
                                        row.Parametro
                                    ]
                                )
                            }
                        }
                    });
                });

                await pool.query(
                    "INSERT INTO pos.s_doc_parametro" +
                    "(Tipo_Documento," +
                    "Serie_Documento," +
                    "Empresa," +
                    "Estacion_Trabajo," +
                    "Parametro)" +
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

module.exports = insert_s_doc_parametro;