"use strict "
const moment = require("moment");

function fechaCreacion() {
    let ahora = moment();
    return ahora.format('YYYY-MM-DD-HH-mm');
}

module.exports = fechaCreacion;