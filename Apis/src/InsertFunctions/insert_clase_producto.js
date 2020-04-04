const pool = require("../database/database");
const fs = require("fs");
const { generalDir, dirSaveFile } = require("../Global/routesfilesDirs")

async function insert_clase_producto(name, callback) {
    if (!name) {
        callback(1);
        return;
    } else {

        //le archivo
        fs.readFile(generalDir + dirSaveFile.clase_producto + name, async function(err, text) {
            if (err) {
                callback(2);
                return;
            } else {
                //si el archivo existe, inserta en la db 
                const datos = JSON.parse(text);
                var values = [];
                datos.forEach(async row => {
                    await pool.query("select Id from pos.clase_producto where Id = ?", [row.Id], function(err, result) {
                        if (err) {
                            callback(3);
                            return;
                        } else {
                            if (Object.entries(result).length === 0) {
                                ////////console.log(row);
                                values.push(
                                    [
                                        row.Clase_Producto,
                                        row.Descripcion,
                                        row.Empresa
                                    ]
                                )
                            }
                        }
                    });
                });

                await pool.query(
                    "INSERT INTO pos.clase_producto" +
                    "(Clase_Producto," +
                    "Descripcion," +
                    "Empresa)" +
                    "VALUES ?", [values],
                    function(err, result) {
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

module.exports = insert_clase_producto;