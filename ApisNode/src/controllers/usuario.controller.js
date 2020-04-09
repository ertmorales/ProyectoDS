"use stric"
"use strict"

const pool = require("../database/database");
const bcrypt = require("bcrypt-nodejs");

//login sin contraseña encriptada
async function loginSample(req, res) {

    const { UserName } = req.body;
    const { Pass_Key } = req.body;

    await pool.query("Select * from pos.usuario Where UserName = ? and Pass_Key = ?", [UserName, Pass_Key],
        function(err, result) {
            if (err) {
                res.status(500).send({ message: "Error (1)" });
            } else {
                if (Object.entries(result).length === 0) {
                    res.status(404).send({ message: "Usuario o contraseña incorrecta" });
                } else {
                    res.status(200).send(result);
                }
            }
        }
    );

}

//login contraseña encriptada
function login(req, res) {

    const { UserName, Pass_Key } = req.body;

    pool.query("Select * from pos.usuario Where UserName = ?", [UserName], function(err, result) {
        if (err) {
            res.status(500).send({ message: "Error, intentelo mas tarde" });
        } else {
            if (Object.entries(result).length === 0) {
                res.status(404).send({ message: "Usuario o contraseña incorrecta (1)" });
            } else {
                bcrypt.compare(Pass_Key, result[0].Pass_Key, function(err, check) {
                    if (check) {
                        res.status(200).send(result);
                    } else {
                        res.status(404).send({ message: "Usuario o contraseña incorrecta (2)" });
                    }
                });
            }
        }
    });
}

module.exports = {
    login
}