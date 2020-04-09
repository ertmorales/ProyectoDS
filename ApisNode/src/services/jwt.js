"use strict"

const jwt = require("jwt-simple");
const moment = require("moment");
const secret = "demo2020*" //clave para validar token

exports.createToken = function(user) {

    const payload = {
        user: user.user, //datos del usuario 
        iat: moment().unix(), //fecha de creacion de token 
        exp: moment().add(5, "minutes").unix() //token valido durante 5 minutos
    };

    return jwt.encode(payload, secret);
};