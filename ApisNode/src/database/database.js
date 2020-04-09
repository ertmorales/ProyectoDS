"use strict"

//modulos requeridos para trabajr con Mysql
const mysql = require("mysql");
const { promisify } = require("util");

//info db
const { database } = require("./keys");

//conexion db MySQL en pool 
const pool = mysql.createPool(database);

//abrir conexion a MySQl
pool.getConnection((err, connection) => {
    if (err) {
        console.log("Error en la conexión con MySQL")
        console.log(err);
    } else {
        console.log("Conexión con MySQl exitosa")
    }
    return;
});

//Configuracion con util.promisify para realizar querys a la db
pool.query = promisify(pool.query);

//exportoacion en todo el proyecto
module.exports = pool;