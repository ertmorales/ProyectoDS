"use trict"

//modulos par alas peticones http
const express = require("express");
const api = express.Router();
//controlador
const cuenta_correntista = require("../controllers/cuenta_correntista.controller");

//rutas
api.get("/cuenta_correntista", cuenta_correntista.cuenta_correntista);
api.post("/cuenta_correntista_nombre", cuenta_correntista.cuenta_correntista_nombre);
api.post("/cuenta_correntista_Id", cuenta_correntista.cuenta_correntista_Id);
api.post("/cuenta_correntista_NIT", cuenta_correntista.cuenta_correntista_NIT);
api.post("/nueva_cuenta_correntista", cuenta_correntista.nueva_cuenta_correntista);

//exportaciona global
module.exports = api;