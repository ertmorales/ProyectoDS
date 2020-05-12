"use strict"

const { v4: uuidv4 } = require("uuid");
const pool = require("../database/database");

function UUID(req, res) {
    const _UUID = uuidv4();
    if (_UUID) {
        res.status(200).send({ message: _UUID });
    } else {
        res.status(200).send({ message: null });
    }
}

async function saveUUID(req, res) {

    const { UUID } = req.body;

    await pool.query("select Id from pos.dispositivo where UDID = ?", [UUID],
        async function(err, result) {
            if (err) {
                res.status(500).send({ message: "Ha ocurrido un error al registrar el dipositivo (1)" });
            } else {
                if (Object.entries(result).length === 0) {

                    let values = [
                        [
                            UUID
                        ]
                    ];

                    await pool.query(
                        "INSERT INTO pos.dispositivo " +
                        "(UDID) " +
                        "VALUE ?", [values],
                        async function(err, result) {
                            if (err) {
                                res.status(500).send({ message: "Ha ocurrido un error al registrar el dispositivo (2)" });
                                console.log(err);
                            } else {
                                res.status(201).send({ message: "Dispositivo registrado exitosamente" });
                            }
                        }
                    );
                } else {
                    res.status(200).send({ message: "El dispositivo ya está registrado" });
                }
            }
        }
    );
}

module.exports = {
    UUID,
    saveUUID
};