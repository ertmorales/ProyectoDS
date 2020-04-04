"use strict"
const pool = require("../database/database");
const fs = require("fs");
const { generalDir, dirSaveFile } = require("../Global/routesfilesDirs");

async function insert_producto_u_m(name, callback) {
    if (!name) {
        callback(1);
        return;
    } else {
        //le archivo
        fs.readFile(generalDir + dirSaveFile.producto_u_m + name, async function(err, text) {
            if (err) {
                callback(2);
                return;
            } else {
                const datos = JSON.parse(text);
                var values = [];
                datos.forEach(async row => {
                    await pool.query("select Id from pos.producto_u_m where Id = ?", [row.Id], async function(err, result) {
                        if (err) {
                            callback(3);
                            return;
                        } else {
                            if (Object.entries(result).length === 0) {
                                //console.log(row);
                                values.push(
                                    [
                                        row.Producto,
                                        row.Unidad_Medida,
                                        row.Producto_Id,
                                        row.Id_Producto_Alterno
                                    ]
                                )
                            }
                        }
                    });

                });

                await pool.query(
                    "INSERT INTO pos.producto_u_m" +
                    "(Producto," +
                    "Unidad_Medida," +
                    "Producto_Id," +
                    "Id_Producto_Alterno)" +
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

module.exports = insert_producto_u_m;