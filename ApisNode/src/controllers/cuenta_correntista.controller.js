"use strict"

const pool = require("../database/database");

//Muestra todas las cuentas disponibles
async function cuenta_correntista(req, res) {

    await pool.query("Select * from pos.cuenta_correntista",
        function(err, result) {
            if (err) {
                res.status(500).send({ message: "Ha ocurrdo un error, intentelo mas tarde" });
            } else {
                if (Object.entries(result).length === 0) {
                    res.status(404).send({ message: "No hay datos disponibles en la tabla origen" });
                } else {
                    res.status(200).send(result);
                }
            }
        }
    );
}

//Filtro   nombre
async function cuenta_correntista_nombre(req, res) {

    const { Nombre } = req.body;

    await pool.query("Select * from pos.cuenta_correntista Where Nombre = ?", [Nombre],
        function(err, result) {
            if (err) {
                res.status(500).send({ message: "Ha ocurrido un error, intentelo más tarde" });
            } else {
                if (Object.entries(result).length === 0) {
                    res.status(404).send({ message: "No hay coincidencias" });
                } else {
                    res.status(200).send(result);
                }
            }
        }
    );
}

//Filtro ID_Cuenta
async function cuenta_correntista_Id(req, res) {

    const { ID_Cuenta } = req.body;

    await pool.query("Select * from pos.cuenta_correntista Where ID_Cuenta = ?", [ID_Cuenta],
        function(err, result) {
            if (err) {
                res.status(500).send({ message: "Ha ocurrido un erro, instentelo más tarde" });
            } else {
                if (Object.entries(result).length === 0) {
                    res.status(404).send({ message: "No hay coincidencias" });
                } else {
                    res.status(200).send(result);
                }
            }
        }
    );
}

//Filtro NIT
async function cuenta_correntista_NIT(req, res) {

    const { NIT } = req.body;

    await pool.query("Select * from pos.cuenta_correntista Where NIT = ?", [NIT],
        function(err, result) {
            if (err) {
                res.status(500).send({ message: "Ha ocurrido un error, intentalo más tarde" });
            } else {
                if (Object.entries(result).length === 0) {
                    res.status(404).send({ message: "No hay coincidencias" });
                } else {
                    res.status(200).send(result);
                }
            }
        }
    );
}

module.exports = {
    cuenta_correntista,
    cuenta_correntista_nombre,
    cuenta_correntista_Id,
    cuenta_correntista_NIT
}