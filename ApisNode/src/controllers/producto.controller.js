"use strict"
const pool = require("../database/database");

//Todos los productos
async function producto(req, res) {
    await pool.query("Select " +
        "T2.Nombre as Bodega, " +
        "T0.Producto as Id,  " +
        "T0.Descripcion as Producto, " +
        "T3.Descripcion as Unidad, " +
        "T1.Cantidad, " +
        "T0.Clase_Producto, " +
        "T0.Tipo_Producto " +
        "from pos.producto as T0 " +
        "inner join pos.inventario as T1 " +
        "on T0.Producto = T1.Producto " +
        "inner join pos.bodega as T2  " +
        "on T1.Bodega = T2.Bodega " +
        "inner join pos.unidad_medida as T3 " +
        "on T1.Unidad_Medida = T3.Unidad_Medida",
        function(err, result) {
            if (err) {
                console.log(err)
                res.status(500).send({ message: "La solicitud no puede ser procesada en este momento" });
            } else {
                if (Object.entries(result).length === 0) {
                    res.status(404).send({ message: "No hay datos siponibles en la tabla origen" });
                } else {
                    res.status(200).send(result);
                }
            }
        });
}

//producto Id (producto)
async function producto_Producto(req, res) {

    const { Producto } = req.body

    await pool.query("Select " +
        "T2.Nombre as Bodega, " +
        "T0.Producto as Id,  " +
        "T0.Descripcion as Producto, " +
        "T3.Descripcion as Unidad, " +
        "T1.Cantidad, " +
        "T0.Clase_Producto, " +
        "T0.Tipo_Producto " +
        "from pos.producto as T0 " +
        "inner join pos.inventario as T1 " +
        "on T0.Producto = T1.Producto " +
        "inner join pos.bodega as T2  " +
        "on T1.Bodega = T2.Bodega " +
        "inner join pos.unidad_medida as T3 " +
        "on T1.Unidad_Medida = T3.Unidad_Medida " +
        "Where T0.Producto = ?", [Producto],
        function(err, result) {
            if (err) {
                res.status(500).send({ message: "La solicitud no puede ser procesada en este momento" });
            } else {
                if (Object.entries(result).length === 0) {
                    res.status(404).send({ message: "No hay coincidencias" });
                } else {
                    res.status(200).send(result);
                }
            }
        })
}

//Producto descripcion
async function producto_Descripcion(req, res) {
    const { Descripcion } = req.body

    await pool.query("Select " +
        "T2.Nombre as Bodega, " +
        "T0.Producto as Id,  " +
        "T0.Descripcion as Producto, " +
        "T3.Descripcion as Unidad, " +
        "T1.Cantidad, " +
        "T0.Clase_Producto, " +
        "T0.Tipo_Producto " +
        "from pos.producto as T0 " +
        "inner join pos.inventario as T1 " +
        "on T0.Producto = T1.Producto " +
        "inner join pos.bodega as T2  " +
        "on T1.Bodega = T2.Bodega " +
        "inner join pos.unidad_medida as T3 " +
        "on T1.Unidad_Medida = T3.Unidad_Medida " +
        "Where T0.Descripcion = ?", [Descripcion],
        function(err, result) {
            if (err) {
                res.status(500).send({ message: "La solicitud no puede ser procesada en este momento" });
            } else {
                if (Object.entries(result).length === 0) {
                    res.status(404).send({ message: "No hay coincidencias" });
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