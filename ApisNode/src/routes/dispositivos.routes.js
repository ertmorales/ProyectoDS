"use strict"

//modulos par alas peticones http
const express = require("express");
const api = express.Router();
//controlador
const UUID_dispositivo = require("../controllers/dispositivos.controller");

//rutas
api.get("/generate_UUID", UUID_dispositivo.UUID);

//exportaciona global
module.exports = api;