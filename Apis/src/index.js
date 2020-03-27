"use strict"

//configuraciones htpps
const app = require("./app");

//db MySQL
const pool = require("./database/database");

//puerto para sel servidor
const port = process.env.PORT || 3997;

//inicializacion del servidor
app.listen(port, function() {
    console.log("Servidor iniciado en http://localhost:" + port);
});