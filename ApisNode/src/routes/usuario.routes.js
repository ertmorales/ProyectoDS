"use strict"

const express = require("express");
const api = express.Router();
const usuario = require("../controllers/usuario.controller");

api.post("/login", usuario.login);

module.exports = api;