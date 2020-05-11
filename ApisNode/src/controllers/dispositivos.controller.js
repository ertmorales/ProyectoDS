"use strict"

const { v4: uuidv4 } = require("uuid")

function UUID(req, res) {
    const _UUID = uuidv4();
    res.send(_UUID);
}

module.exports = {
    UUID
};