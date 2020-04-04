"use strict"
const pool = require("../database/database");
const fs = require("fs");
const { generalDir, dirSaveFile } = require("../Global/routesfilesDirs");

async function insert_user_bodega(name, callabck) {
    if (!name) {
        callabck(1);
        return;
    } else {
        //le archivo
        fs.readFile(generalDir + dirSaveFile.user_bodega + name, async function(err, text) {
            if (err) {
                callabck(2);
                return;
            } else {
                const datos = JSON.parse(text);
                var values = [];
                datos.forEach(async row => {
                    await pool.query("select Id from pos.user_bodega where Id = ?", [row.Id], async function(err, result) {
                        if (err) {
                            callabck(3);
                            return;
                        } else {
                            if (Object.entries(result).length === 0) {
                                //console.log(row);

                                values.push(
                                    [
                                        row.UserName,
                                        row.Bodega
                                    ]
                                )
                            }
                        }
                    });
                });

                await pool.query(
                    "INSERT INTO pos.user_bodega" +
                    "(UserName," +
                    "Bodega)" +
                    "VALUES ?", [values],
                    async function(err, result) {
                        if (err) {
                            callabck(4);
                            return;
                        } else {
                            callabck(201);
                            return;
                        }
                    }
                );
            }
        });
    }
}

module.exports = insert_user_bodega;