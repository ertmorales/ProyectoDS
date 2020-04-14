"use strict"
const pool = require("../database/database");

//Todos los productos
async function producto(req, res) {
    await pool.query("Select * from pos.producto", function(err, result) {
        if (err) {
            res.status(500).send({ messge: "La solicitud no puede ser procesada en este momento" });
        } else {
            if (Object.entries(result).length === 0) {
                res.status(404).send({ messge: "No hay datos siponibles en la tabla origen" });
            } else {
                res.status(200).send(result);
            }
        }
    });
}

//producto Id (producto)
async function producto_Producto(req, res) {

    const { Producto } = req.body

    await pool.query("Select * from pos.producto Where Producto = ?", [Producto], function(err, result) {
        if (err) {
            res.status(500).send({ messge: "La solicitud no puede ser procesada en este momento" });
        } else {
            if (Object.entries(result).length === 0) {
                res.status(404).send({ messge: "No hay coincidencias" });
            } else {
                res.status(200).send(result);
            }
        }
    })
}

//Producto descripcion
async function producto_Descripcion(req, res) {
    const { Descripcion } = req.body

    await pool.query("Select * from pos.producto Where Descripcion = ?", [Descripcion], function(err, result) {
        if (err) {
            res.status(500).send({ messge: "La solicitud no puede ser procesada en este momento" });
        } else {
            if (Object.entries(result).length === 0) {
                res.status(404).send({ messge: "No hay coincidencias" });
            } else {
                res.status(200).send(result);
            }
        }
    })
}

module.exports = {
    producto,
    producto_Producto,
    producto_Descripcion
}