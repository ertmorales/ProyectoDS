"use strict"

const express = require("express");
const getSyncController = require("../controllers/getSync.controller");
const setSyncController = require("../controllers/setSync.controller");
const api = express.Router();

api.get("/Data", getSyncController.main);
api.post("/Data", setSyncController.main);

module.exports = api;