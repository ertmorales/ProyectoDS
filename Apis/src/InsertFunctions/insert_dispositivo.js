"use strict"

const pool = require("../database/database");
const fs = require("fs");
const { generalDir, dirSaveFile } = require("../Global/routesfilesDirs")

async function rowValues(name, callback) {
    if (!name) {
        callback(1);
        return;
    } else {
        if (name != "No data available in table") {
            fs.readFile(generalDir + dirSaveFile.dispositivo + name, async function(err, text) {
                if (err) {
                    callback(2);
                    return;
                } else {
                    //si el archivo existe, inserta en la db 
                    const datos = JSON.parse(text);
                    var values = [];

                    const con = Object.entries(datos).length - 1;

                    var indexDatos = 0;

                    datos.forEach(async row => {

                        await pool.query("select Id from pos.dispositivo where UDID = ?", [row.UDID],
                            function(err, result) {

                                //Proceso en consola
                                console.group("Procesando...")
                                console.log("Tabla dispositivo:")
                                console.log("Transacción " + indexDatos + " de " + con);
                                console.table(row)
                                console.groupEnd("Procesando...")

                                if (err) {
                                    callback(3);
                                    return;
                                } else {

                                    if (Object.entries(result).length === 0) {

                                        values.push(
                                            [
                                                row.Descripcion,
                                                row.UDID,
                                                row.UserName
                                            ]
                                        )
                                    }

                                    if (indexDatos === con) {
                                        callback(values);
                                    }

                                    indexDatos++

                                }
                            });
                    });
                }
            });
        } else {
            callback(6);
            return;
        }
    }

}


async function insertToDB(values, callback) {
    if (values === 1) {
        callback(values);
        return;
    }
    if (values === 2) {
        callback(values);
        return;
    }
    if (values === 3) {
        callback(values);
        return;
    }
    if (values === 6) {
        callback(values);
        return;
    }
    if (values != 1 && values != 2 && values != 3 && values != 6) {
        if (Object.entries(values).length === 0) {
            callback(5);
            return;
        } else {
            await pool.query(
                "INSERT INTO pos.dispositivo" +
                "(Descripcion," +
                "UDID," +
                "UserName)" +
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
    }
}

async function insert_dispositivo(name, callback) {
    await rowValues(name, async function(resolve) {
        if (resolve) {
            await insertToDB(resolve, async function(resolve) {
                if (resolve) {
                    callback(resolve);
                } else {
                    callback(8);
                }
            });
        } else {
            callback(7);
        }
    });
}

module.exports = insert_dispositivo;