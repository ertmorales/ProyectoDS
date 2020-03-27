"use strict"

const jwt = require("jwt-simple");
const moment = require("moment");
const secret = "demo2020*";

exports.ensureAuth = function(req, res, next) {
    if (!req.headers.authorization) {
        return res.status(403).send({ message: "No hay cabecera de autenticación" });
    }

    const token = req.headers.authorization.replace(/['"]+/g, "");

    try {
        var payload = jwt.decode(token, secret);

        if (payload.exp <= moment().unix()) {
            return res.status(401).send({ message: "La sesión ha caducado" });
        }
    } catch (ex) {
        console.log(ex)
        return res.status(404).send({ message: "Token invalido, la sesión ha caducado" });
    }

    req.user = payload;

    next();
};