"use strict"

//modulos par alas peticones http
const express = require("express");
const api = express.Router();
//controlador
const producto = require("../controllers/producto.controller");

//rutas
api.get("/producto", producto.producto);
api.post("/producto_Producto", producto.producto_Producto);
api.post("/producto_Descripcion", producto.producto_Descripcion);

//exportaciona global
module.exports = api;