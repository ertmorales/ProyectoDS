"use strict"

const bcrypt = require("bcrypt-nodejs");

async function encryptPass(PassKey, callback) {
    bcrypt.hash(PassKey, null, null, function(err, hash) {
        callback(hash);
    });
}

module.exports = encryptPass;